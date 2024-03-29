import { useEffect, useRef, useState } from 'react'
import RxPlayer from 'rx-player'

import ChapterBar from './ChapterBar'
import ControlBar from './ControlBar'
import CrewMemberBar from './CrewMemberBar'

import { DetailedScene, Scene } from '../models/Scene'

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const videoRef = useRef(null)
  const playerRef = useRef(null as unknown as RxPlayer)

  const [playerState, setPlayerState] = useState('')
  const [scenes, setScenes] = useState<DetailedScene[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const scenesResponse = await fetch(
          'https://teamplayer.ddns.net:9094/scenes'
        )
        const scenes: Scene[] = await scenesResponse.json()
        // Fetch detailed scenes and merge attributes concurrently
        const mergedScenesPromises = scenes.map(async (scene) => {
          const detailedSceneResponse = await fetch(
            `https://teamplayer.ddns.net:9094/scene/${scene.beginTimecode}`
          )
          const detailedScene = await detailedSceneResponse.json()

          // Merge Scene and DetailedScene attributes
          const mergedScene = { ...scene, ...detailedScene }

          return mergedScene
        })

        // Wait for all merged scenes to be fetched
        const mergedScenes = await Promise.all(mergedScenesPromises)

        setScenes(mergedScenes)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const player = new RxPlayer({
      videoElement: videoRef.current as unknown as HTMLMediaElement,
    })

    playerRef.current = player

    player.loadVideo({
      url: videoUrl,
      transport: 'directfile',
    })

    // Listen for events to update the player state
    const updatePlayerState = () => {
      if (playerRef.current) {
        setPlayerState(playerRef.current.getPlayerState())
      }
    }

    // Attach event listeners
    player.addEventListener('play', updatePlayerState)
    player.addEventListener('pause', updatePlayerState)

    // Initial state update
    updatePlayerState()

    return () => {
      player.dispose()
    }
  }, [videoUrl])

  return (
    <div className="max-w-80 m-auto">
      <video className="w-full text-center" ref={videoRef} controls={false} />
      <ControlBar player={playerRef.current} playerState={playerState} />
      <ChapterBar
        player={playerRef.current}
        scenes={scenes}
        loading={loading}
      />
      <CrewMemberBar />
    </div>
  )
}

export default VideoPlayer

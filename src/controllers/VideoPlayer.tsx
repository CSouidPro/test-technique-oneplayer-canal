import { useEffect, useRef } from 'react'
import RxPlayer from 'rx-player'

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const videoRef = useRef(null)
  const playerRef = useRef(null as unknown as RxPlayer)

  useEffect(() => {
    const player = new RxPlayer({
      videoElement: videoRef.current as unknown as HTMLMediaElement,
    })

    playerRef.current = player

    player.loadVideo({
      url: videoUrl,
      transport: 'directfile',
    })

    return () => {
      player.dispose()
    }
  }, [videoUrl])

  return (
    <div className="max-w-80 m-auto">
      <video className="w-full text-center" ref={videoRef} controls={true} />
    </div>
  )
}

export default VideoPlayer

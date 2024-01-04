import React, { useEffect, useState } from 'react'
import RxPlayer from 'rx-player'

import { Reaction } from '../models/Scene'

const ProgressBar = ({
  player,
  reactions,
}: {
  player: RxPlayer
  reactions: Reaction[]
}) => {
  const progressBarRef = React.createRef<HTMLDivElement>()
  const [progress, setProgress] = useState(0)
  const [displayReactions, setDisplayReactions] = useState(false)

  useEffect(() => {
    const updateProgress = () => {
      if (player) {
        const currentTime = player.getPosition()
        const duration = player.getVideoDuration()
        const calculatedProgress = (currentTime / duration) * 100
        setProgress(isNaN(calculatedProgress) ? 0 : calculatedProgress)
      }
    }

    const intervalId = setInterval(updateProgress, 500)

    return () => {
      clearInterval(intervalId)
    }
  }, [player])

  useEffect(() => {
    if (reactions.length) {
      console.log(reactions)
      setDisplayReactions(true)
    }
  }, [reactions])

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (player && progressBarRef.current) {
      const progressBarRect = progressBarRef.current.getBoundingClientRect()
      const clickX = event.clientX - progressBarRect.left
      const progressBarWidth = progressBarRect.width
      const clickPercentage = (clickX / progressBarWidth) * 100
      const newPosition = (clickPercentage / 100) * player.getVideoDuration()
      player.seekTo(newPosition)
    }
  }
  return (
    <div className="relative">
      <div
        className="border-x-2 border-black bg-white h-2.5"
        ref={progressBarRef}
        onClick={handleProgressBarClick}
      >
        <div
          data-testid="progress-bar"
          className="bg-blue-500 h-2.5"
          style={{ width: `${progress}%` }}
        />
      </div>
      {displayReactions &&
        reactions.map((reaction: Reaction, index) => {
          const markerPosition =
            (reaction.timecode / player.getVideoDuration()) * 100
          return (
            <div
              key={index}
              className="absolute top-0 -mt-1"
              style={{ left: `${markerPosition}%` }}
            >
              <div
                className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
                title={`${reaction.name}: ${reaction.message}`}
              />
            </div>
          )
        })}
    </div>
  )
}

export default ProgressBar

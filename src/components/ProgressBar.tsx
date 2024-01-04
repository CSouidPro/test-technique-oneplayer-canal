import React, { useEffect, useState } from 'react'
import RxPlayer from 'rx-player'

const ProgressBar = ({ player }: { player: RxPlayer }) => {
  const progressBarRef = React.createRef<HTMLDivElement>()
  const [progress, setProgress] = useState(0)

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
  )
}

export default ProgressBar

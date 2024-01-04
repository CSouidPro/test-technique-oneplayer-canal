import { useEffect, useState } from 'react'
import { formatTimecodeAsClock } from '../utils/timecode-converter'
import RxPlayer from 'rx-player'
import { act } from '@testing-library/react'

const CurrentTime = ({ player }: { player: RxPlayer }) => {
  const [position, setPosition] = useState(0)
  const [videoDuration, setDuration] = useState(0)

  useEffect(() => {
    const updatePositionAndDuration = () => {
      const currentPosition = player.getPosition()
      const totalDuration = player.getVideoDuration()

      act(() => {
        setPosition(currentPosition)
        setDuration(totalDuration)
      })
    }

    const intervalId = setInterval(updatePositionAndDuration, 500)

    return () => {
      clearInterval(intervalId)
    }
  }, [player])

  return (
    <div className="bg-black text-white" data-testid="current-time-value">
      {formatTimecodeAsClock(position)} / {formatTimecodeAsClock(videoDuration)}
    </div>
  )
}

export default CurrentTime

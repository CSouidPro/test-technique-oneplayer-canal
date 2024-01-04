import { useEffect, useState } from 'react'
import RxPlayer from 'rx-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CurrentTime from '../components/CurrentTime'
import ProgressBar from '../components/ProgressBar'
import FullScreenButton from '../components/FullScreenButton'
import { Reaction } from '../models/Scene'

const ControlBar = ({
  player,
  playerState,
  reactions,
}: {
  player: RxPlayer
  playerState: string
  reactions: Reaction[]
}) => {
  const [isPaused, setIsPaused] = useState(true)

  // Listen for events to update the player state
  const updateIsPaused = () => {
    if (player) {
      setIsPaused(player.isPaused())
    }
  }

  useEffect(() => {
    updateIsPaused()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerState])

  const handlePlayButtonClick = () => {
    player.play()
  }

  const handlePauseButtonClick = () => {
    player.pause()
  }

  return (
    <div>
      <ProgressBar player={player} reactions={reactions} />
      <div className="p-6 flex justify-between bg-black">
        <div className="flex items-start">
          {isPaused && (
            <button className="pl-2.5" onClick={handlePlayButtonClick}>
              <FontAwesomeIcon icon="play" size="xl" color="white" />
            </button>
          )}
          {!isPaused && (
            <button className="pl-2.5" onClick={handlePauseButtonClick}>
              <FontAwesomeIcon icon="pause" size="xl" color="white" />
            </button>
          )}
        </div>
        <div className="flex items-center">
          <CurrentTime player={player} />
        </div>
        <div className="flex items-end bg-black">
          <FullScreenButton player={player} />
        </div>
      </div>
    </div>
  )
}

export default ControlBar

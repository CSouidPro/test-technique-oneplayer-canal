import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RxPlayer from 'rx-player'

const FullScreenButton = ({ player }: { player: RxPlayer }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement !== null)
    }

    document.addEventListener('fullscreenchange', handleFullScreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
    }
  }, [])

  const toggleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen()
    } else {
      player.getVideoElement()?.requestFullscreen()
    }
  }

  return (
    <button className="vertical-center pl-2.5" onClick={toggleFullScreen}>
      {isFullScreen ? (
        <FontAwesomeIcon icon="minimize" size="xl" color="white" />
      ) : (
        <FontAwesomeIcon icon="maximize" size="xl" color="white" />
      )}
    </button>
  )
}

export default FullScreenButton

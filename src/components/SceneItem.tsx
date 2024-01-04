import RxPlayer from 'rx-player'

import { DetailedScene } from '../models/Scene'

import { formatTimecodeAsClock } from '../utils/timecode-converter'

const SceneItem = ({
  scene,
  player,
}: {
  scene: DetailedScene
  player: RxPlayer
}) => {
  const handleSceneClick = (scene: DetailedScene) => {
    player.seekTo(scene.beginTimecode)
  }

  return (
    <div
      className="m-2.5 border-2 border-white p-2.5 cursor-pointer"
      onClick={() => handleSceneClick(scene)}
    >
      {/* <img src={scene.image} alt={scene.title} className="w-full h-auto" /> */}
      <div className="text-xs">
        <span>
          {formatTimecodeAsClock(scene.beginTimecode)} -{' '}
          {formatTimecodeAsClock(scene.endTimecode)}
        </span>
      </div>
      <div className="text-xs">{scene.title}</div>
    </div>
  )
}

export default SceneItem

import RxPlayer from 'rx-player'
import { Tooltip } from 'react-tooltip'

import { Casting, DetailedScene } from '../models/Scene'

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
    <>
      <div
        className="m-2.5 border-2 border-white p-2.5 cursor-pointer"
        onClick={() => handleSceneClick(scene)}
        data-tooltip-id={`tooltip-${scene.id}`}
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
      <Tooltip id={`tooltip-${scene.id}`} place="bottom">
        <div>
          <p>Scene Casting :</p>
          {scene.casting.map((cast: Casting) => {
            return (
              <div key={cast.id}>
                {cast.name} {cast.description}
              </div>
            )
          })}
        </div>
      </Tooltip>
    </>
  )
}

export default SceneItem

import RxPlayer from 'rx-player'

import { DetailedScene } from '../models/Scene'
import SceneItem from '../components/SceneItem'

const ChapterBar = ({
  player,
  scenes,
  loading,
}: {
  player: RxPlayer
  scenes: DetailedScene[]
  loading: boolean
}) => {
  return (
    <>
      {loading ? (
        <p> Loading...</p>
      ) : (
        <div className="border-2 border-black bg-black text-white">
          <h1 className="text-left font-bold m-6 underline decoration-white">
            Chapitres
          </h1>
          <div className="flex max-w-screen overflow-x-auto m-6 border-2 border-white rounded-lg">
            <ul className="flex list-none p-0 m-0">
              {scenes?.map((scene: DetailedScene) => (
                <li
                  key={scene.id}
                  className="flex-shrink-0 p-2 border-r border-blue-500 bg-white text-blue-500 font-bold last:border-r-0"
                >
                  <SceneItem scene={scene} player={player} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default ChapterBar

import { render, fireEvent } from '@testing-library/react'
import SceneItem from './SceneItem'
import { DetailedScene } from '../models/Scene'
import { formatTimecodeAsClock } from '../utils/timecode-converter'
import RxPlayer from 'rx-player'

const mockScene: DetailedScene = {
  id: 1,
  title: 'Mock Scene',
  beginTimecode: 1000,
  endTimecode: 2000,
  image: '',
  casting: [],
  reactions: [],
}

describe('SceneItem', () => {
  const player = new RxPlayer()

  beforeEach(() => {
    player.seekTo = jest.fn()
  })

  it('calls player.seekTo with the correct timecode when clicked', () => {
    const { getByText } = render(
      <SceneItem scene={mockScene} player={player} />
    )
    const timecode = getByText(
      formatTimecodeAsClock(mockScene.beginTimecode) +
        ' - ' +
        formatTimecodeAsClock(mockScene.endTimecode)
    )
    fireEvent.click(timecode)
    expect(player.seekTo).toHaveBeenCalledWith(mockScene.beginTimecode)
  })
})

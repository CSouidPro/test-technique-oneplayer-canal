import { act, render, screen } from '@testing-library/react'
import RxPlayer from 'rx-player'
import CurrentTime from './CurrentTime'

jest.mock('rx-player')

describe('CurrentTime', () => {
  beforeEach(() => {
    jest.useFakeTimers() // Enable fake timers
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.runOnlyPendingTimers() // Ensure any remaining timers are executed
    jest.useRealTimers() // Restore real timers
  })

  it('renders the current time and total duration of the video', () => {
    const mockGetPosition = jest.fn().mockReturnValue(50)
    const mockGetVideoDuration = jest.fn().mockReturnValue(100)

    // Create a manual mock for RxPlayer
    const mockRxPlayer = new RxPlayer()
    mockRxPlayer.getPosition = mockGetPosition
    mockRxPlayer.getVideoDuration = mockGetVideoDuration

    jest.mock('rx-player', () => {
      return jest.fn().mockImplementation(() => mockRxPlayer)
    })

    act(() => {
      render(<CurrentTime player={mockRxPlayer} />)
    })

    // Ensure that timers are advanced
    act(() => {
      jest.runOnlyPendingTimers()
    })

    // Additional assertion to check if getPosition and getVideoDuration are called

    act(() => {
      expect(mockGetPosition).toHaveBeenCalled()
      expect(mockGetVideoDuration).toHaveBeenCalled()
    })

    act(() => {
      expect(screen.getByTestId('current-time-value')).toHaveTextContent(
        '00:50 / 01:40'
      )
    })
  })
})

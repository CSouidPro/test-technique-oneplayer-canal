import { formatTimecodeAsClock } from './timecode-converter'

describe('formatTimecodeAsClock', () => {
  it('should return formatted timecode', () => {
    expect(formatTimecodeAsClock(30)).toEqual('00:30')
    expect(formatTimecodeAsClock(60)).toEqual('01:00')
    expect(formatTimecodeAsClock(75)).toEqual('01:15')
  })

  it('should pad single digit minutes with zero', () => {
    expect(formatTimecodeAsClock(10)).toEqual('00:10')
  })

  it('should pad single digit seconds with zero', () => {
    expect(formatTimecodeAsClock(20)).toEqual('00:20')
  })
})

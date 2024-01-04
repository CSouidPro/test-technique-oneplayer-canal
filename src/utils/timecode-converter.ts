export function formatTimecodeAsClock(timecode: number): string {
  const minutes = Math.floor(timecode / 60)
  const remainingSeconds = timecode % 60

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  const formattedSeconds =
    remainingSeconds < 10
      ? `0${remainingSeconds.toFixed(0)}`
      : `${remainingSeconds.toFixed(0)}`

  return `${formattedMinutes}:${formattedSeconds}`
}

export function getTimerDisplayText(timer: number) {
  const seconds = Math.floor(timer / 1000) % 60;
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(minutes / 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export function displayConvertedTime(duration: number) {
  // This function is used to convert ms to an appropriate unit of measurement (secs, mins or hours)
  if (duration < 60000) {
    return `${(duration / 1000)} secs`;
  } else if (duration < 3600000) {
    return `${(duration / 60000).toFixed(2)} mins`;
  } else {
    return `${(duration / 3600000).toFixed(2)} hours`;
  }
}

export function getTimerDisplayText(timer: number) {
  const seconds = Math.floor(timer / 1000) % 60;
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(minutes / 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

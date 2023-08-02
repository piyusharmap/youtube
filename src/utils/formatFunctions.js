export function formatDuration(duration) {
  if (
    typeof duration !== "string" ||
    !/^PT(\d+H)?(\d+M)?(\d+S)?$/.test(duration)
  ) {
    return "00:00";
  }

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  const hoursMatch = duration.match(/(\d+)H/);
  if (hoursMatch) {
    hours = parseInt(hoursMatch[1], 10);
  }

  const minutesMatch = duration.match(/(\d+)M/);
  if (minutesMatch) {
    minutes = parseInt(minutesMatch[1], 10);
  }

  const secondsMatch = duration.match(/(\d+)S/);
  if (secondsMatch) {
    seconds = parseInt(secondsMatch[1], 10);
  }

  const padZero = (value) => (value < 10 ? `0${value}` : value);

  return `${hours !== 0 ? padZero(hours) + ":" : ""}${padZero(
    minutes
  )}:${padZero(seconds)}`;
}

export function formatCount(count) {
  if (typeof count !== "number" && typeof count !== "string") {
    return "0";
  }

  let num = typeof count === "string" ? parseInt(count, 10) : count;

  if (isNaN(num)) {
    return "Invalid input. Please provide a valid number or number as a string.";
  }

  const abbreviations = ["", "K", "M", "B"];
  let magnitude = 0;

  while (num >= 1000 && magnitude < abbreviations.length - 1) {
    num /= 1000;
    magnitude++;
  }

  num = Math.round(num * 100) / 100;

  return num.toString() + abbreviations[magnitude];
}

export function formatPublishedAt(dateString) {
  const providedDate = new Date(dateString);
  if (isNaN(providedDate)) {
    return "0 days ago";
  }

  const currentTime = new Date();
  const timeDifference = currentTime - providedDate;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Assuming 30 days per month on average
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
}

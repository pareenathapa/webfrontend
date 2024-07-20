export const getTimeDifference = (dateString) => {
  const now = new Date();
  const reviewDate = new Date(dateString);
  const diffInMilliseconds = now - reviewDate;

  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(
    diffInMilliseconds / (1000 * 60 * 60 * 24 * 30)
  );
  const diffInYears = Math.floor(
    diffInMilliseconds / (1000 * 60 * 60 * 24 * 365)
  );

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
  } else if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths === 1 ? "" : "s"} ago`;
  } else {
    return `${diffInYears} year${diffInYears === 1 ? "" : "s"} ago`;
  }
};

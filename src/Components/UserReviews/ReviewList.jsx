import { getTimeDifference } from "../../utills/DateFormate";

export const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list-container">
      {reviews.map((review, index) => (
        <div className="user-review mt-2" key={index}>
          <div className="d-flex align-items-center gap-1">
            <div className="user-name-avatar">{review.name.charAt(0)}</div>
            <div className="user-name">{review.name}</div>
          </div>
          <div className="review-description">
            <div className="reviewed-date">
              {getTimeDifference(review.date)}{" "}
            </div>
            <small>{review.reviews}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

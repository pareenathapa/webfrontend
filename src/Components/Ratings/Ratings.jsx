import React, { useState } from "react";
import "../../pages/CSS/Rating.css"; // We'll add some basic styles

const Rating = ({ productRating }) => {
  const [rating, setRating] = useState(productRating);
  const [hoverRating, setHoverRating] = useState(0);

  const Star = ({ starId, onMouseEnter, onMouseLeave, onClick }) => (
    <span
      className={`star ${
        rating >= starId || hoverRating >= starId ? "filled" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      ★
    </span>
  );

  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          starId={i + 1}
          onMouseEnter={() => setHoverRating(i + 1)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => setRating(i + 1)}
        />
      ))}
    </div>
  );
};

export default Rating;

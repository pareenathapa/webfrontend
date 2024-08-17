import { Button } from "reactstrap";
import "../../pages/CSS/CustomerReview.css";
import { useEffect, useState } from "react";
import { ReviewList } from "./ReviewList";
import { toast } from "react-toastify";
import reviews from "../../utills/reviews.json";

export const UserReview = () => {
  const [openReviewForm, setOpenReviewForm] = useState(false);
  const [userReviews, setUserReviews] = useState(reviews);
  const [formItems, setFormItems] = useState({
    name: "",
    email: "",
    reviews: "",
    date: new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormItems({
      ...formItems,
      [name]: value,
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const updatedReviews = [formItems, ...existingReviews];
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    const userTotalReviews = [...updatedReviews, ...userReviews];
    setUserReviews(userTotalReviews);
    toast.success("Your review added successfully");
    setFormItems({ name: "", email: "", reviews: "" });
    setOpenReviewForm(false);
  };

  useEffect(() => {
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    if (existingReviews.length) {
      const userTotalReviews = [...existingReviews, ...userReviews];
      setUserReviews(userTotalReviews);
    }
  }, []);

  return (
    <div className="border p-3 review-container ">
      <div className="d-flex justify-content-between align-items-center">
        <h4>Reviews</h4>
        <span
          className="add-btn"
          size="sm"
          onClick={() => setOpenReviewForm(!openReviewForm)}
        >
          {openReviewForm ? "Close Form" : "Add your review"}
        </span>
      </div>
      {openReviewForm ? (
        <form className="mt-2" onSubmit={handleReviewSubmit}>
          <div className="d-flex gap-3">
            <div className="form-input-groups">
              <div className="i-label">Name</div>
              <div>
                <input
                  type="text"
                  className="i-input"
                  placeholder="full name"
                  name="name"
                  required
                  value={formItems.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-input-groups">
              <div className="i-label">Email</div>
              <div>
                <input
                  type="email"
                  className="i-input"
                  placeholder="exmaple@gmail.com"
                  name="email"
                  required
                  value={formItems.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="form-input-groups">
            <div className="i-label">Reviews</div>
            <div>
              <textarea
                type="email"
                className="i-input"
                placeholder="your reviews"
                rows="5"
                name="reviews"
                onChange={handleInputChange}
                value={formItems.reviews}
              />
            </div>
            <div className="text-end mt-2">
              <Button color="primary">Submit your review</Button>
            </div>
          </div>
        </form>
      ) : null}
      <ReviewList reviews={userReviews} />
    </div>
  );
};

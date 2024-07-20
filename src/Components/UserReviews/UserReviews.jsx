import { Button } from "reactstrap";
import "../../pages/CSS/CustomerReview.css";
import { useState } from "react";

export const UserReview = () => {
  const [openReviewForm, setOpenReviewForm] = useState(false);
  const [formItems, setFormItems] = useState({
    userName: "",
    email: "",
    reviews: "",
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
    console.log("form", formItems);
    // setFormItems(e);
  };
  return (
    <div className="border p-3 review-container">
      <div className="d-flex justify-content-between align-items-center">
        <h4>Customers reviews</h4>
        <Button
          className="text-underline"
          size="sm"
          onClick={() => setOpenReviewForm(!openReviewForm)}
        >
          Add your review
        </Button>
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
                  name="userName"
                  required
                  value={formItems.userName}
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
    </div>
  );
};

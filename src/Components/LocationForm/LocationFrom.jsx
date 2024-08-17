import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

export const LocationForm = () => {
  const [submitAddress, setSubmitAddress] = useState(false);

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    setSubmitAddress(true);
    toast.succcess("Your payment initiated successfully");
  };

  return (
    <>
      {submitAddress ? (
        <div
          className="text-center  d-flex align-items-center justify-content-center w-100 mt-4"
          style={{
            background: "#D0F0C0",
            padding: "10px",
            fontWeight: "600",
            borderRadius: "10px",
          }}
        >
          Thank you for submitting your address. We will deliver your order to
          your location.
        </div>
      ) : (
        <div className="bg-white">
          <form className="mt-2" onSubmit={handleLocationSubmit}>
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
                    //   value={formItems.name}
                    //   onChange={handleInputChange}
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
                    //   value={formItems.email}
                    //   onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex gap-3 mt-2">
              <div className="form-input-groups">
                <div className="i-label">Region</div>
                <div>
                  <input
                    type="text"
                    className="i-input"
                    placeholder="Bagmati"
                    name="name"
                    required
                    //   value={formItems.name}
                    //   onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-input-groups">
                <div className="i-label">City</div>
                <div>
                  <input
                    type="text"
                    className="i-input"
                    placeholder="Kathmandu"
                    name="city"
                    required
                    //   value={formItems.email}
                    //   onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex gap-3 mt-2">
              <div className="form-input-groups">
                <div className="i-label">Phone</div>
                <div>
                  <input
                    type="number"
                    className="i-input"
                    placeholder="9801231223"
                    name="name"
                    required
                    //   value={formItems.name}
                    //   onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-input-groups">
                <div className="i-label">Area</div>
                <div>
                  <input
                    type="text"
                    className="i-input"
                    placeholder="Samridi Marga"
                    name="Area"
                    required
                    //   value={formItems.email}
                    //   onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="text-end mt-3">
              <Button color="primary">Submit your location</Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

import { Button } from "reactstrap";
import { LocationForm } from "../../Components/LocationForm";
import { Layout } from "../../Components/Layout/Layout";
import KhaltiImge from "../../khalti-logo.png";
import { toast } from "react-toastify";

export const CheckoutPage = () => {
  const khaltiData = {
    return_url: "http://localhost:3000",
    website_url: "http://localhost:3000",
    amount: 1300,
    purchase_order_id: "HT6o6PEZRWFJ5ygavzHWd5",
    purchase_order_name: "rupak",
    customer_info: {
      name: "Khalti Bahadur",
      email: "example@gmail.com",
      phone: "9800000123",
    },
    amount_breakdown: [
      {
        label: "Mark Price",
        amount: 1000,
      },
      {
        label: "VAT",
        amount: 300,
      },
    ],
    product_details: [
      {
        identity: "1234567890",
        name: "Khalti logo",
        total_price: 1300,
        quantity: 1,
        unit_price: 1300,
      },
    ],
    merchant_username: "omega inernational",
    merchant_extra: "merchant_extra",
  };

  const khaltiPayment = async () => {
    try {
      const response = await fetch(
        "https://a.khalti.com/api/v2/epayment/initiate/",
        {
          headers: {
            Authorization:
              "key test_public_key_dc74e0fd57cb46cd93832aee0a507256",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(khaltiData),
        }
      );

      // Await the response.json() to get the actual data
      const data = await response.json();
      console.log("data", data);
      window.open("https://test-pay.khalti.com/?pidx=qjUob6V4ubSCWoG8woGy7m");
    } catch (error) {
      console.log("error", error);
      toast.error(error.detail);
      window.open("https://test-pay.khalti.com/?pidx=qjUob6V4ubSCWoG8woGy7m");
    }
  };
  return (
    <Layout>
      <div className=" p-5 ">
        <div className="d-flex ">
          <div className="w-100 border p-3 rounded shadow ">
            <LocationForm />
          </div>
          <div
            className=" p-4 w-50 ms-5  h-80 bg-white shadow rounded"
            style={{
              maxHeight: "320px",
            }}
          >
            <div>
              <div>Order Summary</div>
              <div className="d-flex justify-content-between mt-3">
                <div>Items Total </div>
                <div>
                  Rs {JSON.parse(localStorage.getItem("userTotalPrice"))}
                </div>
              </div>
              <div className="d-flex justify-content-between mt-1">
                <div>Shipping Fee </div>
                <div>Rs 50</div>
              </div>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ marginTop: "100px" }}
            >
              <div>Total </div>
              <div style={{ color: "#fd5c63" }}>
                Rs {JSON.parse(localStorage.getItem("userTotalPrice")) + 50}
              </div>
            </div>
            <div className=" mt-3">
              <Button
                style={{ width: "100%", background: "#297fad" }}
                onClick={khaltiPayment}
              >
                <img
                  src={KhaltiImge}
                  alt="khalti"
                  style={{ height: "20px", width: "70px" }}
                />{" "}
                Pay with khalti
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

import React from "react";
import "../pages/bookings.css";
import { useHistory } from "react-router-dom";

const myStyles = {
  width: "290px",
  flexShrink: "0",
  borderRadius: "4px 4px 0 0",
  position: "relative",
  marginBottom: "5px",
  maxWidth: "540px",
};

function HostVillas() {
  const allVillas = JSON.parse(localStorage.getItem("allVillas")) || [];
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
  const userInfo = JSON.parse(localStorage.getItem("userDetails"));

  const history = useHistory();
  const bookingConfirm = (item, finalPriceWithTaxes) => {
    if (userInfo) {
      history.push(`/booking-confirmations/${item.id}/${finalPriceWithTaxes}`);
    } else {
      history.push("/login");
    }
  };

  return (
    <div>
      <div>
        {allVillas
          .filter(
            (item) =>
              typeof item.ownerInfo === "object" &&
              item.ownerInfo?.id !== userDetails.id
          )
          .map((item) => {
            const discountPercent = Math.floor(Math.random() * 10);
            const discountAmount = item.price * discountPercent * 0.01;
            const finalPrice = item.price - discountAmount;
            const taxes = finalPrice * 0.18;
            const finalPriceWithTaxes = finalPrice + taxes;
            return (
              <div className="main-div" key={item.id}>
                <div className="img-div">
                  <img src={item.Image} style={myStyles} alt="img" />
                </div>
                <div className="info-div">
                  <div className="info-imgs">
                    <img
                      src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/web/mmtAssured.png"
                      className="img-mmt"
                      alt="img"
                    />
                  </div>
                  <div className="header">
                    {item.name}
                    <br />
                    <div className="head-rating"> {item.rating}⭐</div>
                  </div>
                  <div className="main">
                    {item.location}
                    <br />
                    <br />
                    <div className="category">Couple Friendly</div>
                  </div>
                  <div className="footer">
                    <div className="footer1"> 🔋 Power Backup</div>
                    <div className="footer2"> 📶 Free Wifi</div>
                    <div className="footer3"> 🏨 Restaurant</div>
                  </div>
                </div>
                <div className="sec-div">
                  <div className="disc-perc">FLAT {discountPercent}%</div>
                  <div className="sec-price">₹ {finalPrice}</div>
                  {/* <div>taxes &amp; fees :{finalPriceWithTaxes}</div> */}
                  <div className="disc-amt">
                    + ₹ {discountAmount} taxes & fees per Night
                  </div>

                  <div className="sec-btn">
                    <button
                      className="btn-book"
                      onClick={() => bookingConfirm(item, finalPriceWithTaxes)}
                    >
                      Book Villa
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HostVillas;

import React from "react";

const mystyle = {
  display: "flex",
  padding: "20px ",
  position: "relative",
  alignItems: "center",
};
const home = () => {
  const bookingList = JSON.parse(localStorage.getItem("bookingInfo")) || [];
  //const userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
  const users = JSON.parse(localStorage.getItem("users")) || [];

  return bookingList
    .filter((item) => item.ownerInfo?.id === users.id)
    .map((item) => {
      return (
        <div style={mystyle}>
          <div
            className="card border-success mb-3"
            style={{ maxWidth: "25rem" }}
          >
            <div className="card-header bg-transparent ">
              <h3>Request Recieved</h3>
              <h5>You have a booking by :{item.userInfo.username}</h5>
            </div>
            <table>
              <tr>
                <th>Dates</th>
                <th>Guests</th>
                <th>Booking amount</th>
              </tr>
              <tr>
                <td>22-31 May</td>
                <td>3 Guests</td>
                <td>{item.bookingPrice}</td>
              </tr>
            </table>
            <div className="card-footer bg-transparent border-success">
              <button className="btn btn-success">Approve</button>
              <button className="btn btn-danger ">Reject</button>
            </div>
          </div>
        </div>
      );
    });
};
export default home;

import React  from "react";


function ListOfBookings() {
  const bookingList = JSON.parse(localStorage.getItem("bookingInfo")) || [];
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];

  return bookingList
    .filter(
      (item) =>
        typeof item.userInfo === "object" &&
        item.userInfo?.id === userDetails.id
    )
    .map((item) => {
      return (
        <div>
          <table className="table">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Price of hotel: </th>
              <th>Booking reference No:</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>{item.hotelDetails.name}</td>
              <td>{item.hotelDetails.location}</td>
              <td>{item.bookingPrice}</td>
              <td>{item.id}</td>
              <td>{item?.status || "pending"}</td>
            </tr>
          </table>
        </div>
      );
    });
}
export default ListOfBookings;

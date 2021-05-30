import React, { Component } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function ConfirmBookingDetails() {
  let { hotelId, finalPriceWithTaxes } = useParams();

  const allVillas = JSON.parse(localStorage.getItem("allVillas")) || [];
  const user = JSON.parse(localStorage.getItem("userDetails")) || [];

  const hotelDetails = allVillas.find((hotel) => hotel.id === hotelId);

  const confirmDetails = (e) => {
    e.preventDefault();
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({
      hotelDetails,
      id: uuidv4(),
      bookingPrice: finalPriceWithTaxes,
      userInfo: user,
    });
    localStorage.setItem("bookingInfo", JSON.stringify(bookings));
  };
  return (
    <div>
      <h3>Booking Request Details</h3>
      <div>Booking Request </div>
      <div>
        <table className="table">
          <tr>
            <td>Property Name</td>
            <td>{hotelDetails.name}</td>
          </tr>
          <tr>
            <td>Check-in</td>
            <td>22 May</td>
          </tr>
          <tr>
            <td>check-out</td>
            <td>31 May</td>
          </tr>
          <tr>
            <td>No. of Guests</td>
            <td>2 Adults</td>
          </tr>
          <tr>
            <td>Stay Duration</td>
            <td>9 Nights</td>
          </tr>
          <tr>
            <td>Meal Plan</td>
            <td>Accomodation only</td>
          </tr>
          <tr>
            <td>Payment Status</td>
            <td>Paid</td>
          </tr>
        </table>
        <div>
          <div>
            <h3>Booking amount</h3>
            <h5>{finalPriceWithTaxes}</h5>
          </div>
        </div>
        <div>
          <button className="btn-success btn-sm" onClick={confirmDetails}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
export default ConfirmBookingDetails;

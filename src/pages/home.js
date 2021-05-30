import React, { Component } from "react";

const mystyle = {
  display: "flex",
  padding: "20px ",
  position: "relative",
  alignItems: "center",
};
const home = () => {
  return (
    <div style={mystyle}>
      <div className="card border-success mb-3" style={{ maxWidth: "19rem" }}>
        <div className="card-header bg-transparent ">
          <h3>Request Recieved</h3>
          <h5>You will have a booking by name : xyz</h5>
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
            <td>Booking amount </td>
          </tr>
        </table>
        <div className="card-footer bg-transparent border-success">
          View more details
        </div>
      </div>
    </div>
  );
};

export default home;

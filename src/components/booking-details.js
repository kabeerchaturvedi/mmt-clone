import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { reactLocalStorage } from "reactjs-localstorage";
import "../pages/styles.css";

const myStyles = {
  display: "flex",
  alignItems: "center",
};
const defaultVillaState = {
  name: "",
  location: "",
  price: "",
  rating: "",
  Image: "",
};

const formDetails = [
  { label: "Name", name: "name", type: "text" },
  { label: "Location", name: "location", type: "text" },
  { label: "Rating", name: "rating", type: "number" },
  { label: "Price", name: "price", type: "number" },
  { label: "Image", name: "Image", type: "string" },
];

const BuyVillas = ({}) => {
  const [villaDetails, setVillaDetails] = useState(defaultVillaState);

  const onSubmit = (e) => {
    e.preventDefault();
    const allVillas = reactLocalStorage.getObject("allVillas", [], true);
    const user = JSON.parse(localStorage.getItem("userDetails")) || [];
    allVillas.push({ ...villaDetails, id: uuidv4(), ownerInfo: user });
    localStorage.setItem("allVillas", JSON.stringify(allVillas));

    setVillaDetails(defaultVillaState);
  };

  const onChange = (e) => {
    setVillaDetails({ ...villaDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
      <h3>Post your Villa details</h3>

        {formDetails.map((formItem) => {
          const { label, name, type } = formItem;
          return (
            <div>
              <p>{label} </p>
              <input
                type={type}
                name={name}
                value={villaDetails[name]}
                onChange={onChange}
              />
            </div>
          );
        })}
        <button type="submit" className="btn btn-primary">
          Save Villa
        </button>
      </form>
    </div>
  );
};

export default BuyVillas;

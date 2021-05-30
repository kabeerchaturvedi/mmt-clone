import React from "react";

const allVillas = reactLocalStorage.getObject("allVillas", [], true);
console.log(allVillas);

const defaultBookState = {
  checkIn: "",
  checkOut: "",
  Guests: "",
  meal: "",
  payment: "",
};

const formDetails = [
  { label: "Check-in", name: "checkin", type: "date" },
  { label: "Check-out", name: "checkout", type: "date" },
  //no of guests??
  { label: "Number of guests", name: "rating", type: "number" },
  { label: "Meal", name: "meal", type: "string" },
];

const bookingConfirmations = ({}) => {
  const [bookDetails, setbookDetails] = useState(defaultBookState);

  const onSubmit = (e) => {
    e.preventDefault();
    const bookVillas = reactLocalStorage.getObject("bookVillas", [], true);
    bookVillas.push({ ...bookDetails });
    localStorage.setItem("bookVillas", JSON.stringify(bookVillas));

    setbookDetails(defaultBookState);
  };
  const onChange = (e) => {
    setVillaDetails({ ...bookDetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        {formDetails.map((formItem) => {
          const { label, name, type } = formItem;
          return (
            <div className="form-control" style={myStyles}>
              <label>{label} </label>&nbsp;&nbsp;&nbsp;
              <input
                type={type}
                name={name}
                value={bookDetails[name]}
                onChange={onChange}
              />
            </div>
          );
        })}
        <button type="submit" className="btn btn-block">
          Save Villa
        </button>
      </form>
    </div>

  
  );
};

export default bookingConfirmations;

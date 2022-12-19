import React from "react";

export default function SearchBar({ onSearch }) {
  let [city, setCity] = React.useState("Cairns");

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <form
      className="form-inline my-2 my-lg-0"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="City..."
        onChange={handleChange}
      />
      <input
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        value="Add"
      />
    </form>
  );
}

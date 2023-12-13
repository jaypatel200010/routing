import React from "react";

export default function Main() {
  return (
    <>
      <div className="card" id="one">
        <img
          className="card-img-top"
          src="https://www.w3schools.com/bootstrap5/img_avatar1.png"
          alt="Card image"
        />
        <div className="card-body">
          <h4 className="card-title">John Doe</h4>
          <p className="card-text">Some example text.</p>
          <a href="#" className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
    </>
  );
}

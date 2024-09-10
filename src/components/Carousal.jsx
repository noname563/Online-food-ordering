import React from "react";

export default function Carousal() {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ maxHeight: "600px" }}
      >
        

        <div className="carousel-inner" style={{maxHeight:"600px",objectFit:"contain !important"}}>
          <div className="carousel-item active" >
            <img
              src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-100 "
              alt="..."
              style={{ filter: "brightness(30%)", maxHeight: "600px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-100 "
              alt="..."
              style={{ filter: "brightness(30%)", maxHeight: "600px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/9609859/pexels-photo-9609859.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-100 "
              alt="..."
              style={{ filter: "brightness(30%)", maxHeight: "600px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/14105/pexels-photo-14105.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-100 "
              alt="..."
              style={{ filter: "brightness(30%)", maxHeight: "600px", objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div
          className="carousel-caption d-none d-md-block"
          style={{ zIndex: "10" }}
        >
          <form className="d-flex">
            <input
              className="form-control m-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-warning m-2 text-white" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

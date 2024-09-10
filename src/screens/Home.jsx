import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";


export default function Home() {
  const [search,setsearch]=useState([""])
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/fooddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setfoodcat(response[0]);
    setfooditem(response[1]);
    //console.log(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ maxHeight: "600px" }}
        >
          <div
            className="carousel-inner"
            style={{ maxHeight: "600px", objectFit: "contain !important" }}
          >
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-100 "
                alt="..."
                style={{
                  filter: "brightness(30%)",
                  maxHeight: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-100 "
                alt="..."
                style={{
                  filter: "brightness(30%)",
                  maxHeight: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/9609859/pexels-photo-9609859.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-100 "
                alt="..."
                style={{
                  filter: "brightness(30%)",
                  maxHeight: "600px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/14105/pexels-photo-14105.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-100 "
                alt="..."
                style={{
                  filter: "brightness(30%)",
                  maxHeight: "600px",
                  objectFit: "cover",
                }}
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
            <div className="d-flex justify-content-center">
              <input
                className="form-control m-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search} onChange={(e)=>{setsearch(e.target.value)}}
              />
              <button className="btn btn-warning m-2 text-white" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {foodcat != []
          ? foodcat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-2">
                    {data.CategoryName}
                  </div>
                  <hr></hr>
                  {fooditem != [] ? (
                    fooditem
                      .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleString())))  
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id} className="col-3">
                            <Card
                            foodItem= {filterItems}
                              // foodname={filterItems.name}
                               options={filterItems.options[0]}
                              // image={filterItems.img}
                              // detail={filterItems.description}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No such data found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

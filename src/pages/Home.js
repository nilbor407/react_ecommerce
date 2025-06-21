import { useEffect, useState } from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import ProductCard from "./common/ProductCard";
import axios from "axios";
function Home() 
{

  const [sliders,setSliders] = useState([]);
  useEffect(()=>{
    axios.get("https://a2zithub.org/dairy/abi/slider_det").then((res)=>{
      setSliders(res.data);
    });
  },[])


  return (
    <div className="home-page">
      <Navbar />
      
      {/* Hero Carousel */}
      <section className="hero-section mb-5">
        <div id="mainBanner" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#mainBanner"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="carousel-inner rounded-3 overflow-hidden">
            { sliders.map((val,index) => ( 
            <div className={index == 0 ? "carousel-item active":"carousel-item"} key={index}>
              <a href={val.slider_btn} target="_blank">
                <img 
                  src={val.slider_img} 
                  className="d-block w-100" 
                  alt="Dairy products banner" 
                />
              </a>
            </div>
            ))}
            {/* <div className="carousel-item">
              <img 
                src="https://a2zithub.org/dairy/uploads/171354358665083344.webp" 
                className="d-block w-100" 
                alt="Fresh milk products" 
              />
            </div>
            <div className="carousel-item">
              <img 
                src="https://a2zithub.org/dairy/uploads/171601382516103680.jpg" 
                className="d-block w-100" 
                alt="Special offers" 
              />
            </div> */}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#mainBanner" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mainBanner" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5">
        <div className="container">
          <div className="section-header mb-5 text-center">
            <h2 className="section-title fw-bold">Featured Products</h2>
            <p className="section-subtitle text-muted">Our most popular dairy items</p>
          </div>
          <div className="row g-4">
            {[1, 2].map((item) => (
              <ProductCard key={`featured-${item}`} data={[]} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals py-5 bg-light">
        <div className="container">
          <div className="section-header mb-5 text-center">
            <h2 className="section-title fw-bold">New Arrivals</h2>
            <p className="section-subtitle text-muted">Discover our latest products</p>
          </div>
          <div className="row g-4">
            {[1, 2].map((item) => (
              <ProductCard key={`new-${item}`}  data={[]}/>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
import { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import slides from "../slides.json";
import "./Carousel.css";

function Carousel() {
  const [innerActive, setInnerActive] = useState(0);
  const [active, setActive] = useState(0);

  function nextSlide() {
    setActive((v) => (v + 1) % 2);
  }

  function prevSlide() {
    setActive((v) => {
      return v === 0 ? 1 : v - 1;
    });
  }

  function nextInnerSlide() {
    setInnerActive((v) => (v + 1) % slides.length);
  }

  function prevInnerSlide() {
    setInnerActive((v) => {
      return v === 0 ? slides.length - 1 : v - 1;
    });
  }

  useEffect(() => {
    const slideInterval = setInterval(nextInnerSlide, 2000);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="carousel">
      <div className={`carousel-inner ${active === 0 ? "" : "hidden"}`}>
        <div className="carousel-content">
          <h2>One stop solution for customer connect. </h2>
          <p>
            In today's digital-first era, manufacturers can drive growth by
            enhancing their digital customer engagement. A digital platform is
            crucial for effective customer connection. Our intuitive, simple yet
            powerful digital customer connect platform, SAHAYAKS, empowers
            manufacturers to seamlessly connect with their customers in a
            cost-effective manner.
          </p>
          <button type="button">Schedule a demo</button>
        </div>
        <div className="slides">
          {slides.map((slide, ind) => (
            <img
              key={ind}
              src={slide.src}
              alt={slide.alt}
              className={`slide ${innerActive === ind ? "" : "hidden"}`}
            />
          ))}
        </div>
      </div>
      <div className={`carousel-inner ${active === 1 ? "" : "hidden"}`}>
        <video controls>
          <source
            src="https://github.com/amanpandeygitwork/carousel/blob/main/public/assets/vid.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <ChevronLeftIcon className="icon left-icon" onClick={prevSlide} />
      <ChevronRightIcon className="icon right-icon" onClick={nextSlide} />
    </div>
  );
}

export default Carousel;

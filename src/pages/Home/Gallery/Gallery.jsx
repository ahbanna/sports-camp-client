import LightGallery from "lightgallery/react";
import "./Gallery.css";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import { Slide } from "react-awesome-reveal";

const galleryImages = [
  { src: "https://i.ibb.co/swRY7qz/1.jpg", alt: "Zip Line" },
  { src: "https://i.ibb.co/YfN72TY/2.png", alt: "Karate" },
  { src: "https://i.ibb.co/fQNYgsp/3.jpg", alt: "Football" },
  { src: "https://i.ibb.co/4Yz7Hn2/4.jpg", alt: "Boxing" },
  { src: "https://i.ibb.co/hLSMsD4/5.jpg", alt: "Skiing" },
  { src: "https://i.ibb.co/JCd2szD/6.jpg", alt: "Swimming" },
  { src: "https://i.ibb.co/VQvTXQg/7.jpg", alt: "Badminton" },
  { src: "https://i.ibb.co/59nyq2g/8.jpg", alt: "Football" },
  { src: "https://i.ibb.co/5TT8dGg/9.png", alt: "Cycling" },
  // { src: "/src/assets/gallery/9.png", alt: "Cycling" },
];

export function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="gallery-area">
      <div className="container">
        <div className="area-title" data-aos="zoom-in">
          <h5>Checkout</h5>
          <h2>
            our<span> gallery</span>
          </h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[
              lgThumbnail,
              lgZoom,
              lgAutoplay,
              lgFullscreen,
              lgRotate,
              lgShare,
            ]}
          >
            {galleryImages.map((image, index) => {
              return (
                <a href={image.src} key={index}>
                  <img alt={image.alt} src={image.src} />
                </a>
              );
            })}
          </LightGallery>
        </div>
      </div>
    </div>
  );
}

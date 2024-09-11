import React from "react";

function Gallery() {
  const galleryImages = [
    "/public/img5.jpg",
    "/public/img6.webp",
    "/public/img9.webp",
    "/public/img8.webp",
    "/public/img12.jpg",

    "/public/img7.avif",
    "/public/img10.webp",
    "/public/img2.jpg",
    "/public/img1.jpg",
  ];

  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {galleryImages.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {galleryImages.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {galleryImages.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

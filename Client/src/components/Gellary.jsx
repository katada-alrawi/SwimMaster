import React from "react";

function Gallery() {
  const galleryImages = [
    "/img5.jpg",
    "/img6.webp",
    "/img9.webp",
    "/img8.webp",
    "/img12.jpg",

    "/img7.avif",
    "/img10.webp",
    "/img2.jpg",
    "/img1.jpg",
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

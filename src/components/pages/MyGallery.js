import React from "react";
import Gallery from "react-grid-gallery";
import Footer from "../Footer";

export default function MyGallery() {
  const IMAGES = [
    {
      src: "./images/img-1.jpg",
      thumbnail: "./images/img-1.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-2.jpg",
      thumbnail: "./images/img-2.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-3.jpg",
      thumbnail: "./images/img-3.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-4.jpg",
      thumbnail: "./images/img-4.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-5.jpg",
      thumbnail: "./images/img-5.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-6.jpg",
      thumbnail: "./images/img-6.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-7.jpg",
      thumbnail: "./images/img-7.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-8.jpg",
      thumbnail: "./images/img-8.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-9.jpg",
      thumbnail: "./images/img-9.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-10.jpg",
      thumbnail: "./images/img-10.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-11.jpg",
      thumbnail: "./images/img-11.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-12.jpg",
      thumbnail: "./images/img-12.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-13.jpg",
      thumbnail: "./images/img-13.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-14.jpg",
      thumbnail: "./images/img-14.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-15.jpg",
      thumbnail: "./images/img-15.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 174,
    },
    {
      src: "./images/img-home.jpg",
      thumbnail: "./images/img-home.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
    }
  ];
  return (
    <div >
      <Gallery images={IMAGES} />
      <Footer />
    </div>
  );
}

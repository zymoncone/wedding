import "./Gallery.css";
import { useState } from "react";
import SlideShow from "../SlideShow/SlideShow";
import photos from "../../assets/photos";
import { useEffect } from "react";
import { isMobileDevice } from "../../assets/helper_functions";

const ROW_SIZE_MOBILE = 2;
const ROW_SIZE_PC = 3;

const Gallery = () => {

  const [activeSlide, setActiveSlide] = useState(-1);
  const [openGallery, setOpenGallery] = useState(false);
  const [rowSize, setRowSize] = useState(ROW_SIZE_MOBILE);
  const [galleryPhotos, setGalleryPhotos] = useState(photos);

  const handleClose = () => {
    setActiveSlide(-1);
    setOpenGallery(false);
  }

  const handleOpen = (e) => {
    setActiveSlide(Number(e.target.getAttribute("slide-number")));
    setOpenGallery(true);
  }

  useEffect(() => {
    if (isMobileDevice()) {
      setRowSize(ROW_SIZE_MOBILE);
      setGalleryPhotos(photos);
    } else {
      setRowSize(ROW_SIZE_PC);
      setGalleryPhotos(photos.slice(0, ROW_SIZE_PC*ROW_SIZE_PC));
    }
  }, []);

  return (
    <div className="gallery-column-container">
      {
      [...Array(Math.ceil(galleryPhotos.length / rowSize))].map((_, i) => (
        <div className="gallery-row-container" key={i}>
          {galleryPhotos.slice(i * rowSize, i * rowSize + rowSize).map((photo, j) => (
            <img
              key={j}
              src={photo}
              alt="PhotoShoot"
              className={`individual-photo ${j === 0 ? 'left-photo' : 
                                             j === 1 ? 'middle-photo' : 
                                             'right-photo'}`}
              slide-number={i * rowSize + j}
              onClick={handleOpen}
            />
          ))}
        </div>
      ))
    }
    {openGallery && <SlideShow entry={galleryPhotos} handleClose={handleClose} activeSlide={activeSlide} />}
    </div>
  );
}

export default Gallery;
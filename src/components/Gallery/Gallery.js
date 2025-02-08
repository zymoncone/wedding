import "./Gallery.css";
import { useState } from "react";
import SlideShow from "../SlideShow/SlideShow";
import photos from "../../assets/photos";
import { useEffect } from "react";
import { isMobileDevice, sleep } from "../../assets/helper_functions";

const ROW_SIZE_MOBILE = 2;
const ROW_SIZE_PC = 3;

const Gallery = () => {

  const [activeSlide, setActiveSlide] = useState(-1);
  const [openGallery, setOpenGallery] = useState(false);
  const [rowSize, setRowSize] = useState(ROW_SIZE_MOBILE);
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [opacity, setOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Prevent scrolling when gallery is open
    if (openGallery) {
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.touchAction = 'none';
      document.documentElement.style.overscrollBehavior = 'contain';
      document.body.style.position = 'absolute';
      document.body.style.width = '100%';
    } else {
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.touchAction = 'auto';
      document.documentElement.style.overscrollBehavior = 'auto';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.touchAction = 'auto';
      document.documentElement.style.overscrollBehavior = 'auto';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [openGallery]);

  const handleClose = () => {
    setActiveSlide(-1);
    setOpenGallery(false);
    setOpacity(0);
  }

  const handleOpen = (e) => {
    setActiveSlide(Number(e.target.getAttribute("slide-number")));
    setOpenGallery(true);
    sleep(100).then(() => { setOpacity(1) });
  }

  useEffect(() => {
    if (isMobileDevice()) {
      setRowSize(ROW_SIZE_MOBILE);
      setGalleryPhotos(photos);
      setIsMobile(true);
    } else {
      setRowSize(ROW_SIZE_PC);
      setGalleryPhotos(photos.slice(0, ROW_SIZE_PC * ROW_SIZE_PC));
      setIsMobile(false);
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
                style={isMobile ? { width: "calc((92.5vw - 0.7rem) / 2)" } : {}}
              />
            ))}
          </div>
        ))
      }
      {openGallery && <SlideShow entry={galleryPhotos} handleClose={handleClose} activeSlide={activeSlide} opacity={opacity} />}
    </div>
  );
}

export default Gallery;
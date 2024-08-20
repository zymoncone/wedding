import './GalleryTitle.css';

const GalleryTitle = ({ title }) => {
  return (
    <div className="gallery-title-container">
      <h1 className="subtitle">{title}</h1>
    </div>
  );
}

export default GalleryTitle;
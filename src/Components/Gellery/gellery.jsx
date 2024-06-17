// src/Gallery.jsx
import React, { useState, useEffect } from 'react';
// import '../Gellery/gellery.css';
import MainLayout from '../../Layout/MainLayout';

const GalleryL = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/photos')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error fetching photos:', error));
  }, []);
 

  return (
    <MainLayout>
    <div className="gallery">
      {photos.map(photo => (
        <div key={photo.id} className="gallery-item">
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
    </MainLayout>
  );
};

export default GalleryL;

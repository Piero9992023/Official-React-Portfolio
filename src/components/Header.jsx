import React, { useEffect, useState} from 'react';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.avif';
import image3 from './images/image3.jpeg';

const imageList = [
    {
        id: 1,
        src: image1,
        alt: 'Image 1',
    },
    {
        id: 2,
        src: image2,
        alt: 'Image 2',
    },
    {
        id: 3, 
        src: image3,
        alt: 'Image 3',
    },
];

const commonImageStyle = {
    width: '100%', 
    height: '800px',
    display: 'block',
    objectFit: 'cover',
    transition: 'opacity 1s ease-in-out',
  };

function ImageComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
      }, 8000); // Change image every 8 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div id='home'>
          {imageList.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              style={{
                ...commonImageStyle,
                display: index === currentIndex ? 'block' : 'none',
              }}
            />
          ))}
        </div>
      );
    }

export default ImageComponent;
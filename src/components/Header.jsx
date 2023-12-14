import React, { useEffect, useState } from 'react';
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

const wordsArr = ['Web Developer', 'Database Enthusiast'];

const commonImageStyle = {
  width: '100%',
  height: '800px',
  display: 'block',
  objectFit: 'cover',
  transition: 'opacity 1s ease-in-out',
};

const textContainerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '24px',
  color: 'white',
  textAlign: 'center',
  opacity: 0,
  transition: 'opacity 1s ease-in-out',
};

function ImageComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);

      setTimeout(() => {
        setCurrentWordIndex((prevWordIndex) =>
          (prevWordIndex + 1) % wordsArr.length
        );
      }, 8000); // Display each word for 8 seconds before transitioning
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home' style={{ position: 'relative' }}>
      {imageList.map((image, index) => (
        <div key={image.id} style={{ position: 'relative' }}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              ...commonImageStyle,
              display: index === currentIndex ? 'block' : 'none',
            }}
          />
          <div
            style={{
              ...textContainerStyle,
              opacity: index === currentIndex ? 1 : 0,
            }}
          >
            {wordsArr.map((word, i) => (
              <div className='bg-black bg-opacity-50 backdrop-blur-sm' key={i} style={{ display: i === currentWordIndex ? 'block' : 'none' }}>
                {word}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageComponent;
import image3 from './images/image3.jpeg';



const commonImageStyle = {
  width: '100%',
  height: '800px',
  objectFit: 'cover',
};

const textContainerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '24px',
  color: 'white',
  textAlign: 'center',
  opacity: 1,
};

function ImageComponent() {
  return (
    <div id='home' className='mb-28 ' style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <div style={textContainerStyle}>
          <div className='bg-black rounded bg-opacity-50 backdrop-blur-sm text-6xl'>
            Web Developer
          </div>
        </div>
        <img
          src={image3}
          alt='Image 3'
          style={{
            ...commonImageStyle,
            display: 'block', // Always display image3
          }}
        />
      </div>
    </div>
  );
}

export default ImageComponent;
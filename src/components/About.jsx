import Piero from './images/Piero.jpeg'

const About = () => {
    
  
    return (
        <div>
            <h1 className=' ml-8 mt-8 text-4xl font-bold'>About Me</h1>
        <div id="about" className="flex flex-col md:flex-row justify-center items-center mx-4 md:mx-10 lg:mx-20 my-10 md:my-20">
          <div className="bg-gray-200 mb-4 md:mb-0 mx-4 md:mx-0 p-4 rounded shadow-xl w-full md:w-1/2 lg:w-1/4 text-center">
            <p className="text-xl">
              Hello, I am Piero Rodriguez, a passionate junior web developer on an exciting journey into the world of
              technology. My fascination with understanding how things work, especially in the realm of tech, goes back as
              far as my childhood. As the designated tech support in my household, family members would always turn
              to me for assistance with any tech-related challenges, and I took pride in providing effective solutions.
              Beyond coding, I enjoy playing video games for inspiration and enjoy training in boxing to stay disciplined.
              Join me on this exciting journey as I continue to refine my skills and explore new technologies.
            </p>
          </div>
          <div className="flex-none md:ml-10 lg:ml-20">
            <img src={Piero} alt="Piero Rodriguez" className="w-full md:w-64 rounded lg:w-80 h-auto" style={{ height: '700px', width: '500px'}} />
          </div>
        </div>
        </div>

      );
  };
  

export default About;
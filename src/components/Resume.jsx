import paper from './images/paper.jpeg'



const Resume = () => {
    return (
    <div id='resume'>
        <h1 className=' ml-8 mt-8 text-4xl font-bold'>Resume</h1>
        <div className='flex justify-center mt-10 mb-10'>
        <a href="https://drive.google.com/file/d/1rRchj-sV3bdxJWc3tUKEIVvjdJ6i0E4k/view?usp=sharing">
        <img style={{ height: '1000px', width: '800px'}} src={paper} alt="Resume" />
        </a>
        </div>
    </div>

    )
};

export default Resume
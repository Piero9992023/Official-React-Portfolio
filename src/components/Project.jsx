import Employee from './images/Employee.png';
import Comic from './images/comic.png' ;
import CRUD from './images/CRUD.png';
import Weather from './images/Weather.png';
import Quiz from './images/Quiz.png';
import WordJokes from './images/WordJoke.png'



const Projects = () => {
    
    return (
            <div>
                <h1 className=' ml-8 mt-8 text-4xl'>Projects</h1>
            <div id= 'projects'className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                
                <div className="space-y-8 md:grid md:grid-cols-2 auto-rows-max md:gap-12 md:space-y-0 ">
                    <div
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        style={{
                            backgroundImage: `url(${Employee})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="relative mb-10 w-6 h-12">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                        </div>
                        <h2 className="'bg-black bg-opacity-50 backdrop-blur-sm mb-2 text-2xl font-bold tracking-tigh text-white">Employee Tracker Backend </h2>
                        <p className="'bg-black bg-opacity-50 backdrop-blur-sm mb-3 font-normal text-white">Created with MySQl, Express.js, Node.js</p>
                        <div className='flex justify-center space-x-10'>
                        <a href="https://drive.google.com/file/d/15AEUaxvut_pQ3f_rk1HWYw8T2TLRicGm/view">
                            <button className="bg-black bg-opacity-50 backdrop-blur-sm font-medium text-blue-600 dark:text-blue-500 lg:-text-lg">
                                Walkthough Video 
                            </button>
                        </a>
                        <a href="https://github.com/Piero9992023/Employee_Tracker?tab=readme-ov-file">
                            <button className="bg-black bg-opacity-50 backdrop-blur-sm font-medium text-blue-600 dark:text-blue-500 lg:-text-lg">
                                Github Link 
                            </button>
                        </a>
                        </div>
                    </div>
            
                    <div
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        style={{
                            backgroundImage: `url(${Comic})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="relative mb-10 w-6 h-12">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                        </div>
                        <h2 className="'bg-black bg-opacity-50 backdrop-blur-sm mb-2 text-2xl font-bold tracking-tigh text-white">Comic Quest </h2>
                        <p className="'bg-black bg-opacity-50 backdrop-blur-sm mb-3 font-normal text-white">Group Project created with MySQl, Express.js, Node.js, Handlebars.js, CSS, Javascript</p>
                        <div className='flex justify-center space-x-10'>
                        <a href="https://fast-spire-60504-c09eefa67524.herokuapp.com/">
                            <button className=" bg-black rounded bg-opacity-70 font-medium text-blue-600 dark:text-blue-500 lg:-text-lg">
                                Deployed Link 
                            </button>
                        </a>
                        <a href="https://github.com/adaking1/comic-quest">
                            <button className=" bg-black rounded bg-opacity-70 backdrop-blur-sm font-medium text-blue-600 dark:text-blue-500 lg:-text-lg">
                                Github Link 
                            </button>
                        </a>
                        </div>
                    </div>
      
                    <div
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        style={{
                            backgroundImage: `url(${Weather})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="relative mb-10 w-6 h-12">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                        </div>
                        <h2 className="'bg-black bg-opacity-50 backdrop-blur-sm mb-2 text-2xl font-bold tracking-tigh text-white">Weather Dashboard API</h2>
                        <p className="'bg-black bg-opacity-50 backdrop-blur-sm mb-3 font-normal text-white">Created with HTML, CSS, Javascript</p>
                        <div className='flex justify-center space-x-10'>
                        <a href="https://piero9992023.github.io/City-Weather-Dashboard/">
                            <button className=" bg-black rounded bg-opacity-70 backdrop-blur-sm font-medium text-blue-600 dark:text-blue-500 lg:-text-lg">
                                Deployed Link 
                            </button>
                        </a>
                        <a href="https://github.com/Piero9992023/City-Weather-Dashboard?tab=readme-ov-file">
                            <button className=" bg-black rounded bg-opacity-70 backdrop-blur-sm font-medium text-blue-600 dark:text-blue-500 lg:-text-lg">
                                Github Link 
                            </button>
                        </a>
                        </div>
                    </div>
        
                    <div
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        style={{
                            backgroundImage: `url(${CRUD})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="relative mb-10 w-6 h-12">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                        </div>
                        <h2 className="'bg-black bg-opacity-50 backdrop-blur-sm mb-2 text-2xl font-bold tracking-tigh text-white">Social Network API </h2>
                        <p className="'bg-black bg-opacity-50 backdrop-blur-sm mb-3 font-normal text-white">Created with MongoDB, Mongoose, Express.js, Node.js</p>
                        <div className='flex justify-center space-x-10'>
                        <a href="https://drive.google.com/file/d/1Ko3GsGctepiNFpHjPHxpl1RUf1zO5Ne3/view">
                            <button className=" bg-black rounded bg-opacity-70 backdrop-blur-sm font-medium text-blue-600 dark:text-blue-500 lg:-text-lg">
                                Walkthrough Video 
                            </button>
                        </a>
                        <a href="https://github.com/Piero9992023/Social-Network-API?tab=readme-ov-file">
                            <button className=" bg-black rounded bg-opacity-70 backdrop-blur-sm font-medium text-blue-600 dark:text-blue-500 lg:-text-lg">
                                Github Link 
                            </button>
                        </a>
                        </div>
                    </div>

                    <div
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        style={{
                            backgroundImage: `url(${WordJokes})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="relative mb-10 w-6 h-12">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                        </div>
                        <h2 className="'bg-black bg-opacity-50 backdrop-blur-sm mb-2 text-2xl font-bold tracking-tigh text-white">Eployee Tracker Backend </h2>
                        <p className="'bg-black bg-opacity-50 backdrop-blur-sm mb-3 font-normal text-white">Group project created with HTML, CSS, Javascript</p>
                        <div className='flex justify-center space-x-10'>
                        <a href="http://127.0.0.1:5500/Whimsical-Education/index.html">
                            <button className=" bg-black rounded bg-opacity-70 backdrop-blur-sm font-medium text-blue-600 dark:text-blue-500 lg:-text-lg">
                                Deployed Link 
                            </button>
                        </a>
                        <a href="https://github.com/chigreene/To-Word-or-To-Joke">
                            <button className=" bg-black rounded bg-opacity-70 backdrop-blur-sm font-medium text-blue-600 dark:text-blue-500 lg:-text-lg">
                                Github Link 
                            </button>
                        </a>
                        </div>
                    </div>

                    <div
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        style={{
                            backgroundImage: `url(${Quiz})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="relative mb-10 w-6 h-12">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                        </div>
                        <h2 className="'bg-black bg-opacity-50 backdrop-blur-sm mb-2 text-2xl font-bold tracking-tigh text-white">Lionel Messi Quiz </h2>
                        <p className="'bg-black bg-opacity-50 backdrop-blur-sm mb-3 font-normal text-white">Created with HTML, CSS, Javascript </p>
                        <div className='flex justify-center space-x-10'>
                        <a href="https://piero9992023.github.io/Messi-Quiz/">
                            <button className=" bg-black rounded bg-opacity-70 font-medium text-blue-600 dark:text-blue-500 lg:-text-lg">
                                Deployed Link 
                            </button>
                        </a>
                        <a href="https://github.com/Piero9992023/Messi-Quiz?tab=readme-ov-file">
                            <button className=" bg-black rounded bg-opacity-70 font-medium text-blue-600 dark:text-blue-500 lg:-text-lg">
                                Github Link 
                            </button>
                        </a>
                        </div>
                    </div>
      
            </div>
        </div>
        </div>
    );
  };

export default Projects;
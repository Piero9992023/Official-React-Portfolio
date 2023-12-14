import Github from './images/github.png';
import LinkedIn from './images/linkedIn.png';
import Stack from './images/Stack.png';


import { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Form() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
          setErrorMessage('Email is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
        if (!(userName)) {
            setErrorMessage('Username field is required')
          
          return;
        }
        if (!(message)) {
            setErrorMessage('Message field is required')
          
          return;
        }
        alert(`Nice to meet you ${userName}!`);
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setUserName('');
        setMessage('');
        setEmail('');
      };

      return (
    <div id='contact'>
        <h1 className=' ml-8 mt-16 mb-11 text-4xl font-bold'>Contact Me</h1>
    <div className="flex justify-center items-center mt-20 mb-32 ">
      <div className=" bg-gray-500 rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Hello {userName}</h1>
        <form className="form mx-auto" onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
              className="w-80 h-8 mt-3 rounded-sm"
            />
          </div>
          <div className="mb-4">
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="Username"
              className="w-80 h-8 mt-3 rounded-sm"
            />
          </div>
          <div className="mb-4">
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              placeholder="Message"
              className=" w-80 h-8 mt-3 rounded-sm"
            />
          </div>
          <div className=' flex justify-center h-8 mb-6 mt-16 text-white bg-black bg-opacity-50 backdrop-blur-sm font-xl font-bold'>
          <button type="submit">
            Submit
          </button>
          </div>
        </form>
        {errorMessage && (
          <div>
            <p className="text-red-600 mt-5 font-bold text-center">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
    <div className='flex justify-center space-x-10 h-16 bg-black'>
        <a href='https://github.com/Piero9992023' className='flex justify-center space-x-10 h-16 bg-black'>
            <img src={Github} alt="Github Logo" />
        </a>
        <a href='https://www.linkedin.com/in/piero-rodriguez-4185512a2/' className='flex justify-center space-x-10 h-16 bg-black'>
        <img src={LinkedIn} alt="LinkedIn Logo" />
        </a>
        <a href='https://stackoverflow.com/users/23099283/piero999' className='flex justify-center space-x-10 h-16 bg-black'>
        <img src={Stack} alt="Stack Overflow Logo" />
        </a>
    </div>
    </div>

    );
}

export default Form;
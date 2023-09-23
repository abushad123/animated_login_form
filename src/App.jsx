import { useState, useRef, useEffect } from 'react'
import Welcome from './components/Welcome'
import { fadeOutUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';
import './App.css'

function App() {
  const [account, setAccount] = useState({
    email:"",
    password:""
  });
  const [animation , setAnimation] = useState(false);
  const [anim, setAnim] = useState(false);

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const handleSubmit = (e) => {
    
        e.preventDefault();
        setAccount({...account, email:inputEmail.current.value,  password:inputEmail.current.value})  
        setAnimation(true);
        setTimeout(() => {
          setAnim(true)    
        }, 1000);
        
  }

  
  const styles = StyleSheet.create({
    fadeOutUp: {
      animationName: fadeOutUp,
      animationDuration: '1s',
    },
  });
  return (
    <>
    {!anim ? (<div className={animation ? css(styles.fadeOutUp) : null}>
    <div className={`flex justify-center border-solid`}  >
     <form className=' w-1/4 border-2 border-gray-500 p-5 rounded-md' onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
          <input type="email" id="email" ref={inputEmail} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
          <input type="password" id="password" ref={inputPassword} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
     </div>
    </div>) : <Welcome/> }
    
    
    </>
  )
}

export default App

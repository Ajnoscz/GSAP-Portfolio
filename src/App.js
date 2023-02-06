import './App.css';
import './header.css'
import gsap from 'gsap';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
  
   gsap.fromTo("#text", {y: 100, opacity: 0}, {y:0, opacity:1, stagger: 0.5, duration: 1});
   gsap.fromTo("#logo", {y: -200}, {y:0, duration: 1});
  })
  
  return (
    <>
    <header className='navbar'>
      <img id='logo' className='image' src="/logo.png" alt="A-icon"/>
      <nav>
        <ul className='links'>
          <li id='text'><a href="/">Home</a></li>
          <li id='text'><a href="/">Socials</a></li>
        </ul>
      </nav>     
    </header>
    </>
  );
}

export default App;

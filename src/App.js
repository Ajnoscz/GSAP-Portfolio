import './App.css';
import './header.css'

function App() {
  return (
    <>
    <header className='navbar'>
      <img src="/logo.png" alt="A-icon"/>
      <nav>
        <ul>
          <li className='text-sm no-underline'><a href="/">Home</a></li>
          <li className='text-sm no-underline'><a href="/">Socials</a></li>
        </ul>
      </nav>     
    </header>
    </>
  );
}

export default App;

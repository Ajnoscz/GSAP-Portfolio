import './App.css';
import './header.css'

function App() {
  return (
    <>
    <header className='navbar'>
      <img className='image' src="/logo.png" alt="A-icon"/>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Socials</a></li>
        </ul>
      </nav>     
    </header>
    </>
  );
}

export default App;

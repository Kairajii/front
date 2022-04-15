import logo from './assets/food5.jpg';
import background from './assets/food3.jpg';
import './App.css';

function App() {
  return (
    <div 
      className="App" 
      style={{
        background: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(255,255,255,0.5)), url(${background})`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'cover, cover',
        backgroundPosition: 'center, center'
      }}
    >
      <header className="App-header">
        <nav className="navbar">
          <div className="App-logo"><img src={logo} alt="logo"/></div>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </nav>
      </header>
      <main>
        <h1>Welcome to MyOnlineMeals</h1>
        <p>Want a delicious meal, but no time we will deliver it hot and yummy.</p>
        <p>Can food possibly make you wild? Yes, when we serve you.</p>
        <button>Order Now</button>
      </main>
    </div>
  );
}

export default App;

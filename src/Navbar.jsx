import react from 'react';
import './Navbar_style.css'

const Navbar = () => {
  return (
    <div className='home-container'>
      <nav>
        <div className="left-section">
          <h1>TaskCraft</h1>
        </div>

        <div className="right-section">
          <div className="navbar-item-1" onClick={() => handleItemClick('Home')}>Home</div>
          <div className="navbar-item-2" onClick={() => handleItemClick('About')}>About</div>
          <div className="navbar-item-3" onClick={() => handleItemClick('Contact')}>Contact</div>
          <div className="navbar-item-4" onClick={() => handleItemClick('Sign In')}>Sign In</div>
          <div className='navbar-item-5' onClick={() => handleItemClick('Join')}>
            <button>Join</button></div>
        </div>
      </nav>

      <p className='statement'>Find the right service on the go!</p>

      <div className="search-bar">
        <input type="text" placeholder="Search for any service..." />
        <button className="search-button" onClick={() => console.log("Search clicked")}>
          Search
        </button>
      </div>
<br />
<br />
<br />
      <p className='motto'>TaskCraft- Bridging the Gap Between Users and Skilled Workers</p>

    </div>
  );
}

export default Navbar;
import React from 'react';
import './Navbar_style.css';
import { useState } from 'react';
import Join from './Join';
import Login from './Login';

const NavItem = ({ text, onClick }) => {
  return (
    <div className={`navbar-item`} onClick={() => onClick(text)}>
      {text}
    </div>
  );
};

const Navbar = () => {

const [buttonPopup, setButtonPopup] = useState(false);
const [initial, final] = useState(false);

  const handleItemClick = (item) => {
    // Handle item click logic
    console.log(`${item} clicked`);
  };

  return (
    <div className='home-container'>
      <nav>
        <div className="left-section">
          <h1>TaskCraft</h1>
        </div>

        <div className="right-section">
          <NavItem text="Home" onClick={handleItemClick} />
          <NavItem text="About" onClick={handleItemClick} />
          <NavItem text="Contact" onClick={handleItemClick} />

          <div>
          <NavItem text="Sign In" onClick={() => final(true)} />
          <Login trigger={initial} setTrigger={final}>
  <div className="login-form">
    <h3>Login</h3>
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Enter your username" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter your password" />

      <button type="submit">Login</button>
    </form>
  </div>
</Login>

          </div>


          <div className='navbar-item'>
            <button onClick={() => setButtonPopup(true)}>Join</button>

            <Join trigger={buttonPopup} setTrigger={setButtonPopup}>
  <div className="signup-form">
    <h3>Join</h3>
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Choose a username" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" />

      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Choose a password" />

      <button type="submit">Sign Up</button>
    </form>
  </div>
</Join>


          </div>


        </div>
        </nav>

<p className='statement'>Find the right service on the go!</p>

<div className="search-bar">
  <input type="text" placeholder="Search for any service..." />
  <button className="search-btn" onClick={() => console.log("Search clicked")}>
    Search
  </button>
</div>
<br />
<br />
<br />
<p className='motto'>TaskCraft- Bridging the Gap Between Users and Skilled Workers</p>

</div>
  );
};

export default Navbar;

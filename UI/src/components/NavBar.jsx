import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [menuBarHeight, setMenuBarHeight] = useState(0);
  const navigate = useNavigate(); // Initialize useHistory
  useEffect(() => {
    // Calculate and set the height of the menu bar
    const menuBar = document.querySelector(".menu-bar");
    if (menuBar) {
      const height = menuBar.offsetHeight;
      setMenuBarHeight(height);
    }
  }, []);
  return (
    <div className="app">
      <div className="content" style={{ paddingBottom: `${menuBarHeight}px` }}>
        {/* Your content goes here */}
      </div>

      <div className="menu-bar">
        <button onClick={() => navigate("/")}>Button 1</button>
        <button onClick={() => navigate("/map")}>Button 2</button>
        <button onClick={() => navigate("/search/button3")}>Button 3</button>
        <button>Button 4</button>
      </div>
    </div>
  );
};

export default NavBar;

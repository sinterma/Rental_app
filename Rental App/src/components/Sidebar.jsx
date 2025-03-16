// import React from "react";

// function Sidebar() {
//   return <div>Sidebar</div>;

// }

// export default Sidebar;

import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/list/:id">Available apartments </a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

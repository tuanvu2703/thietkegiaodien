import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
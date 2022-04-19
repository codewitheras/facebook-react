import React from 'react'
import './HomePage.css'

// Component Imports
import SideNav from '../Components/SideNav';
import Header from '../Components/Header';


function HomePage() {
  return (
    <main class="grid">
      <Header />
      <SideNav />
    </main>
  );
}

export default HomePage;
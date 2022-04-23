import React from 'react'
import './HomePage.css'

// Component Imports
import SideNav from '../Components/SideNav';
import Header from '../Components/Header';
import MainPost from "../Components/MainPost";
import SideOptions from '../Components/SideOptions'

function HomePage() {
  // const [isModalOpened, setIsModalOpen] = React.useState(false);
  return (
    <>
      <Header />
      <main class="grid">
        <SideNav />
        <MainPost />
        <SideOptions />
        {/* <Modal setIsModalOpened={setIsModalOpen} /> */}
      </main>
    </>
  );
}

export default HomePage;
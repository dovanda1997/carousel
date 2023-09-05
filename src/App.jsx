import { useState } from "react";
import Carousel from "./Carousel";

function App() {
  const images = [
    "https://anhnendep.net/wp-content/uploads/2016/07/anh-dep-thien-nhien-the-gioi-01.jpg",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Image Carousel using React and Framer Motion</h1>
        </header>
        <main>
          <Carousel images={images}></Carousel>
        </main>
      </div>
    </>
  );
}

export default App;

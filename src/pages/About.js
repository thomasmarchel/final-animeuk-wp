import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return(
    <>
      <Navigation />

      <div className="container-fluid pt-5 p-5 bg-secondary text-light">
        <h1>About this Application</h1>
        <p>Marchel Refrent Thomas</p>
        <p>S21910277/105011910045</p>
        <p>WEB PROGRAMING</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      
        <p>Sosial Media</p>
        
        
            <a href="https://web.facebook.com/profile.php?id=100007652925842"> <button>Facebook</button></a>
            <a href="https://www.instagram.com/marchelt_/"> <button>Instagram</button></a>
            <a href="https://github.com/thomasmarchel/cv"> <button>Github</button></a>

        </div>

      <Footer />
    </>
  );
}

export default About;

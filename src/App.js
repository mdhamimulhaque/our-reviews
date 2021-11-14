import './App.css';
import SliderData from "./data";
import { FaAngleRight,FaAngleLeft } from 'react-icons/fa';
import { useState } from 'react';


function App() {
  const [ index,setIndex ] = useState(0);
  const { name,job,image,text } = SliderData[index];


//---------- next --------
  const nextSlider = () =>{
    setIndex((index)=>{
      const newIndex = index + 1;
      return newIndexNumber(newIndex);
    })
  }

  //----------  previous --------
  const prevSlider = () =>{
    setIndex((index)=>{
      const newIndex = index - 1;
      return newIndexNumber(newIndex);
    })
  }

    //----- manage slider -----------
    const newIndexNumber = (num) =>{
      if(num > SliderData.length - 1){
          return 0;
      }
      if(num < 0){
          return SliderData.length - 1;
      }
      return num; 
  }

  //------- random slider ----
  const randomSlider = () =>{
    let randomIndex = Math.floor(Math.random() * SliderData.length);
    //---avoid same number ----
    if(randomIndex === index){
      randomIndex = index + 1;
    };
    setIndex(newIndexNumber(randomIndex));
  };
 

  return (
    <main>
      <h2>Our Reviews</h2>
            <div className="review-box">
                <img src={image} alt="" />
                <div className="info-box">
                    <h4>{name}</h4>
                    <h6>{job}</h6>
                    <p>{text}</p>
                </div>
                <div className="icon-box">
                    <span onClick={prevSlider}><FaAngleLeft /></span>
                    <span onClick={nextSlider}><FaAngleRight /></span>
                </div>
                <button onClick={randomSlider}>Random Slider</button>
            </div>
        </main>
  );
}

export default App;

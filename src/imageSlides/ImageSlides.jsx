import { useState} from "react";
import React from "react";
import m1 from "../assets/m1.png"
import m2 from "../assets/m2.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"
import leftArrow from "../assets/left.svg"
import rightArrow from "../assets/right.svg"

export default function ImageSlides() {
  const images = [m1,m2,m3,m4]
  const [count,setCount] = useState(0)

  const leftClick = ()=>{
    return count == 0? setCount(images.length - 1):setCount(count - 1)
  }
  const rightClick = ()=>{
    return count == images.length - 1? setCount(0):setCount(count + 1)
}

  return (
    <main className="bg-indigo-950 h-screen flex flex-col items-center">
      <img className="h-96 w-96" src={images[count]}></img>
      <div className="flex gap-10">
        <img className="" src={leftArrow} onClick={leftClick}></img>
        <img className="" src={rightArrow} onClick={rightClick}></img>
      </div>
    </main>
  );
}

import React from "react";
import groupPhoto from "../public/groupPhoto.png"

function Hero(){
  return (
    <section className="content">
        <img alt= "happy photos" src ={groupPhoto}></img>
          <div className="description">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by, one-of-a-kind hosts - all whithout leaving home.</p>
        </div>
    </section>
  )
}

export default Hero

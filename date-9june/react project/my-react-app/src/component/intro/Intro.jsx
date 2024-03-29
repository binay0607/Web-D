import "./intro.scss"
import {init} from "ityped";
import { useRef, useEffect } from "react";


export default function Intro(){
    const textRef= useRef();
    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings: ["Developer", "Programmer", "Designer"]
        });
    }, []);
    return(
        <div className="intro" id="intro">
            <div className="left">
                <div className="imagecontainer">
                    
                    {/* <img src="assets/me.png" alt="" /> */}
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Binay Prasad</h1>
                    <h3>Freelance  <span ref={textRef}></span></h3>
                    <a href="#portfolio">
                            <img src="assets/down.png" alt="" />
                    </a>
                </div>
                
            </div>
        </div>
    )
}
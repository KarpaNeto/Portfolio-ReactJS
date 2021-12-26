import { init } from "ityped";
import { useEffect, useRef } from "react";
import { FaArrowAltCircleDown } from 'react-icons/fa';
import "./intro.scss";


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Front-end Developer", "UI/UX Designer", "Web Developer", "Content Creator"],
        });
    }, []);
    return (
        <div className="intro" id="intro">
           
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, my name is</h2>
                    <h1>Pedro Karpinski Neto</h1>
                    <h3>I'm <span ref={textRef}></span></h3>

                </div>
                <a className="anchor" href="#portfolio">
                <FaArrowAltCircleDown className="react-icons"/>
                </a>
            </div>
        </div>
    )
}

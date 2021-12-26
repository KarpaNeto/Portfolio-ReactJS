import { useState } from "react";
import { AiOutlineGithub, AiOutlineGlobal } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./works.scss"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            title: "Web social Media App",
            desc: "im first one",
            img: "https://cdn.dribbble.com/users/2419807/screenshots/16364210/media/537f3d22eaae8392a14436a04bc36590.png?compress=1&resize=1200x900"
        },
        {
            id: "2",
            title: "Clone Netflix",
            desc: "Project realized with ReactJS",
            img: "https://cdn.dribbble.com/users/3506230/screenshots/16626652/media/2d756a0f3075734a3e35c8f1204f9bed.png?compress=1&resize=1200x900"
        },
        {
            id: "3",
            title: "E-commerce design",
            desc: "Project realized with ReactJS",
            img: "https://cdn.dribbble.com/users/4189231/screenshots/14938775/media/7b8322de5adc6e2607af672b3afb562b.png?compress=1&resize=1200x900"
        }
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    return (
        <div className="works" id="works">
            <div className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                    <div className="imgContainer">
                                        <AiOutlineGlobal className="icon" />
                                        <AiOutlineGithub className="icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src="https://i.postimg.cc/hjfpSqZH/fksis.png" alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <FaChevronLeft className="arrow left" onClick={() => handleClick("left")} />
            <FaChevronRight className="arrow right" onClick={() => handleClick()} />
        </div >
    );
}

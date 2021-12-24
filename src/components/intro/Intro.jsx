import Arrow from "../../assets/icons/arrow-down.png"
import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, i'm</h2>
                    <h1>Pedro Karpinski Neto</h1>
                    <h3><span>Front-end Developer</span></h3>
                </div>
                <a href="#portfolio">
                    <img src={Arrow} alt="" />
                </a>
            </div>
        </div>
    )
}

import { useState } from "react";
import "./contact.scss"

export default function Contact() {

    const [message, setMessage] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true)
}

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="email" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, i'll replay ASAP</span>}
                </form>
            </div>
        </div>
    )
}

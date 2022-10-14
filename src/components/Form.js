import React from "react";
import './Form.css'
// import {FaTimes} from "react-icons/fa";

function Form() {
    // const [popup, setPopup] = useState(false)

    return (
            <div className='form'>
                <form id='sheetdb-form'>
                    <label>Your Name</label>
                    <input type="text" required/>
                    <label>Email</label>
                    <input type="email" required/>
                    <label>Subject</label>
                    <input type="text" required/>
                    <label>Detail</label>
                    <textarea rows='6' placeholder='Type a short message here' />
                    <button type='submit'  className='btn'>Submit</button>
                </form>
                {/*<span id="msg"></span>*/}
                {/*<div className={popup ? 'popup active' : 'popup'}>*/}
                {/*    <button onClick={() => setPopup(!popup)} className='btn-close'><FaTimes size={30} style={{color: '#fff'}}/></button>*/}
                {/*    <h1>Your application has been sent. Our manager will contact you soon.</h1>*/}
                {/*</div>*/}
            </div>
    )
}

export default Form
import './ProfileModal.css'
import { useState } from "react"

function ProfileModal() {
    const [title,setTitle] = useState('Sign up')
    return(
        <div className="overlay">
            <div className="modal">
                <h2 className="modal-title">{title}</h2>
                <form className="modal-form">
                    <label htmlFor="username" className="modal-form-title">Username</label>
                    <input type="text" name="username" className="modal-form-enterData" placeholder="Username" />

                    <label htmlFor="email" className="modal-form-title">E-Mail</label>
                    <input type="email" name="email" className="modal-form-enterData" placeholder="E-Mail" />

                    <label htmlFor="password" className="modal-form-title">Password</label>
                    <input type="text" name="password" className="modal-form-enterData" placeholder="Password" />
                    <button className="modal-form-enter">Sign up</button>
                    <label className="modal-change">Already have an account? <button className="modal-form-change">Log In</button></label>
                </form>
            </div>
        </div>
    )
}
export default ProfileModal

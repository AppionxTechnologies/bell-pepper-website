import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './accountdetails.css';
import 'font-awesome/css/font-awesome.min.css';
import { BiLogOut } from "react-icons/bi";
import { RiDeleteBin7Line } from "react-icons/ri";

function App1() {

    return (
        <>
            
            <div className="det-2 col-lg-6 Rightbox text-start ">
                <div className="det-22">
                    <h1>MY PROFILE</h1>
                    <h6>ACCOUNT DETAILS</h6>

                    <form action="">
                        <div className="input-form1">
                            <label htmlFor="">email address*</label>
                            <input type="text" defaultValue="das@gmail.com" />
                        </div>
                        <div className="input-form1">
                            <label htmlFor="">first name*</label>
                            <input type="text" defaultValue="Antony" />
                        </div>
                        <div className="input-form1">
                            <label htmlFor="">last name*</label>
                            <input type="text" defaultValue="Das" />
                        </div>
                        <div className="input-form1">
                            <label htmlFor=""> phone number(xxx) xxx-xxxx** </label>
                            <input type="text" defaultValue="(607) 535-3719" />
                        </div>
                        <div className="input-form1">
                            <label htmlFor=""> update password**</label>
                            <input type="text" default="" />
                            <span class="p-viewer1">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </span>

                        </div>
                        <div className="input-form1">
                            <label htmlFor="">comfirm password**</label>
                            <input type="text" default="" />
                            <span class="p-viewer2">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="other1">
                            <h6>OTHER ACTIONS</h6>
                        </div>
                        <div className="det-4 text-start">
                            <BiLogOut className="icn-1" /> <a href="">
                                Log out </a> <br />
                            <RiDeleteBin7Line className="icn-2" />
                            <a href="">Delete Account </a>

                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default App1;
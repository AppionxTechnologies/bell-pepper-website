import { React, useState } from "react";
import "./accountdetails.css";
import VerticalNavbar from "./vertical-navbar";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

export default function AccountDetails() {
  const [visible, setVisible] = useState(true);
  const [visiblee, setVisiblee] = useState(true);
  return (
    <>
      <div className="col-lg-12 account-details">
        <div className="row mt-4">
          <div className="col-lg-3 mt-3 flex-column">
            <VerticalNavbar />
          </div>

          <div className="col-lg-9 mt-3">
            <p className="fs-3 fw-bold my-profile-content">MY PROFILE</p>
            <div className="myaccountdetails-heading"><p className="fw-bold">ACCOUNT DETAILS</p></div>

            <div className="inputfield-div">
              <div className="input-field1">
                <label htmlFor="">Email Address*</label>
                <input type="text" defaultValue="das@gmail.com" />
              </div>
              <div className="input-field1">
                <label htmlFor="">First Name*</label>
                <input type="text" defaultValue="Antony" />
              </div>
              <div className="input-field1">
                <label htmlFor="">Last Name*</label>
                <input type="text" defaultValue="Das" />
              </div>
              <div className="input-field1">
                <label htmlFor=""> Phone Number(xxx) xxx-xxxx*</label>
                <input type="text" defaultValue="(607) 535-3719" />
              </div>
              <div className="input-field1">
                <label htmlFor=""> Update Password*</label>
                <input type="text" default="" />
                <IconButton
                  className="input-eye-icon"
                  onClick={() => setVisiblee(!visiblee)}
                  style={{
                    position: "absolute",
                    left: "455px",
                    top: "60%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {visiblee ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
              <div className="input-field1">
                <label htmlFor="">Comfirm Password*</label>
                <input type="text" default="" />
                <IconButton
                  className="input-eye-icon"
                  onClick={() => setVisible(!visible)}
                  style={{
                    position: "absolute",
                    left: "455px",
                    top: "60%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {visible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
            </div>

            <div className="mt-5">
              <p className="fw-bold">OTHER ACTIONS</p>

              <div className="bottom-content">
                <p className=" fw-semibold text-decoration-underline">
                  <BiLogOut className="bottom-icons" />
                  Log out
                </p>
                <p className="fw-semibold text-decoration-underline">
                  <AiOutlineDelete className="bottom-icons" />
                  Delete account
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

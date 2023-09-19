import React from "react";
import { useState } from "react";
import "../App.css";
function VerificationCode() {
  const headingStyle = {
    fontSize: "24px",
    color: "black",
  };
  const [focusedInput, setFocusedInput] = useState("");
  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput("");
  };

  return (
    <React.Fragment>
      <div id="__next" data-reactroot="">
        <div className="progress-loading">
          <div className=""></div>
        </div>
        <div className="reOverlay"></div>
        <div className="mx-auto box-border flex w-full max-w-[90rem] flex-1 gap-28 px-24 xl:gap-14 xl:px-16 lg:px-12 md:px-8 xs:px-5 2xs:px-3">
          <div className="relative flex w-form flex-col justify-start overflow-hidden px-0.5 py-10 xl:w-[26rem] lg:flex-1 lg:items-center">
            <div className="flex flex-1 flex-col lg:w-full lg:self-start">
              <a className="flex self-start">
                <img
                  src="https://admittedz.com/logo.svg"
                  alt="logo"
                  className="h-13"
                />
              </a>
              <div className="flex flex-col mt-36 max-w-xl lg:w-full lg:justify-center lg:flex-1 lg:mt-24 md:mt-18 xs:mt-14 items-start">
                <h2  className="mb-4 tp-display4 lg:text-center sm:text-center">Verification Code</h2>
                <div className="mb-13 flex xs:flex-col xs:gap-y-2">
                  <p className="tp-lead3 mr-2 text-gray-200 ">
                    Provide us with the verification code that we sent to your Email.
                  </p>
                  
                </div>

                <div className="flex w-full flex-col gap-7">
                  <div className="grid gap-6 grid-cols-12">
                    <div className="flex flex-col col-span-12">
                      <div
                        className={
                            focusedInput === "email"
                              ? "group flex z-0 rounded-2xl xs:rounded-xl box-border w-full border-2 border-gray-150 transition duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !border-secondary-1 !bg-transparent shadow-[0_0_0_2px_rgba(0,208,255,0.2)] !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl"
                              : "group flex z-0 rounded-2xl xs:rounded-xl box-border wfull border-2 border-gray-150  duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl"
                          }
                      >
                       
                        <div className="relative flex flex-1 items-center">
                          <input
                            type="text"
                            name="email"
                            className="flex z-20 flex-1 w-full relative z-10 tp-lead4 xs:tp-lead5 h-full resize-none text-gray-800 bg-transparent outline-none !tp-lead5 lg:!tp-lead1 xs:!tp-body2"
                            pattern=""
                            inputMode="text"
                            placeholder="your verification code here"
                            onFocus={() => handleFocus("email")}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-primary"
                    type="submit"
                  >
                    <span className=" z-10 tp-h6 xs:tp-h7">Verify</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center self-center py-10 lg:hidden">
            <img
              alt="login_image"
              className="max-h-[88vh] w-full rounded-[2.5rem] object-cover"
              src="/src/assets/LogInPic.jpg"
            />
          </div>
        </div>
        <div className="Toastify"></div>
      </div>
    </React.Fragment>
  );
}
export default VerificationCode;

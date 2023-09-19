import React from "react";
import { useState } from "react";
import "../App.css";
function forgotPass() {
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
                <h2  className="mb-4 tp-display4 lg:text-center sm:text-center">Forgot Password</h2>
                <div className="mb-13 flex xs:flex-col xs:gap-y-2">
                  <p className="tp-lead3 mr-2 text-gray-200 ">
                    Provide us with your email address.
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
                        <svg
                          id="Layer_1"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25 25"
                          fill="#A9A9AD"
                          width="20"
                          height="20"
                        >
                          <path
                            className="cls-1"
                            d="m12.39,5.03c-2.47,0-4.93,0-7.4,0-.41,0-.87.03-1.23.2-.62.28-1.06.74-1.04,1.52.03,1.58.02,3.16,0,4.74,0,.56-.06,1.13-.15,1.68-.07.46-.45.74-.85.58-.3-.11-.68-.51-.69-.8-.06-2.13-.06-4.26,0-6.39.01-.53.24-1.09.51-1.55.71-1.24,1.94-1.68,3.24-1.69,5.01-.05,10.01-.05,15.02,0,1.36.01,2.73.3,3.49,1.66.61,1.1.85,2.3.56,3.55-.03.15-.19.3-.33.38-2.5,1.36-5.01,2.7-7.51,4.05-.71.39-1.4.81-2.1,1.22-1.01.58-1.98.51-2.99-.08-1.86-1.08-3.76-2.09-5.64-3.13-.81-.45-.96-1.02-.32-1.44.23-.15.7-.15.95-.02,2.01,1.04,4.01,2.1,5.98,3.22.41.24.68.2,1.02.01,2.03-1.11,4.05-2.23,6.07-3.33.91-.5,1.82-1.01,2.77-1.45.53-.25.62-.64.51-1.1-.32-1.42-.98-1.8-2.32-1.82-2.51-.04-5.03-.01-7.54-.01Z"
                          />
                          <path
                            className="cls-1"
                            d="m12.39,21.7c-2.54,0-5.08-.03-7.62,0-2.13.04-3.77-1.51-3.77-3.78,0-.55.03-1.1-.01-1.65-.04-.51.27-.74.65-.73.31.01.81.23.87.45.17.65.2,1.34.21,2.02.02.87.38,1.49,1.18,1.8.25.1.54.14.82.14,5.03,0,10.06-.04,15.09.03,1.73.02,2.44-1.04,2.46-2.53.03-1.7.03-3.4,0-5.1-.01-.53.18-.81.68-.87.47-.06.82.12.91.63.05.27.14.54.14.82.01,1.53.06,3.07,0,4.6-.06,1.4-.38,2.77-1.75,3.51-.61.33-1.34.59-2.02.61-2.61.07-5.22.03-7.83.03h0Z"
                          />
                        </svg>
                        <div className="relative flex flex-1 items-center">
                          <input
                            type="text"
                            name="email"
                            className="flex z-20 flex-1 w-full relative z-10 tp-lead4 xs:tp-lead5 h-full resize-none text-gray-800 bg-transparent outline-none !tp-lead5 lg:!tp-lead1 xs:!tp-body2"
                            pattern=""
                            inputMode="text"
                            placeholder="youremail@example.com"
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
                    <span className=" z-10 tp-h6 xs:tp-h7">Send Code</span>
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
export default forgotPass;

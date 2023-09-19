import React from "react";
import { useState } from "react";
import "../App.css";


function ConfirmPass() {
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
                <h2  className="mb-4 tp-display4 lg:text-center sm:text-center">Reset Password</h2>
                <div className="mb-13 flex xs:flex-col xs:gap-y-2">
                  <p className="tp-lead3 mr-2 text-gray-200 ">
                  You can now set a new password to your account.
                  </p>
                  
                </div>

                <div className="flex w-full flex-col gap-7">
                  <div className="grid gap-6 grid-cols-12">
                  <div className="flex flex-col col-span-12">
                      <div
                        className={
                          focusedInput === "password"
                            ? "group flex z-0 rounded-2xl xs:rounded-xl box-border w-full border-2 border-gray-150 transition duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !border-secondary-1 !bg-transparent shadow-[0_0_0_2px_rgba(0,208,255,0.2)] !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl"
                            : "group flex z-0 rounded-2xl xs:rounded-xl box-border wfull border-2 border-gray-150  duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl"
                        }
                      >
                        <svg
                          id="Layer_1"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25 25"
                          width="21"
                          fill="#A9A9AD"
                          height="21"
                        >
                          <path d="m8.14,8.13c0-.72,0-1.42,0-2.12.02-1.44.58-2.62,1.72-3.51.84-.65,1.81-.96,2.88-.9,1.93.11,3.65,1.51,4.04,3.56.06.33.08.68.08,1.02.01.64,0,1.29,0,1.95.05,0,.1,0,.15,0,.56,0,1.12-.01,1.68,0,.99.02,1.76.43,2.24,1.32.21.38.29.8.29,1.23,0,3.39,0,6.78,0,10.17,0,1.06-.48,1.85-1.45,2.32-.34.17-.72.23-1.1.23-.85,0-1.69,0-2.54,0-.39,0-.69-.16-.85-.53-.18-.42.05-.92.49-1.05.12-.04.26-.06.39-.06.85,0,1.71,0,2.56,0,.54,0,.85-.31.85-.85,0-3.43,0-6.85,0-10.28,0-.47-.23-.78-.64-.86-.06-.01-.13-.01-.19-.01-2.05,0-4.11,0-6.16,0-.3,0-.57-.07-.75-.33-.19-.27-.2-.56-.06-.85.15-.31.42-.44.74-.45.38-.01.76,0,1.14,0,.51,0,1.03,0,1.56,0,0-.05,0-.1,0-.15,0-.69,0-1.37,0-2.06,0-1.4-1.08-2.56-2.48-2.68-.92-.07-1.71.21-2.31.91-.43.51-.67,1.1-.67,1.78,0,.95,0,1.91,0,2.86,0,.62-.34.96-.96.96-.87,0-1.74,0-2.6,0-.47,0-.8.32-.8.8,0,3.46,0,6.92,0,10.38,0,.51.32.83.84.83,2.02,0,4.04,0,6.05,0,.24,0,.47.03.66.2.25.21.36.48.27.8-.09.32-.3.52-.62.6-.09.02-.19.03-.28.03-2,0-3.99,0-5.99,0-1.05,0-1.85-.46-2.33-1.42-.17-.35-.24-.73-.24-1.12,0-3.41-.01-6.83,0-10.24,0-1.34.99-2.44,2.49-2.48.57-.01,1.14,0,1.7,0,.05,0,.1,0,.16,0Z" />
                          <path d="m11.69,18.15c0-.28,0-.55,0-.83,0-.1-.03-.16-.1-.22-.45-.33-.7-.77-.72-1.33-.03-.73.57-1.45,1.32-1.61.73-.16,1.5.27,1.81.99.33.76,0,1.55-.58,1.95-.08.06-.11.12-.11.21,0,.58.01,1.16,0,1.74,0,.41-.31.74-.72.79-.37.05-.78-.22-.87-.6-.03-.13-.03-.27-.04-.41,0-.23,0-.46,0-.7h0Z" />
                        </svg>{" "}
                        <div className="relative flex flex-1 items-center">
                          <input
                            type="password"
                            name="password"
                            className="flex z-20 flex-1 w-full relative z-10 tp-lead4 xs:tp-lead5 h-full resize-none text-gray-800 bg-transparent outline-none !tp-lead5 lg:!tp-lead1 xs:!tp-body2"
                            pattern=""
                            inputMode="text"
                            placeholder="Password"
                            onFocus={() => handleFocus("password")}
                            onBlur={handleBlur}
                          />
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#A9A9AD"
                          class="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>{" "}
                      </div>
                      <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                    </div>
                    <div className="flex flex-col col-span-12">
                      <div
                        className={
                          focusedInput === "comfirm"
                            ? "group flex z-0 rounded-2xl xs:rounded-xl box-border w-full border-2 border-gray-150 transition duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !border-secondary-1 !bg-transparent shadow-[0_0_0_2px_rgba(0,208,255,0.2)] !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl"
                            : "group flex z-0 rounded-2xl xs:rounded-xl box-border wfull border-2 border-gray-150  duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl"
                        }
                      >
                        <svg
                          id="Layer_1"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25 25"
                          width="21"
                          fill="#A9A9AD"
                          height="21"
                        >
                          <path d="m8.14,8.13c0-.72,0-1.42,0-2.12.02-1.44.58-2.62,1.72-3.51.84-.65,1.81-.96,2.88-.9,1.93.11,3.65,1.51,4.04,3.56.06.33.08.68.08,1.02.01.64,0,1.29,0,1.95.05,0,.1,0,.15,0,.56,0,1.12-.01,1.68,0,.99.02,1.76.43,2.24,1.32.21.38.29.8.29,1.23,0,3.39,0,6.78,0,10.17,0,1.06-.48,1.85-1.45,2.32-.34.17-.72.23-1.1.23-.85,0-1.69,0-2.54,0-.39,0-.69-.16-.85-.53-.18-.42.05-.92.49-1.05.12-.04.26-.06.39-.06.85,0,1.71,0,2.56,0,.54,0,.85-.31.85-.85,0-3.43,0-6.85,0-10.28,0-.47-.23-.78-.64-.86-.06-.01-.13-.01-.19-.01-2.05,0-4.11,0-6.16,0-.3,0-.57-.07-.75-.33-.19-.27-.2-.56-.06-.85.15-.31.42-.44.74-.45.38-.01.76,0,1.14,0,.51,0,1.03,0,1.56,0,0-.05,0-.1,0-.15,0-.69,0-1.37,0-2.06,0-1.4-1.08-2.56-2.48-2.68-.92-.07-1.71.21-2.31.91-.43.51-.67,1.1-.67,1.78,0,.95,0,1.91,0,2.86,0,.62-.34.96-.96.96-.87,0-1.74,0-2.6,0-.47,0-.8.32-.8.8,0,3.46,0,6.92,0,10.38,0,.51.32.83.84.83,2.02,0,4.04,0,6.05,0,.24,0,.47.03.66.2.25.21.36.48.27.8-.09.32-.3.52-.62.6-.09.02-.19.03-.28.03-2,0-3.99,0-5.99,0-1.05,0-1.85-.46-2.33-1.42-.17-.35-.24-.73-.24-1.12,0-3.41-.01-6.83,0-10.24,0-1.34.99-2.44,2.49-2.48.57-.01,1.14,0,1.7,0,.05,0,.1,0,.16,0Z" />
                          <path d="m11.69,18.15c0-.28,0-.55,0-.83,0-.1-.03-.16-.1-.22-.45-.33-.7-.77-.72-1.33-.03-.73.57-1.45,1.32-1.61.73-.16,1.5.27,1.81.99.33.76,0,1.55-.58,1.95-.08.06-.11.12-.11.21,0,.58.01,1.16,0,1.74,0,.41-.31.74-.72.79-.37.05-.78-.22-.87-.6-.03-.13-.03-.27-.04-.41,0-.23,0-.46,0-.7h0Z" />
                        </svg>{" "}
                        <div className="relative flex flex-1 items-center">
                          <input
                            type="comfirm"
                            name="comfirm"
                            className="flex z-20 flex-1 w-full relative z-10 tp-lead4 xs:tp-lead5 h-full resize-none text-gray-800 bg-transparent outline-none !tp-lead5 lg:!tp-lead1 xs:!tp-body2"
                            pattern=""
                            inputMode="text"
                            placeholder="Comfirm password"
                            onFocus={() => handleFocus("comfirm")}
                            onBlur={handleBlur}
                          />
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#A9A9AD"
                          class="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>{" "}
                      </div>
                      <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                    </div>
                  </div>
                  <button
                    className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-primary"
                    type="submit"
                  >
                    <span className=" z-10 tp-h6 xs:tp-h7">Submit</span>
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
export default ConfirmPass;

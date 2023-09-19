import React from "react";
import { useState } from "react";
import "../App.css";
import { Checkbox } from "@nextui-org/checkbox";
function Register() {
  const [focusedInput, setFocusedInput] = useState("");
  const [agreeStatues, setAgreeStatues] = useState(false);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput("");
  };
  return (
    <React.Fragment>
      <div id="__next" data-reactroot="">
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
              <div className="flex flex-col mt-36 max-w-xl lg:w-full lg:justify-center lg:flex-1 lg:mt-24 md:mt-18 xs:mt-14 items-start !mt-28 lg:!mt-22 md:!mt-16 xs:!mt-12">
                <h2 className="mb-4 tp-display4 lg:text-center sm:text-center">
                  Join us!
                </h2>
                <div className="mb-12 flex xs:flex-col xs:gap-y-2">
                  <p className="tp-lead3 mr-1.5 text-center text-gray-200">
                    Already a member of our community?
                  </p>
                  <a
                    className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-text !px-0 !py-0 !h-auto self-start"
                    type="submit"
                    href="/auth/login"
                  >
                    <span className=" z-10 tp-h6 xs:tp-h7">Login here</span>
                  </a>
                </div>
                <div className="flex w-full flex-col gap-6">
                  <div className="grid gap-6 grid-cols-12 !gap-4">
                    <div className="flex flex-col col-span-6 sm:col-span-12">
                      <div
                        className={
                          focusedInput === "firstName"
                            ? "group flex z-0 rounded-2xl xs:rounded-xl box-border w-full border-2 border-gray-150 transition duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !border-secondary-1 !bg-transparent shadow-[0_0_0_2px_rgba(0,208,255,0.2)] !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl"
                            : "group flex z-0 rounded-2xl xs:rounded-xl box-border wfull border-2 border-gray-150  duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl"
                        }
                      >
                        <div className="relative flex flex-1 items-center">
                          <input
                            type="text"
                            name="first_name"
                            className="flex z-20 flex-1 w-full relative z-10 tp-lead4 xs:tp-lead5 h-full resize-none text-gray-800 bg-transparent outline-none !tp-lead5 lg:!tp-lead1 xs:!tp-body2"
                            pattern=""
                            inputMode="text"
                            placeholder="First Name"
                            onFocus={() => handleFocus("firstName")}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>
                      <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                    </div>
                    <div className="flex flex-col col-span-6 sm:col-span-12">
                      <div
                        className={
                          focusedInput === "lastName"
                            ? "group flex z-0 rounded-2xl xs:rounded-xl box-border w-full border-2 border-gray-150 transition duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !border-secondary-1 !bg-transparent shadow-[0_0_0_2px_rgba(0,208,255,0.2)] !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl"
                            : "group flex z-0 rounded-2xl xs:rounded-xl box-border wfull border-2 border-gray-150  duration-300 relative px-6 hover:bg-gray-50 gap-3 h-14 lg:h-13 xs:h-12 !h-13 lg:!h-12 xs:!h-11 !px-4 !rounded-xl"
                        }
                      >
                        <div className="relative flex flex-1 items-center">
                          <input
                            type="text"
                            name="last_name"
                            className="flex z-20 flex-1 w-full relative z-10 tp-lead4 xs:tp-lead5 h-full resize-none text-gray-800 bg-transparent outline-none !tp-lead5 lg:!tp-lead1 xs:!tp-body2"
                            pattern=""
                            inputMode="text"
                            placeholder="Last Name"
                            onFocus={() => handleFocus("lastName")}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>
                      <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                    </div>
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
                        </svg>{" "}
                        <div className="relative flex flex-1 items-center">
                          <input
                            type="text"
                            name="email"
                            className="flex z-20 flex-1 w-full relative z-10 tp-lead4 xs:tp-lead5 h-full resize-none text-gray-800 bg-transparent outline-none !tp-lead5 lg:!tp-lead1 xs:!tp-body2"
                            pattern=""
                            inputMode="text"
                            placeholder="Email Address"
                            onFocus={() => handleFocus("email")}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>
                      <span className="flex opacity-0 h-4 transition-all duration-200 -z-10 -mt-4 ml-1 text-error-standard tp-body2"></span>
                    </div>
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
                          focusedInput === "confirmPassword"
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
                            name="password_confirm"
                            className="flex z-20 flex-1 w-full relative z-10 tp-lead4 xs:tp-lead5 h-full resize-none text-gray-800 bg-transparent outline-none !tp-lead5 lg:!tp-lead1 xs:!tp-body2"
                            pattern=""
                            inputMode="text"
                            placeholder="Confirm Password"
                            onFocus={() => handleFocus("confirmPassword")}
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
                  <div className="mb-2 flex items-center">
                    <div className="group flex gap-3 items-center cursor-pointer">
                      <span className="box-border w-6 h-6 xs:h-5 xs:w-5 rounded-lg border-2 border-base-3 group-hover:border-gray-150 transition duration-300 flex items-center justify-center">
                        <Checkbox
                          isSelected={agreeStatues}
                          onChange={() => setAgreeStatues(!agreeStatues)}
                          size="lg"
                        ></Checkbox>
                      </span>
                      <span className="text-gray-600 group-hover:text-gray-900 tp-lead1 transition duration-300 tp-lead3">
                        I have read and agree to the
                      </span>
                    </div>
                    <button
                      className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-link !px-0 !py-0 !h-auto ml-1.5"
                      type="submit"
                    >
                      <span className=" z-10 tp-h6 xs:tp-h7 underline decoration-2 underline-offset-2 sm:!tp-lead5">
                        Terms and Conditions
                      </span>
                    </button>
                  </div>
                  <button
                    className="button group h-15 lg:h-14 xs:h-13 rounded-2xl xs:rounded-xl px-10 lg:px-9 xs:px-8 py-0 button-primary"
                    type="submit"
                  >
                    <span className=" z-10 tp-h6 xs:tp-h7">Sign up</span>
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
export default Register;

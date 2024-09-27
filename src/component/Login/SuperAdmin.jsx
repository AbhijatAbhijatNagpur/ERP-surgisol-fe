import React from "react";
import HRM from "/HRM logo.png";

function SuperAdmin() {
  return (
    <>
      <div className="max-w-screen-2xl container">
        <div className="flex h md:flex-row flex-col">
          {/* img */}
          <div className="bg-slate-200 md:h-screen md:space-y-40 space-y-10 md:w-1/2 md:py-16 py-14 flex flex-col ">
            <img
              src={HRM}
              alt=""
              className="md:h-[200px] md:w-[300px] h-[100px] w-[200px] m-auto"
            />
            <div className="flex">
              {" "}
              <p className=" text-left mx-5 md:text-2xl">
                Welcome to the HRM System Log in to manage your personal
                information, time and attendance, and performance reviews
                securely. Your data is protected with the highest security
                standards.
              </p>
            </div>
          </div>
          {/* form */}
          <div className="md:w-1/2 flex flex-col justify-center md:p-2 py-3 bg-yellow-50 ">
            <div className=" w-full m-auto my-20 flex  flex-col space-y-2 justify-center items-center">
              <h1 className="md:text-4xl text-3xl font-semibold mb-5">
                Welcome
              </h1>
              <h2 className="md:text-4xl text-3xl text-blue-600 font-semibold">
                Super Admin Login
              </h2>

              <form action="" className="m-auto md:w-1/2">
                <h3 className="text-2xl">Log in to your account to continue</h3>
                <div className="flex flex-col space-y-2 md:my-4 my-8 w-full ">
                  <input
                    type="text"
                    className="rounded-full placeholder:text-black placeholder:font-medium bg-orange-200 text-black font-semibold text-center py-2 text-xl w-full"
                    placeholder="Username"
                    name=""
                    id=""
                  />
                  <input
                    type="password"
                    className="rounded-full placeholder:text-black placeholder:font-medium text-center  bg-orange-200 text-xl py-2"
                    placeholder="password"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex justify-between mb-6 font-semibold">
                  <div className="mx-2">
                    <input type="checkbox" value="" id="exampleCheck2" />
                    <label className="">Remember me</label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>
                <div className="text-center m-3">
                  <button className="text-2xl bg-orange-200 px-5 py-1 rounded-full">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuperAdmin;

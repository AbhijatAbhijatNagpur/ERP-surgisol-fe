import React from "react";
// countrty
import {
  Label,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function WelcomeCountry() {
  return (
    <>
      <div className="flex w-full justify-between py-16 pb-0 mb-0 ">
        {/* Hi welcome */}
        <div className=" p-4 h-20 mt-0">
          <h1 className="flex flex-col text-xl font font-bold">
            Dashboard
            <span className="font-medium text-sm my-1">Hi, Welcome!</span>
          </h1>
        </div>
        {/* select country */}
        <div className="flex flex-col items-center mr-2">
          <Menu as="div" className=" inline-block text-left shadow-md">
            <div>
              {" "}
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Company
              </label>
              <MenuButton className="inline-flex w-52 justify-between gap-x-1.5 rounded-md bg-white px-3 py-3 text-sm text-gray-400 shadow-sm ring-1 ring-inset ring-white hover:bg-gray-50">
                Select Company
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Unisol
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    SurgiSol
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    EnviroSolutions
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Ignite Sphere
                  </Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default WelcomeCountry;

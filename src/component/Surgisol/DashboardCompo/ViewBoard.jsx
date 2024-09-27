import React from "react";
import { ViewBoardBoxes } from "../Data/ViewBoardsBoxes";

function ViewBoard() {
  return (
    <>
      <div className="mt-0 flex space-x-8 justify-center">
        {ViewBoardBoxes.map(({ Title, Percentage, Total, bottomTitle }) => (
          <>
            <ul className="bg-white px-6 py-6 mx-2 space-y-1 shadow-lg">
              <li className="flex font-bold">
                {Title} <span className="">{Percentage}</span>
              </li>
              <li className="font-bold text-xl"> {Total}</li>
              <li className="text-gray-400">{bottomTitle}</li>
            </ul>
          </>
        ))}
      </div>
    </>
  );
}

export default ViewBoard;

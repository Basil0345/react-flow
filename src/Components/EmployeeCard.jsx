import React from "react";
import { Handle } from "reactflow";
import "reactflow/dist/style.css";

const EmployeeCard = ({ data, onClick }) => {
  return (
    <div
      className="flex items-center justify-between border rounded-lg p-2 bg-white shadow-md w-64 cursor-pointer" // Added cursor pointer for better UX
      onClick={onClick} // Added onClick event
    >
      <div className="flex flex-row">
        <div className="w-12 h-12 ">
          <img
            className="rounded-full border border-gray-300 w-full h-full object-cover"
            src={"https://via.placeholder.com/150"} // Fallback image
            alt="profile"
          />
        </div>

        <div className="ml-3 flex flex-col justify-center">
          <p className="text-sm font-semibold text-gray-800">{data.name}</p>
          <p className="text-xs text-gray-500">{data.designation}</p>
        </div>
      </div>

      <div className="flex justify-center p-3">
        {Array.isArray(data.children) && data.children.length ? (
          <div className="w-6 h-6 rounded-full bg-gray-500 text-white flex items-center justify-center">
            {data.children.length}
          </div>
        ) : (
          ""
        )}
      </div>

      <Handle type="target" position="left" className="bg-blue-500 w-2 h-2" />
      <Handle type="source" position="right" className="bg-blue-500 w-2 h-2" />
    </div>
  );
};

export default EmployeeCard;

import React from "react";

export default function Title({ title, Icon }) {
  return (
    <div className="w-full flex sm:gap-8 gap-4 items-center">
      <Icon className="sm:w6 sm:h-7 w-8 h-8 text-subMain" />
      <h2 className="sm:text-xl font-bold text-lg">{title}</h2>
    </div>
  );
}

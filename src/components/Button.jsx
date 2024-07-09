import React from 'react'

export default function Button({buttonText, onClick}) {
  return (
    <>
      <button onClick={onClick} className="bg-[#FFB6C1] border-2 font-medium text-xs lg:text-base md:text-sm border-[#DE8C99] p-4 lg:px-5 md:py-3 md:px-3 rounded-full">
        {buttonText || "Button Text"}
      </button>
    </>
  );
}

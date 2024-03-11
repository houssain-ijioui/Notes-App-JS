import React from 'react';



const Addbutton = () => {

  return (
    <button className="group cursor-pointer outline-none hover:rotate-90 duration-300" title="Add New">
    <svg
      className="stroke-stone-950 fill-none group-hover:stroke-stone-950 group-active:stroke-stone-950 group-active:duration-0 duration-300"
      viewBox="0 0 24 24"
      height="50px"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
    <path
      strokeWidth="1.5"
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
    ></path>
    <path strokeWidth="1.5" d="M8 12H16"></path>
    <path strokeWidth="1.5" d="M12 16V8"></path>
    </svg>
  </button>
  )
}

export default Addbutton
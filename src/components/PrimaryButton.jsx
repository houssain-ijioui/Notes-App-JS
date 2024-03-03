import React from 'react';
import { Button } from 'flowbite-react';


const PrimaryButton = ({ onClick, color, text }) => {
  return (
    <Button onClick={onClick} className={`lg:col-span-2 col-span-full ${color} py-1 text-center w-40`}>{text}</Button>
  )
}

export default PrimaryButton;

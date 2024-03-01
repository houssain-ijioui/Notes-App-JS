import React from 'react';
import { Button } from 'flowbite-react';


const PrimaryButton = ({ onClick, color, text }) => {
  return (
    <Button onClick={onClick} className={`lg:col-span-2 col-span-full ${color} pt-2 m`}>{text}</Button>
  )
}

export default PrimaryButton;

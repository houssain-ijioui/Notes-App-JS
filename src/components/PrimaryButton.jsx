import React from 'react';
import { Button } from 'flowbite-react';


const PrimaryButton = ({ onClick, color, text, type }) => {
  return (
    <Button type={type} onClick={onClick} className={`lg:col-span-2 col-span-full ${color} pt-2 text-center`}>{text}</Button>
  )
}

export default PrimaryButton;

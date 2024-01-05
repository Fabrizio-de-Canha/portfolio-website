import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Toggle = ({ setOpen, isOpen }) => {
  return (
    <button
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      {isOpen? <ArrowBackIcon/>: <MenuIcon />}
    </button>
  );
};

export default Toggle;

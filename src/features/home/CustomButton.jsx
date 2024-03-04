
import React from 'react';

const CustomButton = ({ text, onClick, className, ...props }) => {
   
    return (
        <button
            className={` p-2 rounded-md bg-primary text-popover-foreground ${className}`}
            onClick={onClick}
            {...props}
        >
            {text}
        </button>
    );
}

export default CustomButton;
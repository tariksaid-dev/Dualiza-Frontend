import React from 'react';

const CustomButton = ({ text, onClick, className, ...props }) => {
    return (
        <button 
            className={`bg-skin-orange-lanze p-2 rounded-md hover:bg-skin-orange-ieshlanz ${className}`} 
            onClick={onClick} 
            {...props}
        >
            {text}
        </button>
    );
}

export default CustomButton;
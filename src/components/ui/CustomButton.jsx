import React from 'react';

const CustomButton = ({ text, onClick, className = '', ...props }) => {
    return (
        <button 
            className={`bg-orange-500 p-2 rounded-md hover:bg-orange-600 ${className}`} 
            onClick={onClick} 
            {...props}
        >
            {text}
        </button>
    );
}

export default CustomButton;
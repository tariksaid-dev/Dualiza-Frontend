import { ThemeProviderContext } from '@/context/DarkModeContext';
import { getBgButtonCards } from '@/utils/themeHelpers';
import React, { useContext } from 'react';

const CustomButton = ({ text, onClick, className, ...props }) => {
    const { theme } = useContext(ThemeProviderContext);
    return (
        <button
            className={` p-2 rounded-md ${getBgButtonCards(theme)} ${className}`}
            onClick={onClick}
            {...props}
        >
            {text}
        </button>
    );
}

export default CustomButton;
import { ThemeProviderContext } from '@/context/DarkModeContext';
import { getTextColorTitle } from '@/utils/themeHelpers';
import React, { useContext } from 'react'

const ContentSection = ({ id, title, children }) => {
    const { theme } = useContext(ThemeProviderContext);
    return (
        <section id={id} className="flex  flex-col items-center gap-6 space-y-8 h-screen  justify-center py-5 p-5 max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-4">

                <h2 className={`gradient-text text-center font-extrabold tracking-tight text-6xl ${getTextColorTitle(theme)}`}>
                    {title}
                </h2>
            </div>
            <p className="max-w-xl text-center font-extrabold text-2xl"></p>
            {children}
        </section>
    );
}

export default ContentSection

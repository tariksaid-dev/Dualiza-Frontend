import { ThemeProviderContext } from '@/context/DarkModeContext';
import { getTextColorTitle } from '@/utils/themeHelpers';
import React, { useContext } from 'react';

const Contacto2 = () => {
    const { theme } = useContext(ThemeProviderContext);
    return (
        <section className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto">

            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center ${getTextColorTitle(theme)}`}>Contacto</h1>
            <h2 className=" md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 text-center">Deja tu mensaje aquí</h2>

            <div className="w-full max-w-xl space-y-4 lg:w-1/2 lg:pr-6 xl:pr-0 border border-skin-dark-blue shadow-2xl rounded-lg m-4">

                <form className="mt-8 p-2">
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-lg font-medium mb-2">Nombre</label>
                        <input type="text" id="nombre" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mensaje" className="block text-lg font-medium mb-2">Mensaje</label>
                        <textarea id="mensaje" className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-skin-orange-lanze text-white px-4 py-2 rounded-md hover:bg-skin-orange-ieshlanz">Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contacto2;
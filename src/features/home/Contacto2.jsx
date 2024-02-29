import React from 'react';

const Contacto2 = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto">

            <h1 className="text-6xl font-bold text-center text-orange-500">Contacto</h1>
            <h2 className="text-xl mt-4 text-center">Deja tu mensaje aquí</h2>

            <div className="w-full max-w-xl space-y-4 lg:w-1/2 lg:pr-6 xl:pr-0 border border-[#1d1b33] shadow-2xl rounded-lg m-4">

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
                        <button type="submit" className="bg-[#e75129] text-white px-4 py-2 rounded-md hover:bg-[#e75129]/80">Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contacto2;
import React from 'react';

const Contacto2 = () => {

  return (
    <section className="flex flex-col items-center justify-center h-full p-10 max-w-7xl mx-auto">

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center text-primary">Contacto</h1>
      <h2 className=" md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 text-center text-foreground">Deja tu mensaje aquí</h2>

      <div className="w-full max-w-xl space-y-4 lg:w-1/2 lg:pr-6 xl:pr-0 border border-border shadow-2xl rounded-lg m-4">

        <form className="mt-8 p-2">
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-lg font-medium mb-2 text-foreground">Nombre</label>
            <input type="text" id="nombre" className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2 text-foreground">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block text-lg font-medium mb-2 text-foreground">Mensaje</label>
            <textarea id="mensaje" className="w-full h-32 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-80">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contacto2;
import { ThemeProviderContext } from '@/context/DarkModeContext'
import React, { useContext } from 'react'

const Contacto = () => {
  const { theme } = useContext(ThemeProviderContext)
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 h-screen">
      <div className='flex flex-col gap-2'>
        <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">Contact</h2>
        <p className="text-center md:text-lg lg:text-xl">If you have any questions, please feel free to contact us.</p>
      </div>
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:flex-row lg:items-start lg:text-left xl:max-w-6xl xl:gap-10 xl:px-0">
        <div className="w-full  max-w-sm space-y-4 lg:w-1/2 lg:pr-6 xl:pr-0 border border-orange-500/50 shadow-lg rounded-lg hover:border-orange-500 items-center justify-center flex flex-col p-10">
          <form class="max-w-sm mx-auto flex flex-col gap-4 w-full">
          <div class="mb-5">
              <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
              <input type="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Nombre...' required />
            </div>
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo electrónico..." required />
            </div>
        
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribe tu mensaje..."></textarea>
            <div className='flex justify-center mb-5'>

            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
          </form>

        </div>
        <div className="grid w-full grid-cols-1 items-stretch justify-center gap-4 lg:w-1/2 lg:grid-cols-4 lg:gap-6 py-10">
          <div className="mx-auto flex w-full items-center justify-center rounded-lg overflow-hidden border border-gray-200  dark:border-gray-800 lg:col-span-4">
            <img
              alt="Image"
              className="aspect-[2/1] object-cover object-center"
              height="200"
              src={`${theme === 'light' ? 'images/IES_H_LANZ/5-LOGOS-IES-P-H-LANZ-01(PRINCIPAL).webp' : 'images/IES_H_LANZ/5-LOGOS-IES-P-H-LANZ-B-02.webp'}`}
              width="400"
            />
          </div>
          <div className="mx-auto flex w-full items-center justify-center rounded-lg overflow-hidden border border-gray-200  dark:border-gray-800 lg:col-span-2">
            <img
              alt="Image"
              className="aspect-[2/1] object-cover object-center"
              height="200"
              src="images/IES_ALBAYTAR/albaytar-logo.webp"
              width="400"
            />
          </div>
          <div className="mx-auto flex w-full items-center justify-center rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 lg:col-span-2">
            <img
              alt="Image"
              className="aspect-[2/1] object-cover object-center"
              height="200"
              src={`${theme === 'light' ? 'images/CIFP_VIRGEN_DE_GRACIA/02-LOGO-CIFP-VdG.webp' : 'images/CIFP_VIRGEN_DE_GRACIA/VIRGEN-DE-GRACIA.webp'}`}
              width="400"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto



// import { ThemeProviderContext } from '@/context/DarkModeContext'
// import React, { useContext } from 'react'

// const Contacto = () => {
//   const { theme } = useContext(ThemeProviderContext)
//   return (
// <section className="w-full py-12 md:py-24 lg:py-32 h-screen">
//   <div className='flex flex-col gap-2'>
//     <h2 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">Contact</h2>
//     <p className="text-center md:text-lg lg:text-xl">If you have any questions, please feel free to contact us.</p>
//   </div>
//       <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:flex-row lg:items-start lg:text-left xl:max-w-6xl xl:gap-10 xl:px-0">
//         <div className="w-full  max-w-sm space-y-4 lg:w-1/2 lg:pr-6 xl:pr-0 border border-orange-500/50 shadow-lg rounded-lg hover:border-orange-500">
//           <form className="grid grid-cols-1 gap-4 ">
//             <div className="grid grid-cols-1 gap-4">
//               <label htmlFor="name">Name</label>
//               <input className='p-2' id="name" placeholder="Enter your name" />
//             </div>
//             <div className="grid grid-cols-1 gap-4">
//               <label htmlFor="email">Email</label>
//               <input className='p-2' id="email" placeholder="Enter your email" />
//             </div>
//             <div className="grid grid-cols-1 gap-4">
//               <label htmlFor="message">Message</label>
//               <textarea className="min-h-[150px] resize-y" id="message" placeholder="Enter your message" />
//             </div>
//             <button className='bg-blue-800 p-2 rounded-md w-10' type="submit">Submit</button>
//           </form>
//         </div>
//         <div className="grid w-full grid-cols-1 items-stretch justify-center gap-4 lg:w-1/2 lg:grid-cols-4 lg:gap-6">
//           <div className="mx-auto flex w-full items-center justify-center rounded-lg overflow-hidden border border-gray-200  dark:border-gray-800 lg:col-span-4">
//             <img
//               alt="Image"
//               className="aspect-[2/1] object-cover object-center"
//               height="200"
//               src={`${theme === 'light' ? 'images/IES_H_LANZ/5-LOGOS-IES-P-H-LANZ-01(PRINCIPAL).webp' :'images/IES_H_LANZ/5-LOGOS-IES-P-H-LANZ-B-02.webp'}`}
//               width="400"
//             />
//           </div>
//           <div className="mx-auto flex w-full items-center justify-center rounded-lg overflow-hidden border border-gray-200  dark:border-gray-800 lg:col-span-2">
//             <img
//               alt="Image"
//               className="aspect-[2/1] object-cover object-center"
//               height="200"
//               src="images/IES_ALBAYTAR/albaytar-logo.webp"
//               width="400"
//             />
//           </div>
//           <div className="mx-auto flex w-full items-center justify-center rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 lg:col-span-2">
//             <img
//               alt="Image"
//               className="aspect-[2/1] object-cover object-center"
//               height="200"
//               src={`${theme === 'light' ? 'images/CIFP_VIRGEN_DE_GRACIA/02-LOGO-CIFP-VdG.webp' : 'images/CIFP_VIRGEN_DE_GRACIA/VIRGEN-DE-GRACIA.webp'}`}
//               width="400"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contacto
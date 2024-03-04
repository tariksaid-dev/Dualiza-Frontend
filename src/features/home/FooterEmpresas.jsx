import React from 'react'

const FooterEmpresas = () => {
  return (
    <footer className="bg-skin-dark-blue text-white p-10 h-full py-10 w-full">
      <div className=" mx-auto">
        <div className="flex flex-col lg:grid md:grid-cols-2 gap-10">
          <div className='col-span-1'>
            <h2 className='text-center text-3xl'>Institutos Participantes</h2>
            <div className=' flex flex-col gap-8 md:flex-row  justify-center items-center py-8'>
              <a href="https://www.ieshlanz.es/" target='_blank' rel='noopener noreferrer'><img className='size-32' src="images/IES_H_LANZ/hlanz-logo.svg" alt="" /></a>
              <a href="https://albaytar.es/" target='_blank' rel='noopener noreferrer'><img className='w-48' src="images/IES_ALBAYTAR/albaytar-logo.webp" alt="" /></a>
              <a href="https://cifpvirgendegracia.com/" target='_blank' rel='noopener noreferrer'> <img className='w-48' src="images/CIFP_VIRGEN_DE_GRACIA/VIRGEN-DE-GRACIA.webp" alt="" /></a>
            </div>
          </div>
          <div className='col-span-1 '>
            <h2 className='text-center text-3xl'>Institutos Participantes</h2>
            <div className='flex flex-col md:flex-row gap-10 justify-center items-center py-10 md:py-20 '>
              <a href="https://www.caixabankdualiza.es/" target='_blank' rel='noopener noreferrer'><img className='w-64' src="images/CaixaBank_Dualiza/CaixaBank-Dualiza-Logo-Horitzontal-RGB-Fons-Negre.webp" alt="" /></a>
              <a href="https://fpempresa.net/" target='_blank' rel='noopener noreferrer'><img src="images/FPEmpresa/fpempresa-logo.webp" width={200} alt="" /></a>
            </div>
          </div>

        </div>
        <div className="flex flex-col items-center mt-10 border-t border-gray-600 pt-6">
          <p className="text-sm mb-4 text-skin-orange-lanze font-bold">© 2024 DUALITZA.</p>
          <div className="flex space-x-4">
            <a className="text-sm hover:underline" href="#">
              Privacy Policy
            </a>
            <a className="text-sm hover:underline" href="#">
              Terms of Service
            </a>
            <p className="text-sm"><span className='font-bold'>Creators:</span> <a className='hover:underline underline-offset-4 decoration-primary ' href="https://github.com/PepeRivera04" target='_blank' rel='noopener noreferrer'>Pepe Rivera</a>, <a className='hover:underline underline-offset-4 decoration-primary' href="https://github.com/NuMeRo-999" target='_blank' rel='noopener noreferrer'>Pedro Vilchez</a>, <a className='hover:underline underline-offset-4 decoration-primary' href="https://github.com/tariksaid-dev" target='_blank' rel='noopener noreferrer'>Tarik Said</a>, <a className='hover:underline underline-offset-4 decoration-primary' href="https://github.com/RogerCiv" target='_blank' rel='noopener noreferrer'>Roger Civantos</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterEmpresas
import { Link } from 'lucide-react'
import React from 'react'

const FooterEmpresas = () => {
    return (
        <footer className="bg-[#0a192f] text-white p-10 h-full py-10 w-full">
            <div className=" mx-auto">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-20">
                    <div className='col-span-1'>
                        <h2 className='text-center text-3xl'>Institutos Participantes</h2>
                        <div className=' flex flex-col gap-2 md:flex-row  justify-center items-center'>
                            <img src="images/IES_H_LANZ/5-LOGOS-IES-P-H-LANZ-B-02.webp" width={200} alt="" />
                            <img className='size-46' src="images/IES_ALBAYTAR/albaytar-logo.webp" alt="" />
                            <img src="images/CIFP_VIRGEN_DE_GRACIA/VIRGEN-DE-GRACIA.webp" width={200} alt="" />
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <h2 className='text-center text-3xl'>Institutos Participantes</h2>
                        <div className='flex flex-col md:flex-row gap-8 justify-center items-center p-28'>
                            <img src="images/CaixaBank_Dualiza/CaixaBank-Dualiza-Logo-Horitzontal-RGB-Fons-Negre.webp" width={200} alt="" />
                            <img src="images/FPEmpresa/FP-EMPRESA-LOGO.webp" width={200} alt="" />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center mt-10 border-t border-gray-600 pt-6">
                    <p className="text-sm mb-4">© 2024 DUALITZA.</p>
                    <div className="flex space-x-4">
                        <a className="text-sm hover:underline" href="#">
                            Privacy Policy
                        </a>
                        <a className="text-sm hover:underline" href="#">
                            Terms of Service
                        </a>
                        <p className="text-sm">Creators: Pepe Rivera, Pedro Vilchez, Tarik Said, Roger Civantos</p>
                    </div>
                </div>
            </div>
            {/* <img src="images/CaixaBank_Dualiza/CaixaBank-Dualiza-Logo-Horitzontal-RGB-Fons-Negre.webp" width={200} alt="" />
                            <img src="images/FPEmpresa/FP-EMPRESA-LOGO.webp" width={200} alt="" /> */}
        </footer>
    )
}

export default FooterEmpresas
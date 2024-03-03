import { ThemeProviderContext } from '@/context/DarkModeContext'
import  { useContext } from 'react'



export const getTextColorTitle = (theme) => {
  return theme === 'light' ? 'text-accent-foreground' : 'text-skin-orange-lanze';
}
export const getTextColorSpan = (theme) => {
  return theme === 'light' ? 'text-skin-dark-blue' : 'text-destructive';
}

export const getLogoHlanz = (theme) => {
  return theme === 'light' ? 'images/IES_H_LANZ/hlanz-logo-light.svg' : 'images/IES_H_LANZ/hlanz-logo.svg';
}

export const getLogoVirgenGracia = (theme) => {
  return theme === 'light' ? 'images/CIFP_VIRGEN_DE_GRACIA/02-LOGO-CIFP-VdG.webp' : 'images/CIFP_VIRGEN_DE_GRACIA/virgen-gracia-logo.svg';
}

export const getLogoCaixaBank = (theme) => {
  return theme === 'light' ? 'images/CaixaBank_Dualiza/CaixaBank-Dualiza-Logo-Horitzontal-RGB-Fons-Blanc.webp' : 'images/CaixaBank_Dualiza/CaixaBank-Dualiza-Logo-Horitzontal-RGB-Fons-Negre.webp';
}

export const getLogoFpEmpresa = (theme) => {
  return theme === 'light' ? 'images/FPEmpresa/181015-FP-EMPRESA-Logo-Definitivos-Variantes-01.webp' : 'images/FPEmpresa/fpempresa-logo.webp';
}
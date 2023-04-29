import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google'

export const formula = localFont({ src: '../public/localFonts/formulacondensed-bold-webfont.woff2' })
export const montserrat = Montserrat({ weight: ['100', '200', '300', '400', '500', '600', '700'], style: ['normal', 'italic'], subsets: ['latin'],})

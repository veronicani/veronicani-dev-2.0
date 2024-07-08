import { Fira_Code, DM_Serif_Display, DM_Sans } from 'next/font/google';

export const fira = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira',

});
export const dm_serif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
})
export const dm_sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})
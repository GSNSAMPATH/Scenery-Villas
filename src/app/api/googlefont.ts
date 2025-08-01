// fonts.ts (create a dedicated file for fonts)
import { Lobster } from 'next/font/google';
import { DM_Sans } from 'next/font/google';

export const lobster = Lobster({
    subsets: ['latin'],
    weight: '400',
});

export const fonts = {
    lobster: lobster,
};

export const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});





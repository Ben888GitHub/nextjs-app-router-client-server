'use client';

// * References
// * https://www.youtube.com/watch?v=3Dw6D_WuzSE&t=1101s
// * https://github.com/tumetus/next-js-theme-changer-tailwind-example/tree/main
// * https://github.com/HamedBahram/next-starter-with-theme/tree/main

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

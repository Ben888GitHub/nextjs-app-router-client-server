import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import ThemeSwitcher from './components/ThemeSwitcher';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
// 	title: 'Client and Server',
// 	description: 'Utilize Local Storage for Client and Supabase for Server'
// };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<main className="flex  flex-col items-center  justify-between p-28">
						{/* <ThemeSwitcher /> */}
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}

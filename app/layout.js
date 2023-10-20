import './globals.css';
import Providers from './providers';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<main className="flex  flex-col items-center  justify-between lg:p-28  p-10 lg:mt-0 mt-16">
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}

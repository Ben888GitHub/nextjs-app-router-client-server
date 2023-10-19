import './globals.css';
import Providers from './providers';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<main className="flex  flex-col items-center  justify-between p-28">
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}

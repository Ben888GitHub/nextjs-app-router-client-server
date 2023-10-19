import { Inter } from 'next/font/google';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

const pageTitle = 'Local Storage State';

export const metadata = {
	title: pageTitle,
	description: 'Utilize Local Storage for Client'
};

const LocalStorageLayout = ({ children }) => {
	return (
		<div className={inter.className}>
			<Header pageTitle={pageTitle} />
			{children}
		</div>
	);
};

export default LocalStorageLayout;

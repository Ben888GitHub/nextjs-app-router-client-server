import { Inter } from 'next/font/google';
import Header from '../components/Header';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: false,
	weight: '400',
	variable: '--font-inter'
});

const pageTitle = 'Local Storage State';

export const metadata = {
	title: pageTitle,
	description: 'Utilize Local Storage for Client'
};

const LocalStorageLayout = ({ children }) => (
	<div className={inter.className}>
		<Header pageTitle={pageTitle} />
		{children}
	</div>
);

export default LocalStorageLayout;

// * Reference
// * https://stackoverflow.com/questions/75970151/is-there-a-way-to-prevent-a-root-layout-component-from-being-shown-in-some-neste
// * https://nextjs.org/docs/app/building-your-application/routing/route-groups

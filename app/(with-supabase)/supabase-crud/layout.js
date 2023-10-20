import Header from '@/app/components/Header';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'], display: 'swap' });

const pageTitle = 'Supabase CRUD';

export const metadata = {
	title: pageTitle,
	description: 'Utilize Supabase Crud for Server'
};

const SupabaseLayout = ({ children }) => (
	<div className={ubuntu.className}>
		<Header pageTitle={pageTitle} />
		{children}
	</div>
);

export default SupabaseLayout;

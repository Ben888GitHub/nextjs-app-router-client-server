import Header from '@/app/components/Header';
// import { Ubuntu } from 'next/font/google';

// const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] });

const pageTitle = 'Supabase CRUD';

export const metadata = {
	title: pageTitle,
	description: 'Utilize Supabase Crud for Server'
};

const SupabaseLayout = ({ children }) => (
	<>
		<Header pageTitle={pageTitle} />
		{children}
	</>
);

export default SupabaseLayout;

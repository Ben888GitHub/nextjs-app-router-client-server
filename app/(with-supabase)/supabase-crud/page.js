import Article from '@/app/components/Article';

const articleData = {
	title: 'Supabase CRUD',
	fontFamily: 'Ubuntu',
	link: {
		url: '/',
		value: 'Local Storage State'
	}
};

const SupabaseCrud = () => {
	return (
		<>
			<Article {...articleData} />
		</>
	);
};

export default SupabaseCrud;

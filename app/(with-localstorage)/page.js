import Article from '../components/Article';

const articleData = {
	title: 'Local Storage State',
	fontFamily: 'Inter',
	link: {
		url: '/supabase-crud',
		value: 'View Supabase CRUD'
	}
};

export default function Home() {
	return (
		<>
			<Article {...articleData} />
		</>
	);
}

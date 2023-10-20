import dynamic from 'next/dynamic';
import Article from '../components/Article';
// import Posts from '../components/Posts';
const Posts = dynamic(() => import('../components/Posts'), {
	ssr: false,
	loading: () => <p className="text-lg">Loading Posts...</p>
});

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

			<Posts />
		</>
	);
}

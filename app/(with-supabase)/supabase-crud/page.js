import Article from '@/app/components/Article';
import Post from '@/app/components/Post';
import { supabaseClient } from '@/lib/utils';

const articleData = {
	title: 'Supabase CRUD',
	fontFamily: 'Ubuntu',
	link: {
		url: '/',
		value: 'Local Storage State'
	}
};

const SupabaseCrud = async () => {
	const { data, error } = await supabaseClient.from('posts').select('*');

	return (
		<>
			<Article {...articleData} />

			<div className="mt-7">
				{data && data.map((post) => <Post key={post.id} {...post} />)}
			</div>
		</>
	);
};

export default SupabaseCrud;

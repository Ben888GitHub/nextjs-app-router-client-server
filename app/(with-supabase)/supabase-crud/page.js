import Article from '@/app/components/Article';
import FormDialog from '@/app/components/FormDialog';
import Post from '@/app/components/Post';
import { supabaseClient } from '@/lib/utils';

export const revalidate = 0;

const articleData = {
	title: 'Supabase CRUD',
	fontFamily: 'Ubuntu',
	link: {
		url: '/',
		value: 'Local Storage State'
	}
};

const SupabaseCrud = async () => {
	const { data } = await supabaseClient.from('posts').select('*');

	// data && console.log(data);

	return (
		<>
			<Article {...articleData} />

			<FormDialog />

			<div className="mt-7">
				{data && data.map((post) => <Post key={post.id} {...post} />)}
			</div>
		</>
	);
};

export default SupabaseCrud;

import Article from '@/app/components/Article';
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

	// data && console.log(data);

	return (
		<>
			<Article {...articleData} />

			<div className="mt-7">
				{data.map(({ title, description, image, id }) => (
					<div
						key={id}
						className="text-center lg:max-w-2xl w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5"
					>
						<p className=" mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
							{title}
						</p>

						<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
							{description}
						</p>

						<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
							{image}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default SupabaseCrud;

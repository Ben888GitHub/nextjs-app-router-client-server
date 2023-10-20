const Post = ({
	id,
	title,
	description,
	handleDeletePost,
	pathname,
	image
}) => (
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
		{pathname === '/' ? (
			<button
				onClick={() => handleDeletePost(id)}
				type="button"
				className="text-white bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
			>
				DELETE
			</button>
		) : (
			<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
				{image}
			</p>
		)}
	</div>
);

export default Post;

'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { generate } from 'random-words';
import useLocalStorageState from 'use-local-storage-state';

const Posts = () => {
	const [posts, setPosts, { removeItem }] = useLocalStorageState('posts', {
		defaultValue: []
	});
	const [title, setTitle] = useState('');

	const handleAddPost = (e) => {
		e.preventDefault();
		setPosts((currentPosts) => [
			...currentPosts,
			{
				id: uuidv4(),
				title,
				description: generate({ exactly: 5, join: ' ' })
			}
		]);
		setTitle('');
	};

	const handleDeletePost = (id) => {
		setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id));
	};

	return (
		<div className="mt-7">
			<p className="text-3xl mb-3">Posts Data</p>

			<form className="mb-6" onSubmit={handleAddPost}>
				<div className="relative">
					<input
						type="search"
						id="default-search"
						className="block w-full p-4 pl-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Add new post"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
					<button
						type="submit"
						className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						ADD
					</button>
				</div>
			</form>
			{posts.map(({ id, title, description }) => (
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

					<button
						onClick={() => handleDeletePost(id)}
						type="button"
						className="text-white bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
					>
						DELETE
					</button>
				</div>
			))}
		</div>
	);
};

export default Posts;

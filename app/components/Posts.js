'use client';

import { useState, useMemo, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { generate } from 'random-words';
import useLocalStorageState from 'use-local-storage-state';
import SearchPosts from './SearchPosts';
import Post from './Post';

const Posts = () => {
	const [posts, setPosts] = useLocalStorageState('posts', {
		defaultValue: []
	});
	const [title, setTitle] = useState(''); // to add new title

	const [query, setQuery] = useState(''); // search query

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

	const filteredPosts = useMemo(() => {
		return posts.filter(({ title }) =>
			title.toLowerCase().includes(query.toLowerCase())
		);
	}, [query, posts]);

	return (
		<div className="mt-7">
			{/* <p className="text-3xl mb-3">Search Posts</p> */}
			<SearchPosts query={query} setQuery={setQuery} />

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
			{filteredPosts.map((filteredPost) => (
				<Fragment key={filteredPost.id}>
					<Post {...filteredPost} handleDeletePost={handleDeletePost} />
				</Fragment>
			))}
		</div>
	);
};

export default Posts;

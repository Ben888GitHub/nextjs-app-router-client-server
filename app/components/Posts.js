'use client';

import { useState, useMemo, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from 'use-local-storage-state';
import { generate } from 'random-words';
import SearchPosts from './SearchPosts';
import Post from './Post';
import AddNewPost from './AddNewPost';

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

			<AddNewPost
				title={title}
				setTitle={setTitle}
				handleAddPost={handleAddPost}
			/>
			{filteredPosts.map((filteredPost) => (
				<Fragment key={filteredPost.id}>
					<Post {...filteredPost} handleDeletePost={handleDeletePost} />
				</Fragment>
			))}
		</div>
	);
};

export default Posts;

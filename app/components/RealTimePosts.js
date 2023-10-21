'use client';
import { supabaseClient } from '@/lib/utils';
import { useEffect, useState, Fragment } from 'react';
import Post from './Post';

// * Reference https://www.youtube.com/watch?v=YR-xP6PPXXA

const RealTimePosts = ({ serverPosts }) => {
	const [posts, setPosts] = useState(serverPosts);

	// todo, use this as the id to delete item in real time
	const [idToDelete, setIdToDelete] = useState('');

	useEffect(() => {
		// console.log(serverPosts);
		const channel = supabaseClient
			.channel('*')
			.on(
				'postgres_changes',
				{ event: '*', schema: 'public', table: 'posts' },
				(payload) => {
					console.log('Change received!', payload);
					// console.log(serverPosts);
					if (idToDelete) {
						setPosts((currentPosts) =>
							currentPosts.filter(({ id }) => id !== idToDelete)
						);
						setIdToDelete('');
					} else {
						setPosts((currentPosts) => [...currentPosts, payload.new]);
					}
				}
			)
			.subscribe();

		return () => {
			supabaseClient.removeChannel(channel);
		};
	}, [serverPosts, idToDelete]);

	const handleDeletePost = async (id) => {
		// setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id));
		setIdToDelete(id);
		const { error } = await supabaseClient.from('posts').delete().eq('id', id);

		if (error) {
			console.log(error);
		} else {
			console.log('successfully deleted');
		}
	};

	return (
		<>
			{/* {serverPosts &&
				serverPosts.map((post) => <Post key={post.id} {...post} />)} */}
			{posts &&
				posts.map((post) => (
					<Fragment key={post.id}>
						<Post {...post} handleDeletePost={handleDeletePost} />
					</Fragment>
				))}
			{/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
		</>
	);
};

export default RealTimePosts;

'use client';
import { supabaseClient } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Post from './Post';

const RealTimePosts = ({ serverPosts }) => {
	const [posts, setPosts] = useState(serverPosts);

	useEffect(() => {
		setPosts(serverPosts);
	}, [serverPosts]);

	useEffect(() => {
		// console.log(serverPosts);
		const channel = supabaseClient
			.channel('*')
			.on(
				'postgres_changes',
				{ event: '*', schema: 'public', table: 'posts' },
				(payload) => {
					// console.log('Change received!', payload);
					// console.log(serverPosts);
					setPosts((currentPosts) => [...currentPosts, payload.new]);
				}
			)
			.subscribe();

		return () => {
			supabaseClient.removeChannel(channel);
		};
	}, [serverPosts]);

	return (
		<>
			{posts && posts.map((post) => <Post key={post.id} {...post} />)}
			{/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
		</>
	);
};

export default RealTimePosts;

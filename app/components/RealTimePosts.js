'use client';
import { supabaseClient } from '@/lib/utils';
import { useEffect, useState, Fragment } from 'react';
import Post from './Post';

// * Reference https://www.youtube.com/watch?v=YR-xP6PPXXA

const RealTimePosts = ({ serverPosts }) => {
	const [posts, setPosts] = useState(serverPosts);

	const [idToDelete, setIdToDelete] = useState('');

	const [isDeleting, setIsDeleting] = useState(false);

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
		setIsDeleting(true);
		setIdToDelete(id);

		const { error } = await supabaseClient.from('posts').delete().eq('id', id);

		if (error) {
			console.log(error);
		} else {
			console.log('successfully deleted');
		}
		setIsDeleting(false);
	};

	return (
		<>
			{/* {serverPosts &&
				serverPosts.map((post) => <Post key={post.id} {...post} />)} */}
			{posts &&
				posts.map((post) => (
					<Fragment key={post.id}>
						<Post
							{...post}
							handleDeletePost={handleDeletePost}
							isDeleting={isDeleting}
							idToDelete={idToDelete}
						/>
					</Fragment>
				))}
			{/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
		</>
	);
};

export default RealTimePosts;

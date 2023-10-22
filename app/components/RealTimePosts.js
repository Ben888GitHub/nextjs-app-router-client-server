'use client';
import { supabaseClient } from '@/lib/utils';
import { useEffect, useState, Fragment } from 'react';
import Post from './Post';
import { useRouter } from 'next/navigation';

// * Reference https://www.youtube.com/watch?v=YR-xP6PPXXA

const RealTimePosts = ({ serverPosts }) => {
	const [posts, setPosts] = useState(serverPosts);

	const [idToDelete, setIdToDelete] = useState('');

	const [isDeleting, setIsDeleting] = useState(false);

	const router = useRouter();

	useEffect(() => {
		const channel = supabaseClient
			.channel('*')
			.on(
				'postgres_changes',
				{
					event: '*',
					schema: 'public',
					table: 'posts'
				},
				(payload) => {
					// console.log('Change received!', payload);
					if (payload.eventType === 'DELETE') {
						console.log('delete in posts');
						setPosts((currentPosts) =>
							currentPosts.filter(({ id }) => id !== payload.old.id)
						);
						setIdToDelete('');
						router.refresh();
					} else {
						setPosts((currentPosts) => [...currentPosts, payload.new]);
						// console.log('new post added realtime');
						router.refresh();
					}
				}
			)
			.subscribe();

		return () => {
			supabaseClient.removeChannel(channel);
		};
	}, [serverPosts]);

	const handleDeletePost = async (id) => {
		// setPosts((currentPosts) => currentPosts.filter((post) => post.id !== id));
		setIsDeleting(true);
		setIdToDelete(id);

		const { error } = await supabaseClient.from('posts').delete().eq('id', id);

		if (error) {
			console.log(error);
		} else {
			console.log('successfully deleted');
			setIsDeleting(false);
			// router.refresh()
		}
	};

	return (
		<>
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
		</>
	);
};

export default RealTimePosts;

'use client';

import { supabaseClient } from '@/lib/utils';
import Post from './Post';
import { useEffect, useState, Fragment } from 'react';
import { useRouter, usePathname, redirect } from 'next/navigation';

const RealTimePost = ({ serverPost }) => {
	const router = useRouter();

	const [post, setPost] = useState(serverPost);

	const [idToDelete, setIdToDelete] = useState('');

	const [isDeleting, setIsDeleting] = useState(false);

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
					if (payload.eventType === 'DELETE') {
						console.log('delete...');
						setPost((currentPost) =>
							currentPost.filter(({ id }) => id !== payload.old.id)
						);
						setIdToDelete('');
					}
				}
			)
			.subscribe();
		return () => {
			supabaseClient.removeChannel(channel);
		};
	}, [serverPost]);

	const handleDeletePost = async (id) => {
		setIsDeleting(true);
		setIdToDelete(id);

		const { error } = await supabaseClient.from('posts').delete().eq('id', id);

		if (error) {
			console.log(error);
		} else {
			console.log('successfully deleted');
			setIsDeleting(false);
			router.push('/supabase-crud');
			// todo, should i use router.refresh()
		}
	};

	return (
		<>
			{post &&
				post.map((post) => (
					<Post
						key={post.id}
						{...post}
						handleDeletePost={handleDeletePost}
						isDeleting={isDeleting}
						idToDelete={idToDelete}
					/>
				))}
		</>
	);
};

export default RealTimePost;

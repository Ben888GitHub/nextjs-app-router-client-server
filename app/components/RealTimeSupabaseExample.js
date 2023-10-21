'use client';
import { supabaseClient } from '@/lib/utils';
import { useEffect, useState } from 'react';

const RealTimeSupabaseExample = ({ serverPosts }) => {
	const [posts, setPosts] = useState(serverPosts);

	const [idToDelete, setIdToDelete] = useState('');

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
						setPosts((currentPosts) =>
							currentPosts.filter(({ id }) => id !== payload.old.id)
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
	}, [serverPosts]);

	return <div>RealTimeSupabaseExample</div>;
};

export default RealTimeSupabaseExample;

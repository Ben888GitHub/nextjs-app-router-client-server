// Post
import Post from '@/app/components/Post';
import { supabaseClient } from '@/lib/utils';

import RealTimePost from '@/app/components/RealTimePost';

export const revalidate = 0;

// * Note: you should always do this SSR export const revalidate = 0;) if this page can be updated over time

const SingleDynamicPost = async ({ params: { postId } }) => {
	// console.log(params);

	const { data } = await supabaseClient.from('posts').select().eq('id', postId);

	// data && console.log(data);

	return (
		<>
			{/* <RealTimePost serverPost={data} /> */}
			{data &&
				data.map((post) => (
					<Post
						key={post.id}
						{...post}
						// handleDeletePost={handleDeletePost}
						// isDeleting={isDeleting}
						// idToDelete={idToDelete}
					/>
				))}
		</>
	);
};

export default SingleDynamicPost;

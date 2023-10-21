import { createClient } from '@supabase/supabase-js';
import { Ubuntu } from 'next/font/google';

export const supabaseClient = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const ubuntu = Ubuntu({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	preload: false,
	variable: '--font-ubuntu'
});

// * References:

// * Just Create Table for CRUD without doing much in SQL Editor
// * https://www.youtube.com/watch?v=4yVSwHO5QHU
// * https://medium.com/@heshramsis/building-a-crud-app-with-supabase-and-express-a-step-by-step-guide-for-junior-developers-81456b850910
// * https://www.blackslate.io/articles/build-curd-react-app-with-supabase
// * https://blog.openreplay.com/build-an-app-with-react-and-supabase/
// * https://www.linode.com/docs/guides/create-next-js-app-supabase/
// * https://www.youtube.com/watch?v=Ewa3D-DoS5I

// * Dashboard: https://supabase.com/dashboard/project/wtxqgfupgfqhfygbttzt

// * Basic Supabase Implementation with NextJS
// * https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
// * https://supabase.com/blog/fetching-and-caching-supabase-data-in-next-js-server-components#realtime
// * https://medium.com/@danielcracbusiness/building-dynamic-applications-with-next-js-13-and-supabase-getting-started-baeb3b584a97
// * Realtime: https://www.youtube.com/watch?v=YR-xP6PPXXA
// * Realtime: https://www.youtube.com/watch?v=6Sb8R1PYhTY
//

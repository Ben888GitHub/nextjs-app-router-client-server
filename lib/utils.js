import { createClient } from '@supabase/supabase-js';

export const supabaseClient = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// * References:

// * Just Create Table for CRUD without doing much in SQL Editor
// * https://www.youtube.com/watch?v=4yVSwHO5QHU
// * https://medium.com/@heshramsis/building-a-crud-app-with-supabase-and-express-a-step-by-step-guide-for-junior-developers-81456b850910
// * https://www.blackslate.io/articles/build-curd-react-app-with-supabase
// * https://blog.openreplay.com/build-an-app-with-react-and-supabase/
// * https://www.linode.com/docs/guides/create-next-js-app-supabase/
// * https://www.youtube.com/watch?v=Ewa3D-DoS5I

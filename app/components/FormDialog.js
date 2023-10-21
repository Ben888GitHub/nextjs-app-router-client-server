'use client';
import { useRef, useState } from 'react';
// import FormModal from './FormModal';
import dynamic from 'next/dynamic';

const FormModal = dynamic(() => import('./FormModal'), {
	ssr: false
});

const FormDialog = () => {
	const [open, setOpen] = useState(false);

	const cancelButtonRef = useRef(null);

	return (
		<div className="mt-3 pb-6">
			<button
				onClick={() => setOpen(true)}
				type="button"
				className="text-white text-base absolute  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Add Post
			</button>

			<FormModal
				open={open}
				setOpen={setOpen}
				cancelButtonRef={cancelButtonRef}
			/>
		</div>
	);
};

export default FormDialog;

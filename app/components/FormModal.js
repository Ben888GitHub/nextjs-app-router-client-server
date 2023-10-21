// 'use client';

import { supabaseClient, ubuntu } from '@/lib/utils';
import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { generate } from 'random-words';
import { useRouter } from 'next/navigation';

const FormModal = ({ open, setOpen, cancelButtonRef }) => {
	const [postTitle, setPostTitle] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleAddPost = async () => {
		setLoading(true);

		const { data, error } = await supabaseClient.from('posts').insert({
			title: postTitle,
			description: generate({ exactly: 5, join: ' ' }),
			image: generate({ minLength: 2 })
		});

		if (error) {
			console.log(error);
		} else {
			console.log(data);
			setOpen(false);
			setPostTitle('');
		}
		setLoading(false);
		// router.refresh();
	};

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className={`relative z-10 ${ubuntu.className}`}
				initialFocus={cancelButtonRef}
				onClose={setOpen}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg dark:bg-gray-700 bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								<div className="bg-white dark:bg-gray-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="mt-1  sm:ml-4 sm:mt-0 sm:text-left ">
											<Dialog.Title
												as="h1"
												className="lg:text-3xl text-2xl font-semibold leading-6 dark:text-white text-gray-900"
											>
												Add new post
											</Dialog.Title>
											<div className="mt-5 lg:w-96 w-80">
												<input
													type="text"
													name="title"
													id="title"
													className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
													placeholder="Post title, minimum 7 letters"
													required
													value={postTitle}
													onChange={(e) => setPostTitle(e.target.value)}
												/>
											</div>
										</div>
									</div>
								</div>

								<div className="lg:ml-7 m-5 lg:m-0 lg:mb-5 lg:mt-6">
									<button
										type="button"
										className=" w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-lg font-semibold text-white  shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
										disabled={postTitle.length < 7 || loading}
										onClick={handleAddPost}
									>
										{loading ? 'Uploading...' : 'ADD NEW POST'}
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default FormModal;

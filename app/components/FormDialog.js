'use client';

import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

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

			<Modal open={open} setOpen={setOpen} cancelButtonRef={cancelButtonRef} />
		</div>
	);
};

export default FormDialog;

const Modal = ({ open, setOpen, cancelButtonRef }) => {
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
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
										<div className="mt-1  sm:ml-4 sm:mt-0 sm:text-left">
											<Dialog.Title
												as="h1"
												className="lg:text-3xl text-2xl font-semibold leading-6 dark:text-white text-gray-900"
											>
												Add new post
											</Dialog.Title>
											<div className="mt-5 w-96">
												<input
													type="text"
													name="title"
													id="title"
													className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
													placeholder="Post title"
													required
												/>
											</div>
										</div>
									</div>
								</div>

								<div className="lg:ml-7 m-5 lg:m-0 lg:mb-5 lg:mt-6">
									<button
										type="button"
										className=" w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-lg font-semibold text-white  shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
										onClick={() => setOpen(false)}
									>
										ADD NEW POST
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

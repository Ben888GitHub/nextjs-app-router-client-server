import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ pageTitle }) => (
	<nav className="bg-slate-100 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
		<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
			<div className="flex items-center">
				<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
					{pageTitle}
				</span>
			</div>
			<ThemeSwitcher />
		</div>
	</nav>
);

export default Header;

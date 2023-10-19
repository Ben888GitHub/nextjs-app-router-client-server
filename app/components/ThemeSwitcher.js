'use client';

import { useTheme } from 'next-themes';

import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div>
			The current theme is: {resolvedTheme}
			<br />
			<button onClick={() => setTheme('light')}>Light Mode</button>
			<br />
			<button onClick={() => setTheme('dark')}>Dark Mode</button>
		</div>
	);
};

export default ThemeSwitcher;

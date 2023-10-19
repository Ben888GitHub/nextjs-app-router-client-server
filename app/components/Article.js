import Link from 'next/link';

const Article = ({ title, fontFamily, link }) => (
	<>
		<p className="lg:text-3xl text-2xl mb-3 w-full">{title}</p>
		<p className="lg:text-2xl text-xl mb-3">Font Family: {fontFamily}</p>
		<Link href={link.url} className="underline">
			{link.value}
		</Link>
	</>
);

export default Article;

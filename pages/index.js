import Head from "next/head";
import ImageBanner from "../components/imagebanner";

const imagesProps = {
	backgroundImage: "/images/otherImages/2560-9addad5b18.jpg",
};

export default function Home() {
	return (
		<>
			<Head>
				<title>realme | United Kingdom</title>
				<link rel="icon" href="/images/Realme-Logo.jpg" />
			</Head>

			<main></main>

			<ImageBanner data={imagesProps} />
		</>
	);
}

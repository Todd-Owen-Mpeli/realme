import Head from "next/head";
import FourProductDisplayGrid from "../components/FourProductDisplayGrid";
import ImageBanner from "../components/imagebanner";
import TwoImageDisplay from "../components/TwoImageDisplay";
import accessoriesProducts from "../lib/products";

const imagesProps = {
	backgroundImage: "/images/otherImages/2560-9addad5b18.jpg",
};

const activities = {
	title: "Activities",
	imageOne: "/images/otherImages/1626084421161.jpg",
	imageTwo: "/images/otherImages/1603864728292.jpg",
	pageLinkOne: "www.facebook.com",
	pageLinkTwo: "www.facebook.com",
};

export default function Home() {
	return (
		<>
			<Head>
				<title>realme | United Kingdom</title>
				<link rel="icon" href="/images/Realme-Logo.jpg" />
			</Head>

			<main>
				<FourProductDisplayGrid data={accessoriesProducts} />

				<TwoImageDisplay data={activities} />

				<ImageBanner data={imagesProps} />
			</main>
		</>
	);
}

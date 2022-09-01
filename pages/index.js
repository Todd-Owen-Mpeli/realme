import Head from "next/head";
import ImageBanner from "../components/imagebanner";
import TwoImageDisplay from "../components/TwoImageDisplay";

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

			<main>
				<TwoImageDisplay data={activities} />

				<ImageBanner data={imagesProps} />
			</main>
		</>
	);
}

const activities = {
	title: "Activities",
	imageOne: "/images/otherImages/1626084421161.jpg",
	imageTwo: "/images/otherImages/1603864728292.jpg",
	pageLinkOne: "www.facebook.com",
	pageLinkTwo: "www.facebook.com",
};

import Head from "next/head";
import {getTitleAndTwoImages} from "../lib/api";
import FourProductDisplayGrid from "../components/FourProductDisplayGrid";
import Hero from "../components/hero";
import ImageBanner from "../components/ImageBanner";
import LimitTimeProductDisplayGrid from "../components/LimitTimeProductDisplayGrid";
import LinksAndProducts from "../components/LinksAndProducts";
import TwoImageDisplay from "../components/TwoImageDisplay";
import {
	heroSection,
	otherProducts,
	accessoriesProducts,
	smartPhonesProducts,
	limitTimeProducts,
} from "../lib/products";

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

const smartPhonesProductsLinks = [
	{
		id: "1",
		link: "www.realme.co.uk",
		title: "New Launches",
	},
	{
		id: "2",
		link: "www.realme.co.uk",
		title: "Best Sellers",
	},
];

const accessoriesProductsLinks = [
	{
		id: "1",
		link: "www.realme.co.uk",
		title: "Smart Life",
	},
	{
		id: "2",
		link: "www.realme.co.uk",
		title: "Other",
	},
];

export default function Home({titleAndTwoImagesContent}) {
	// console.log(titleAndTwoImagesContent);

	return (
		<>
			<Head>
				<title>realme | United Kingdom</title>
				<link rel="icon" href="/images/Realme-Logo.jpg" />
			</Head>

			<main className="container mx-auto bg-[#fafafa]">
				{/* Hero Section */}
				<Hero data={heroSection}></Hero>

				{/*Time Limit */}
				<LimitTimeProductDisplayGrid
					title="Gone in Flash"
					data={limitTimeProducts}
				/>
				{/* Smartphones Section */}
				<LinksAndProducts
					title="SmartPhones"
					links={smartPhonesProductsLinks}
					data={smartPhonesProducts}
					viewMoreLink="www.realme.co.uk"
				/>

				{/* Accessories */}
				<LinksAndProducts
					title="Accessories"
					links={accessoriesProductsLinks}
					data={accessoriesProducts}
					viewMoreLink="www.realme.co.uk"
				/>

				{/* Other Products Display */}
				<FourProductDisplayGrid data={otherProducts} />

				{/* Activities */}
				<TwoImageDisplay data={titleAndTwoImagesContent} />

				{/* Image Banner */}
				<ImageBanner data={imagesProps} />
			</main>
		</>
	);
}

export async function getStaticProps() {
	const titleAndTwoImagesContent = await getTitleAndTwoImages();

	return {
		props: {titleAndTwoImagesContent: titleAndTwoImagesContent},
	};
}

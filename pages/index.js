import Head from "next/head";
import FourProductDisplayGrid from "../components/FourProductDisplayGrid";
import ImageBanner from "../components/ImageBanner";
import LinksAndProducts from "../components/LinksAndProducts";
import TwoImageDisplay from "../components/TwoImageDisplay";
import {
	otherProducts,
	accessoriesProducts,
	smartPhonesProducts,
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

export default function Home() {
	return (
		<>
			<Head>
				<title>realme | United Kingdom</title>
				<link rel="icon" href="/images/Realme-Logo.jpg" />
			</Head>

			<main className="container mx-auto bg-[#fafafa]">
				<LinksAndProducts
					title="SmartPhones"
					links={smartPhonesProductsLinks}
					data={smartPhonesProducts}
					viewMoreLink="www.realme.co.uk"
				/>

				<LinksAndProducts
					title="Accessories"
					links={accessoriesProductsLinks}
					data={accessoriesProducts}
					viewMoreLink="www.realme.co.uk"
				/>

				<FourProductDisplayGrid data={otherProducts} />

				<TwoImageDisplay data={activities} />

				<ImageBanner data={imagesProps} />
			</main>
		</>
	);
}

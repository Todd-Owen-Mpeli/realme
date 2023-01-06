import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";

// Components
import Hero from "../components/hero";
import ImageBanner from "../components/ImageBanner";
import TwoImageDisplay from "../components/TwoImageDisplay";
import LinksAndProducts from "../components/LinksAndProducts";
import FourProductDisplayGrid from "../components/FourProductDisplayGrid";
import LimitTimeProductDisplayGrid from "../components/LimitTimeProductDisplayGrid";
import {
	heroSection,
	otherProducts,
	accessoriesProducts,
	smartPhonesProducts,
	limitTimeProducts,
} from "../lib/products";

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

export default function Home({pageTitle, homePageContent}) {
	return (
		<>
			<Head>
				<title>{pageTitle} | United Kingdom</title>
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
				<TwoImageDisplay
					title={homePageContent?.titleAndTwoImages?.title}
					imageOne={homePageContent?.titleAndTwoImages?.imageOne}
					imageOneLink={homePageContent?.titleAndTwoImages?.imageOneLink}
					imageTwo={homePageContent?.titleAndTwoImages?.imageTwo}
					imageTwoLink={homePageContent?.titleAndTwoImages?.imageTwoLink}
				/>
			</main>

			{/* Image Banner */}
			<ImageBanner
				title={homePageContent?.imageBanner?.title}
				buttonLink={homePageContent?.imageBanner?.buttonLink}
				backgroundImage={
					homePageContent?.imageBanner?.backgroundImage?.sourceUrl
				}
			/>
		</>
	);
}

export async function getStaticProps() {
	const getHomePageContent = gql`
		{
			mainContent: pages(where: {id: 16}) {
				edges {
					node {
						title
						homePage {
							imageBanner {
								title
								buttonLink {
									url
									title
									target
								}
								backgroundImage {
									sourceUrl
								}
							}
							titleAndTwoImages {
								title
								imageOne {
									sourceUrl(size: LARGE)
									altText
									mediaDetails {
										height
										width
									}
								}
								imageOneLink {
									url
									target
								}
								imageTwo {
									sourceUrl(size: LARGE)
									altText
									mediaDetails {
										height
										width
									}
								}
								imageTwoLink {
									url
									target
								}
							}
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getHomePageContent,
	});
	return {
		props: {
			pageTitle: response?.data?.mainContent?.edges[0]?.node?.title,
			homePageContent: response?.data?.mainContent?.edges[0]?.node?.homePage,
		},
		revalidate: 1,
	};
}

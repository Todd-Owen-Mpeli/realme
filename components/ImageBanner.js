import Link from "next/link";

const ImageBanner = (props) => {
	const backgroundImage = "/images/otherImages/2560-9addad5b18.jpg";
	console.log(props.data.backgroundImage);

	const backgroundImageProperties = {
		backgroundImage: `url('${backgroundImage}')`,
	};
	const buttonText = "Learn More";
	const buttonLink = "https://www.realme.com/uk/brand";

	return (
		<>
			<div
				className="w-full h-[500px] flex flex-col justify-center items-center"
				style={backgroundImageProperties}
			>
				<div className="flex flex-col text-white justify-center items-center">
					<h2 className=" text-4xl">
						<strong>Dare to leap</strong>
					</h2>
					<button className="py-2 px-10 mt-10 border-[1px] border-solid border-white hover:bg-white hover:text-black">
						<Link href={buttonLink} target="blank">
							<a>{buttonText}</a>
						</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default ImageBanner;

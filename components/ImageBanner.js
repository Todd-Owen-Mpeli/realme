import Link from "next/link";
import styles from "/styles/Home.module.scss";

const ImageBanner = (props) => {
	const backgroundImageProperties = {
		backgroundImage: `url('${props.data.backgroundImage}')`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};

	const buttonText = "Learn More";
	const buttonLink = "https://www.realme.com/uk/brand";

	return (
		<>
			<div
				className="w-full h-[350px] flex flex-col justify-center items-center"
				style={backgroundImageProperties}
			>
				<div className={styles.ImageBanner}>
					<div className="flex flex-col text-white justify-center items-center">
						<h2 className="text-4xl">
							<strong>Dare to leap</strong>
						</h2>
						<button className="flex flex-col justify-center items-center py-2 px-10 mt-10 mx-auto border-[1px] border-solid border-white hover:bg-white hover:text-black">
							<Link href={buttonLink} target="blank">
								<a>{buttonText}</a>
							</Link>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ImageBanner;

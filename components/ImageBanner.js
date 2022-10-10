import Link from "next/link";
import styles from "/styles/Home.module.scss";

const ImageBanner = (props) => {
	const title = props.data.title;
	const buttonText = props.data.buttonLink?.title;
	const buttonLink = props.data.buttonLink?.url;
	const backgroundImageProperties = {
		backgroundImage: `url('${props.data.image?.sourceUrl}')`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};

	return (
		<>
			<div
				className="w-full h-[350px] flex flex-col justify-center items-center"
				style={backgroundImageProperties}
			>
				<div className={styles.ImageBanner}>
					<div className="flex flex-col text-white justify-center items-center">
						<h2 className="text-4xl">
							<strong>{title}</strong>
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

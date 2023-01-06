import Link from "next/link";
import styles from "/styles/Home.module.scss";

const ImageBanner = (props) => {
	/* Check if Button content is null And Allows 
	the user to display or not Display the Button */
	function isButtonContent(isButtonContent) {
		let displayButtonOption;
		const styling =
			"flex flex-col justify-center items-center py-2 px-10 mt-10 mx-auto border-[1px] border-solid border-white hover:bg-white hover:text-black hover:ease-in-out hover:duration-[0.5s]";
		if (isButtonContent === null) {
			displayButtonOption = `hidden ${styling}`;
		} else {
			displayButtonOption = `block ${styling}`;
		}
		return displayButtonOption;
	}

	return (
		<section
			className="w-full h-[350px] flex flex-col justify-center items-center bg-cover bg-center bg-[no-repeat]"
			style={{
				backgroundImage: `url(${props.backgroundImage}`,
			}}
		>
			<div className={styles.ImageBanner}>
				<div className="flex flex-col text-white justify-center items-center">
					<h2 className="text-2xl md:text-4xl">
						<strong>{props?.title}</strong>
					</h2>
					<button className={isButtonContent(props?.buttonLink?.url)}>
						<Link
							href={`${props?.buttonLink?.url}`}
							className="text-white"
							target={`${props?.buttonLink?.target}`}
						>
							{props?.buttonLink?.title}
						</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default ImageBanner;

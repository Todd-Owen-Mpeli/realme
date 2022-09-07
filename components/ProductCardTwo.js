import Link from "next/link";
import styles from "/styles/Home.module.scss";

const ProductCardTwo = (props) => {
	const backgroundImageProps = {
		backgroundImage: props.backgroundImage
			? `url('${props.backgroundImage}')`
			: "background-image: none",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};

	/* Removes the Product Image 
    if there is a background Image value*/
	const displayProductImage = {
		display: props.backgroundImage ? "hidden" : "flex",
		margin: "0px auto",
	};

	/* Displays the "NEW" Product symbol Div 
    iF props.isNewProduct returns true*/
	console.log(props.isNewProduct);
	const displayNewSymbol = props.isNewProduct ? "flex" : "hidden";

	return (
		<>
			<div className={styles.productCardTwo} style={{...backgroundImageProps}}>
				<div className="relative flex flex-col min-h-[20rem] justify-center items-start">
					<div className={displayNewSymbol}>
						<div className="absolute top-[25px]">
							<div className="bg-limeGreen p-1 ">
								<h3 className="uppercase text-white text-xs">New</h3>
							</div>
						</div>
					</div>
					<div className="flex p-6 w-full justify-center items-center">
						<div className="w-1/2 h-1/2 flex flex-col text-start justify-center">
							<h2 className="text-2xl">{props.title}</h2>
							<h3 className="mt-2">{props.subtitle}</h3>
							<h4 className="text-pinkRed mt-4 font-semibold">
								£{props.price}
							</h4>
						</div>
						<div className="w-1/2 h-1/2 mb-4 flex flex-col justify-center">
							<Link href={props.link}>
								<a target="blank">
									<img
										className={displayProductImage.display}
										style={{...displayProductImage}}
										src={props.productImage}
										alt={props.title}
										width="200px"
										height="200px"
									/>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCardTwo;

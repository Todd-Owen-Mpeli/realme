import Link from "next/link";
import styles from "/styles/Home.module.scss";

const ProductCardTwo = (props) => {
	const backgroundImage = props.backgroundImage
		? `background-image: url('${props.backgroundImage}');`
		: "background-image: none;";

	const displayNewSymbol = props.isNewProduct ? "flex" : "hidden";

	return (
		<>
			<div className={styles.productCard} style={backgroundImage}>
				<div className="flex flex-col">
					<div className={displayNewSymbol}>
						<div className="bg-limeGreen p-2 mt-5">
							<h3 className="uppercase">New</h3>
						</div>
					</div>
					<div className="p-6 h-full flex bg-white justify-between items-center">
						<div className="h-1/2 flex flex-col text-start">
							<h2 className="font-semibold">{props.title}</h2>
							<h3 className="mt-2">{props.subtitle}</h3>
							<h4 className="text-pinkRed mt-4 font-semibold">
								£{props.price}
							</h4>
						</div>
						<div className="h-1/2 mb-4">
							<Link href={props.link}>
								<a target="blank">
									<img
										src={props.productImage}
										alt={props.title}
										width="100%"
										height="100px"
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

import Link from "next/link";
import styles from "/styles/Home.module.scss";

const ProductCard = (props) => {
	return (
		<>
			<div className={styles.productCard}>
				<div className="p-6 h-full flex flex-col bg-white justify-between items-center">
					<div className="h-1/2 mb-4">
						<Link href={props.link}>
							<a target="blank">
								<img
									src={props.image}
									alt={props.title}
									width="100%"
									height="100px"
								/>
							</a>
						</Link>
					</div>
					<div className="h-1/2 flex flex-col text-center">
						<h2 className="font-semibold">{props.title}</h2>
						<h3 className="mt-2">{props.subtitle}</h3>
						<h4 className="text-pinkRed mt-4 font-semibold">£{props.price}</h4>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductCard;

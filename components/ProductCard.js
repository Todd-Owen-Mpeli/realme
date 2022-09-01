import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";

const ProductCard = (props) => {
	const image = `/productImages/${props.image}`;
	return (
		<div>
			<Link href="/store">
				<a target="blank">
					<Image
						src={image}
						alt={props.productName}
						width={400}
						height={400}
						layout="responsive"
						objectFit="cover"
					/>
				</a>
			</Link>
			<div className={styles.description}>
				<div className={styles.topSection}>
					<Link href="/store">
						<a target="blank">{props.productName}</a>
					</Link>

					<h2 className={styles.price}>£{props.pricing}</h2>
				</div>
				<Link href="/store">
					<a className={styles.productCategory}>{props.productCategory}</a>
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;

import Link from "next/link";
import ProductCardTwo from "./ProductCardTwo";
import styles from "/styles/Home.module.scss";

const LinksAndProducts = (props) => {
	return (
		<>
			<div className={styles.linksAndProducts}>
				<div className="content">
					<div className={styles.linksSection}>
						<div className="flex justify-between items-center">
							<div className="flex justify-between">
								<h3 className="capitalize">Accessories</h3>
								<Link href={props.pageLinksOne}>
									<a target="blank" className="flex">
										Smart Life
									</a>
								</Link>
								<Link href={props.pageLinksTwo}>
									<a target="blank" className="flex">
										Other
									</a>
								</Link>
							</div>
							<div>
								<Link href={props.viewMoreLinks}>
									<a target="blank" className="flex">
										View More <span>Image Icon</span>
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className={styles.productSection}>
						<div className="grid gap-4 grid-cols-2 grid-row-3">
							{props.data.map((keys) => (
								<ProductCardTwo
									key={keys.id}
									link={keys.link}
									price={keys.price}
									title={keys.title}
									subtitle={keys.subtitle}
									newProduct={keys.isNewProduct}
									productImage={keys.productImage}
									backgroundImage={keys.backgroundImage}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LinksAndProducts;

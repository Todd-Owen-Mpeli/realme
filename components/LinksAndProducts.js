import Link from "next/link";
import ProductCardTwo from "./ProductCardTwo";
import styles from "/styles/Home.module.scss";

const LinksAndProducts = (props) => {
	const pageLinksOne = "www.realme.co.uk"; // propss.data.pageLinksOne;
	const pageLinksTwo = "www.realme.co.uk"; // propss.data.pageLinksTwo;
	const viewMoreLinks = "www.realme.co.uk"; // propss.data.viewMoreLinks;

	return (
		<>
			<div className={styles.linksAndProducts}>
				<div className="content p-4 md:p-8">
					<div className={styles.linksSection}>
						<div className="flex pb-4 justify-between items-center">
							<div className="flex gap-3 justify-between items-center">
								<h3 className="capitalize font-semibold mr-6">Accessories</h3>
								<Link href={pageLinksOne}>
									<a target="blank" className="flex hover:text-yellow">
										Smart Life
									</a>
								</Link>
								<Link href={pageLinksTwo}>
									<a target="blank" className="flex hover:text-yellow">
										Other
									</a>
								</Link>
							</div>
							<div>
								<Link href={viewMoreLinks}>
									<a target="blank" className="flex hover:text-yellow">
										View More <span className="ml-2">Image Icon</span>
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className={styles.productSection}>
						<div className="grid gap-4 grid-cols-1 grid-row-1 md:grid-cols-2 md:grid-row-2">
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

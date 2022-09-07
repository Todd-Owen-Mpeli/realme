import Link from "next/link";
import ProductCardTwo from "./ProductCardTwo";
import styles from "/styles/Home.module.scss";

const LinksAndProducts = (props) => {
	const [pageLinksOne, pageLinksTwo] = props.links;
	const viewMoreLinks = props.viewMoreLink;
	const title = props.title;

	return (
		<>
			<div className={styles.linksAndProducts}>
				<div className="content p-4 md:p-8">
					<div className={styles.linksSection}>
						<div className="flex flex-col sm:flex-row pb-4 justify-between items-start sm:items-center">
							<div className="flex gap-3 justify-between items-center">
								<h3 className="capitalize font-semibold mr-6 text-2xl">
									{title}
								</h3>
								<Link href={pageLinksOne.link}>
									<a target="blank" className="flex hover:text-yellow">
										{pageLinksOne.title}
									</a>
								</Link>
								<Link href={pageLinksTwo.link}>
									<a target="blank" className="flex hover:text-yellow">
										{pageLinksTwo.title}
									</a>
								</Link>
							</div>
							<div>
								<Link href={viewMoreLinks}>
									<a
										target="blank"
										className="flex text-grey text-sm hover:text-yellow"
									>
										View More{" "}
										<span className="ml-2 my-auto">
											<img
												src="/svg/viewMoreNextArrow.svg"
												width={14}
												height={14}
											></img>
										</span>
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
									isNewProduct={keys.isNewProduct}
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

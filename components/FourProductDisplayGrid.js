import ProductCard from "./productCard";
import styles from "/styles/Home.module.scss";

const FourProductDisplayGrid = (props) => {
	return (
		<>
			<div className={styles.fourProductDisplayGrid}>
				<div className="container mx-auto p-4 lg:py-10">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
						<ul className="flex flex-col">
							{props.data.map((keys) => (
								<li>
									<ProductCard
										key={keys.id}
										link={keys.link}
										image={keys.image}
										title={keys.title}
										subtitle={keys.subtitle}
										price={keys.price}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default FourProductDisplayGrid;

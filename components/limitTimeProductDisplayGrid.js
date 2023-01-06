import LimitTimeProductCard from "./LimitTimeProductCard";
import styles from "/styles/Home.module.scss";

const LimitTimeProductDisplayGrid = (props) => {
	return (
		<>
			<div className={styles.limitTimeProductDisplayGrid}>
				<div className="container mx-auto p-4 lg:p-5">
					<div className={styles.title}>
						<h3 className="capitalize font-semibold mb-4 text-2xl">
							{props.title}
						</h3>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						{props.data.map((keys) => (
							<LimitTimeProductCard
								key={keys.id}
								link={keys.link}
								image={keys.image}
								title={keys.title}
								price={keys.price}
								subtitle={keys.subtitle}
								discountPrice={keys.discountPrice}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default LimitTimeProductDisplayGrid;

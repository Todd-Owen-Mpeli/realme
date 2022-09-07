import LimitTimeProductCard from "./LimitTimeProductCard";
import styles from "/styles/Home.module.scss";

const limitTimeProductDisplayGrid = (props) => {
	return (
		<>
			<div className={styles.fourProductDisplayGrid}>
				<div className="container mx-auto p-4 lg:p-10">
					<div className="flex flex-col md:flex-row justify-between items-center gap-8">
						{props.data.map((keys) => (
							<LimitTimeProductCard
								key={keys.id}
								link={keys.link}
								image={keys.image}
								title={keys.title}
								subtitle={keys.subtitle}
								price={keys.price}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default limitTimeProductDisplayGrid;

import LimitTimeProductCard from "./LimitTimeProductCard";
import styles from "/styles/Home.module.scss";

const LimitTimeProductDisplayGrid = (props) => {
	const title = props.title;

	return (
		<>
			<div className={styles.limitTimeProductDisplayGrid}>
				<div className="container mx-auto p-4 lg:p-10">
					<div className={styles.title}>
						<h3 className="capitalize font-semibold mr-6 text-2xl">{title}</h3>
					</div>
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

export default LimitTimeProductDisplayGrid;

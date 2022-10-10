import styles from "/styles/Home.module.scss";

const TwoImageDisplay = (props) => {
	console.log(props);

	const title = props.data.title;
	const imageOne = `${props.data.imageOne.sourceUrl}`;
	const imageTwo = `${props.data.imageTwo.sourceUrl}`;
	const pageLinkOne = props.data.imageOneLink.url;
	const pageLinkTwo = props.data.imageTwoLink.url;

	return (
		<>
			<div className={styles.twoImageDisplay}>
				<div className="container mx-auto p-4 lg:py-10">
					<div className="content">
						<h2 className="text-black mb-4">{title}</h2>
						<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
							<a className="w-full sm:w-1/2" href={pageLinkOne}>
								<img src={imageOne} alt="" width="100%" height="400px" />
							</a>
							<a className="w-full sm:w-1/2" href={pageLinkTwo}>
								<img src={imageTwo} alt="" width="100%" height="400px" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TwoImageDisplay;

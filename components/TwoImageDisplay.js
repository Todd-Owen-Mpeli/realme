import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.scss";

const TwoImageDisplay = (props) => {
	const title = props.data.title;
	const imageOne = props.data.imageOne;
	const imageTwo = props.data.imageTwo;
	const pageLinkOne = props.data.pageLinkOne;
	const pageLinkTwo = props.data.pageLinkTwo;

	console.log(props.data.imageOne);

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

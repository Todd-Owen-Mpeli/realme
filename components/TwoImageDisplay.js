import Link from "next/link";
import styles from "/styles/Home.module.scss";

const TwoImageDisplay = (props) => {
	return (
		<>
			<div className={styles.twoImageDisplay}>
				<div className="container mx-auto p-4 lg:py-10">
					<div className="content">
						<h2 className="text-black mb-4">{props?.title}</h2>
						<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
							<div className="w-full sm:w-1/2">
								<Link
									href={`${props?.imageOneLink?.url}`}
									target={`${props?.imageOneLink?.target}`}
								>
									<img
										className="w-full h-[400px]"
										src={props?.imageOne?.sourceUrl}
										alt={props?.imageOne?.altText}
										width={props?.imageOne?.mediaDetails?.width}
										height={props?.imageOne?.mediaDetails?.height}
									/>
								</Link>
							</div>
							<div className="w-full sm:w-1/2">
								<Link
									href={`${props?.imageTwoLink?.url}`}
									target={`${props?.imageTwoLink?.target}`}
								>
									<img
										className="w-full h-[400px]"
										src={props?.imageTwo?.sourceUrl}
										alt={props?.imageTwo?.altText}
										width={props?.imageTwo?.mediaDetails?.width}
										height={props?.imageTwo?.mediaDetails?.height}
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TwoImageDisplay;

import Link from "next/link";
import {useState} from "react";
import styles from "/styles/Home.module.scss";

const LimitTimeProductCard = (props) => {
	return (
		<>
			<div className={styles.limitTimeProductCard}>
				<div className="p-0 md:p-6 h-full flex flex-col bg-white justify-between items-center">
					<div className="">
						<div id="DateTimeCountdownTimer">
							{/* https://codepen.io/terasol/pen/gJmzwP */}
						</div>
					</div>
					<div className="h-1/2 mb-4">
						<Link href={props.link}>
							<a target="blank">
								<img
									src={props.image}
									alt={props.title}
									width="100%"
									height="300px"
									className="object-cover w-full h-[325px] md:h-[300px]"
								/>
							</a>
						</Link>
					</div>
					<div className="h-1/2 flex flex-col text-center">
						<h2 className="font-medium">{props.title}</h2>
						<h3 className="mt-2 text-sm text-grey">{props.subtitle}</h3>
						<div className="flex justify-center items-center gap-3 mt-4">
							<h4 className="text-pinkRed font-semibold ">
								£{props.discountPrice}
							</h4>
							<h4 className="text-grey font-semibold line-through text-tiny">
								£{props.price}
							</h4>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LimitTimeProductCard;

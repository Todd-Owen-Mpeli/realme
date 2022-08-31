import Image from "next/image";
import Link from "next/link";

const ImageBanner = () => {
	return (
		<>
			<div className="">
				<div className="flex flex-col justify-center items-center">
					<h2>
						<strong>Dare to leap</strong>
					</h2>
					<button>
						<Link href="https://www.realme.com/uk/brand" target="blank">
							<a>Learn More</a>
						</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default ImageBanner;

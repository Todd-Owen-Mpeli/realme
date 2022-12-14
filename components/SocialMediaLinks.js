import Image from "next/image";

const SocialMediaLinks = (props) => {
	const svgPath = `/svg/${props.svg}`;
	return (
		<>
			<img src={svgPath} alt={props.name} width="20px" height="20px" />
		</>
	);
};

export default SocialMediaLinks;

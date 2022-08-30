import Link from "next/link";

const FooterLink = (props) => {
	return (
		<>
			<Link href={props.link}>
				<a href={props.link} target="blank">
					{props.name}
				</a>
			</Link>
		</>
	);
};

export default FooterLink;

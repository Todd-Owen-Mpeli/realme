import Link from "next/link";
import styles from "/styles/Home.module.scss";
import {aboutRealMe, support, recommended} from "../lib/footerLinks";
import FooterLink from "./FooterLink";

const Footer = () => {
	return (
		<>
			{/* <!--===== FOOTER =====--> */}
			<footer className={styles.footer}>
				<div className="container mx-auto">
					<div className="content p-8 pb-2 lg:p-12 flex flex-col justify-between text-pureBlack">
						<div className="contentTop flex flex-col lg:flex-row justify-between">
							<div className="recommended flex flex-col">
								<h2 className="pt-0 pb-1 lg:pb-6">
									<strong>Recommended</strong>
								</h2>
								<ul className="links flex flex-col">
									{recommended.map((keys) => (
										<li>
											<FooterLink
												key={keys.id}
												name={keys.name}
												link={keys.link}
											/>
										</li>
									))}
								</ul>
							</div>
							<div className="support flex flex-col">
								<h2 className="pt-8 pb-1 lg:pb-6">
									<strong>Support</strong>
								</h2>
								<ul className="links flex flex-col">
									{support.map((keys) => (
										<li>
											<FooterLink
												key={keys.id}
												name={keys.name}
												link={keys.link}
											/>
										</li>
									))}
								</ul>
							</div>
							<div className="aboutRealme flex flex-col">
								<h2 className="pt-8 pb-1 lg:pb-6">
									<strong>About realme</strong>
								</h2>
								<ul className="links flex flex-col">
									{aboutRealMe.map((keys) => (
										<li>
											<FooterLink
												key={keys.id}
												name={keys.name}
												link={keys.link}
											/>
										</li>
									))}
								</ul>
							</div>
							<div className="contactRealme flex flex-col">
								<h2 className="pt-8 pb-1 lg:pb-6">
									<strong>Contact realme</strong>
								</h2>
								<ul className="links flex flex-col">
									<Link href="#" target="blank">
										<a>service.eu@realme.com</a>
									</Link>
									<Link href="#" target="blank">
										<a>orders.eu@realme.com</a>
									</Link>
								</ul>
							</div>
							<div className="socialLinks mt-12 lg:mt-0 flex flex-col items-center">
								<button className="mb-6 p-2 flex flex-col justify-between items-center border-[1px] border-solid border-black">
									<a href="" target="blank">
										<i className="bi bi-headset"></i>
										<strong>CHAT SUPPORT</strong>
									</a>
								</button>
								<h2 className="chatSupportInfo text-center leading-6">
									English Service: <br />
									10:00-19:00, Mon-Fri <br />
									Including Holidays
								</h2>
								<div className="socialLinks flex flex-col">
									<a href="" target="blank">
										<i className="bi bi-facebook"></i>
									</a>
									<a href="" target="blank">
										<i className="bi bi-twitter"></i>
									</a>
									<a href="" target="blank">
										<i className="bi bi-youtube"></i>
									</a>
									<a href="" target="blank">
										<i className="bi bi-instagram"></i>
									</a>
								</div>
							</div>
						</div>
						<div className={styles.contentBottom}>
							<div className="flex flex-col-reverse lg:flex-col my-8 lg:mt-16">
								<div className="">
									<h4>United Kingdom (English / GBP)</h4>
								</div>
								<div className={styles.borderlineMid}></div>
								<div className="flex flex-col-reverse lg:flex-row gap-3 justify-between">
									<h4>
										<i className="far fa-copyright"></i>2022 realme. All Rights
										Reserved.
									</h4>
									<div className="flex flex-col mb-8 lg:mb-0 lg:flex-row gap-1 lg:gap-3 lg:justify-center items-center lg:justify-end">
										<a href="#cookiePolicy">Cookie Policy</a>
										<div className="borderline"></div>
										<a href="#termsOfSales">Terms of Sales</a>
										<div className="borderline"></div>
										<a href="#privacyPolicy">Privacy Policy</a>
										<div className="borderline"></div>
										<a href="#userAgreement">User Agreement</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;

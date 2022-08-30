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
					<div className="content p-12 flex flex-col justify-between text-pureBlack">
						<div className="contentTop flex justify-between">
							<div class="recommended flex flex-col">
								<h2 className="pb-6">
									<strong>Recommended</strong>
								</h2>
								<ul class="links flex flex-col">
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
							<div class="support flex flex-col">
								<h2 className="pb-6">
									<strong>Support</strong>
								</h2>
								<ul class="links flex flex-col">
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
							<div class="aboutRealme flex flex-col">
								<h2 className="pb-6">
									<strong>About realme</strong>
								</h2>
								<ul class="links flex flex-col">
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
							<div class="contactRealme flex flex-col">
								<h2 className="pb-6">
									<strong>Contact realme</strong>
								</h2>
								<ul class="links flex flex-col">
									<Link href="#" target="blank">
										<a>service.eu@realme.com</a>
									</Link>
									<Link href="#" target="blank">
										<a>orders.eu@realme.com</a>
									</Link>
								</ul>
							</div>
							<div class="socialLinks flex flex-col items-center">
								<button className="mb-6 p-2 flex flex-col justify-between items-center border-[1px] border-solid border-black">
									<a href="" target="blank">
										<i class="bi bi-headset"></i>
										<strong>CHAT SUPPORT</strong>
									</a>
								</button>
								<h2 className="chatSupportInfo text-center leading-6">
									English Service: <br />
									10:00-19:00, Mon-Fri <br />
									Including Holidays
								</h2>
								<div class="socialLinks flex flex-col">
									<a href="" target="blank">
										<i class="bi bi-facebook"></i>
									</a>
									<a href="" target="blank">
										<i class="bi bi-twitter"></i>
									</a>
									<a href="" target="blank">
										<i class="bi bi-youtube"></i>
									</a>
									<a href="" target="blank">
										<i class="bi bi-instagram"></i>
									</a>
								</div>
							</div>
						</div>
						<div className={styles.contentBottom}>
							<div className="flex flex-col mt-16">
								<div class="top">
									<h4>United Kingdom (English / GBP)</h4>
								</div>
								<div class={styles.borderlineMid}></div>
								<div class="bottom flex gap-3 justify-between">
									<h4>
										<i class="far fa-copyright"></i>2022 realme. All Rights
										Reserved.
									</h4>
									<div class="right flex gap-3 justify-end">
										<a href="#cookiePolicy">Cookie Policy</a>
										<div class="borderline"></div>
										<a href="#termsOfSales">Terms of Sales</a>
										<div class="borderline"></div>
										<a href="#privacyPolicy">Privacy Policy</a>
										<div class="borderline"></div>
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

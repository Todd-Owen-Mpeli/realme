import Link from "next/link";
import styles from "/styles/Home.module.scss";

const Footer = () => {
	return (
		<>
			{/* <!--===== FOOTER =====--> */}
			<footer className={styles.footer}>
				<div className="content p-12 flex flex-col justify-between text-white">
					<div className="contentTop flex justify-between">
						<div class="recommended flex flex-col">
							<h2>
								<strong>Recommended</strong>
							</h2>
							<ul class="links flex flex-col">
								<Link href="#" target="blank">
									<a
										href="https://www.realme.com/pl/realme-8-5g"
										target="blank"
									>
										realme 8 5G
									</a>
								</Link>
								<Link href="#" target="blank">
									<a href="https://www.realme.com/pl/realme-8" target="blank">
										realme 8
									</a>
								</Link>
								<Link href="#" target="blank">
									<a
										href="https://www.realme.com/uk/realme-8-pro"
										target="blank"
									>
										realme 8 Pro
									</a>
								</Link>
								<Link href="#" target="blank">
									<a href="https://www.realme.com/uk/realme-c21" target="blank">
										realme C21
									</a>
								</Link>
								<Link href="#" target="blank">
									<a
										href="https://www.realme.com/uk/realme-7-pro"
										target="blank"
									>
										realme 7 Pro
									</a>
								</Link>
								<Link href="#" target="blank">
									<a href="https://www.realme.com/uk/realme-7" target="blank">
										realme 7
									</a>
								</Link>
								<Link href="#" target="blank">
									<a href="https://www.realme.com/uk/realme-x50" target="blank">
										realme X50
									</a>
								</Link>
								<Link href="#" target="blank">
									<a
										href="https://www.realme.com/uk/realme-x3-superzoom"
										target="blank"
									>
										realme X3 SuperZoom
									</a>
								</Link>
								<Link href="#" target="blank">
									<a
										href="https://www.realme.com/uk/realme-x50-pro"
										target="blank"
									>
										realme X50 Pro
									</a>
								</Link>
								<Link href="#" target="blank">
									<a href="https://www.realme.com/uk/realme-6" target="blank">
										realme 6
									</a>
								</Link>
								<Link href="#" target="blank">
									<a href="https://www.realme.com/uk/realme-6i" target="blank">
										realme 6i
									</a>
								</Link>
								<Link href="#" target="blank">
									<a
										href="https://www.realme.com/uk/realme-phones#phones"
										target="blank"
									>
										More Phones +
									</a>
								</Link>
							</ul>
						</div>
						<div class="support flex flex-col">
							<h2>
								<strong>Support</strong>
							</h2>
							<ul class="links flex flex-col">
								<Link href="#" target="blank">
									<a
										href="https://www.realme.com/uk/support/faq"
										target="blank"
									>
										FAQ
									</a>
								</Link>
								<Link href="#" target="blank">
									<a
										href="https://www.realme.com/uk/support#user-guid"
										target="blank"
									>
										User Guide
									</a>
								</Link>
								<Link href="#" target="blank">
									<a
										href="https://www.realme.com/uk/legal/declaration"
										target="blank"
									>
										Declaration
									</a>
								</Link>
								<Link href="#" target="blank">
									<a
										href="https://www.realme.com/uk/legal/official-sales-region"
										target="blank"
									>
										Official Sales Region
									</a>
								</Link>
								<Link href="#" target="blank">
									<a
										href="https://www.realme.com/uk/support/user-manuals"
										target="blank"
									>
										User Manual
									</a>
								</Link>
								<Link href="#" target="blank">
									<a href="" target="blank">
										Manage Cookies
									</a>
								</Link>
							</ul>
						</div>
						<div class="aboutRealme flex flex-col">
							<h2>
								<strong>About realme</strong>
							</h2>
							<ul class="links flex flex-col">
								<Link href="#" target="blank">
									<a href="https://www.realme.com/uk/brand" target="blank">
										Our Brand
									</a>
								</Link>
							</ul>
						</div>
						<div class="contactRealme flex flex-col">
							<h2>
								<strong>Contact realme</strong>
							</h2>
							<ul class="links flex flex-col">
								<Link href="#" target="blank">
									<a href="" target="blank">
										service.eu@realme.com
									</a>
								</Link>
								<Link href="#" target="blank">
									<a href="" target="blank">
										orders.eu@realme.com
									</a>
								</Link>
							</ul>
						</div>
						<div class="socialLinks flex flex-col">
							<button>
								<a href="" target="blank">
									<i class="bi bi-headset"></i>
									<strong>CHAT SUPPORT</strong>
								</a>
							</button>
							<h2>
								English Service: <br />
								<br />
								10:00-19:00, Mon-Fri <br />
								<br />
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
					<div className="contentBottom flex">
						<div class="top">
							<h2>United Kingdom (English / GBP)</h2>
						</div>
						<div class="borderlineMid"></div>
						<div class="bottom">
							<h2>
								<i class="far fa-copyright"></i>2021 realme. All Rights
								Reserved.
							</h2>
							<div class="right">
								<a href="#cookiePolicy">Cookie Policy</a>
								<div class="borderline"></div>
								<a href="#termsOfSales">Terms of Sales</a>
								<div class="borderline"></div>
								<a href="#privacyPolicy">Privacy Policy</a>
								<div class="borderline"></div>
								<a href="#userAgreement">User Agreement</a>
							</div>
							<h2 id="secondFooterTitle">
								<i class="far fa-copyright"></i>2021 realme. All Rights
								Reserved.
							</h2>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;

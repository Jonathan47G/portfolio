import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faLinkedinIn,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { bangla } from "../../app/font"
import "../../style/footer/footer.min.css"
const Footer = () => {
	return (
		<>
			<footer>
			<div className="footer__nav">
						<Link href="https://github.com/Jonathan47G" aria-label="GitHub">
							<span>
								<FontAwesomeIcon icon={faGithub} />
							</span>
						</Link>
						<Link href="https://twitter.com/Jonath47Gu" aria-label="Twitter">
							<span>
								<FontAwesomeIcon icon={faTwitter} />
							</span>
						</Link>
						<Link href="https://linkedin.com/in/jonathan-guestin-ab353027b" aria-label="LinkedIn">
							<span>
								<FontAwesomeIcon icon={faLinkedinIn} />
							</span>
						</Link>
						<a href="mailto:guestin.jonathan@gmail.com" aria-label="Me contacter">
							<span>
								<FontAwesomeIcon icon={faEnvelope} />
							</span>
						</a>
					</div>
					<p>Copyright All Right Reserved 2023, Guestin Jonathan</p>
					
			</footer>
		</>
	);
};

export default Footer;

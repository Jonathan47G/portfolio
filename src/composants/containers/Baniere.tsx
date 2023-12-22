import photoDeProfile from "../../app/assets/guestin-jonathan.webp";
import Image from "next/image";
import "@/style/banniere/banniere.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faLinkedinIn,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { bangla } from "../../app/font"

const Banniere: React.FC = () => {
	return (
		<section id="home" className="banniere">
			<div className="banniere__conteneur">
				<Image
					className="banniere__conteneur__image"
					src={photoDeProfile}
					alt="Photo Guestin Jonathan"
					priority={true}
				/>
				<div className="banniere__conteneur_texte">
					<h1 className={bangla.className}>Dev front-end</h1>
					<p>
						Hey, je suis Guestin Jonathan, <strong>Développeur web</strong> passionné, je transforme des idées
						en code.
						<br /> Bienvenue sur mon portfolio où l&apos;
						<span>innovation rencontre la technologie.</span>
					</p>
					<div className="banniere__conteneur__lien">
						<Link href="https://github.com/Jonathan47G" aria-label="GitHub">
							<span>
								<FontAwesomeIcon icon={faGithub} />
							</span>
							GitHub
						</Link>
						<Link href="https://twitter.com/Jonath47Gu" aria-label="Twitter">
							<span>
								<FontAwesomeIcon icon={faTwitter} />
							</span>
							Twitter
						</Link>
						<Link href="lien_linkedin" aria-label="LinkedIn">
							<span>
								<FontAwesomeIcon icon={faLinkedinIn} />
							</span>
							LinkedIn
						</Link>
						<a href="mailto:guestin.jonathan@gmail.com" aria-label="Me contacter">
							<span>
								<FontAwesomeIcon icon={faEnvelope} />
							</span>
							Me contacter
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banniere;

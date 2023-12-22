import "../../style/competences/competences.min.css";
import Image from "next/image";
import reduxLogo from "../../app/assets/images/logo/Redux.svg";
import adobeLogo from "../../app/assets/images/logo/Adobe.svg";
import figmaLogo from "../../app/assets/images/logo/Figma.svg";
import gitLogo from "../../app/assets/images/logo/Git.svg";
import nextLogo from "../../app/assets/images/logo/Next.svg";
import nodeLogo from "../../app/assets/images/logo/Node.svg";
import sassLogo from "../../app/assets/images/logo/Sass.svg";
import reactLogo from "../../app/assets/images/logo/React.svg";
import { bangla } from '../../app/font'

const Competences: React.FC = () => {
	return (
		<section id="competences" className="containers__competences">
			<div className="containers__competences__groupe">
				<article>
					<h2 className={bangla.className}>Mes compétences</h2>
					<ul className="containers__competences__groupe__skill">
						<li>
							<Image src={sassLogo} height={80} width={80} alt="logo Sass" />
							<p>Sass</p>
						</li>
						<li>
							<Image src={nodeLogo} height={80} width={80} alt="logo Node" />
							<p>Node JS</p>
						</li>
						<li>
							<Image src={reactLogo} height={80} width={80} alt="logo React" />
							<p>React</p>
						</li>
						<li>
							<Image src={gitLogo} height={80} width={80} alt="logo GitHub" />
							<p>GitHub</p>
						</li>
						<li>
							<Image src={figmaLogo} height={80} width={80} alt="logo Figma" />
							<p>Figma</p>
						</li>
						<li>
							<Image src={reduxLogo} height={80} width={80} alt="logo Redux" />
							<p>Redux</p>
						</li>
						<li>
							<Image src={adobeLogo} height={80} width={80} alt="logo Adobe" />
							<p>Photoshop</p>
						</li>
						<li>
							<Image src={nextLogo} height={80} width={80} alt="logo Next" />
							<p>Next.js</p>
						</li>
					</ul>
				</article>
				<article>
					
					<ul className="containers__competences__groupe__about">
					<h2 className={bangla.className}>A propos de moi</h2>
						<li>
						<p>
							En tant que <strong>développeur Front-end </strong>passionné, je m'efforce
							constamment d'élargir mes compétences pour devenir un
							professionnel du développement Full Stack.
							<br /> Fort d'un passé en tant que chaudronnier, j'ai fait le
							choix de revenir à ma passion pour la technologie et le code.
						</p>
						</li><br/>
						<ul>
							<h3 className={bangla.className}>Compétences Clés</h3><br/>
							<li>
								<span>Front-end</span> : Maîtrise avancée des langages <strong>HTML, CSS, et
								JavaScript</strong>. Expérience approfondie dans le développement
								d'interfaces utilisateur attrayantes et réactives.
							</li><br />
							<li>
								<span>Back-end</span> : Acquisition de compétences en développement back-end
								pour offrir une approche complète du cycle de développement.
							</li>
						</ul>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Competences;

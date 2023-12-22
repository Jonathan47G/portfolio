import React from "react";
import logoGit from "../../app/assets/images/logo/GitProjet.svg";
import Image from "next/image";
import Link from "next/link";
import { bangla } from "@/app/font";
interface SliderProps {
	stackTechnique?: string[];
	description: string[];
	lien: string;
	competences: string[];
}

const Work: React.FC<SliderProps> = ({
	stackTechnique,
	description,
	lien,
	competences,
}) => {
	if (!stackTechnique) {
		return <div>Aucune donnée à afficher</div>;
	}
	return (
		<article className="main__information">
            <h2 className={bangla.className}>Mon rôle</h2>
			{description.map((descriptionpara, index) => (
				<p key={index}>{descriptionpara}</p>
			))}
			<div className="main__information__liste">
				<ul>
					<h2 className={bangla.className}>Le stack utilisé :</h2>
					{stackTechnique.map((stack, index) => (
						<li key={index}>{stack}</li>
					))}
				</ul>

				<ul>
					<h2 className={bangla.className}>Compétences développé :</h2>
					{competences.map((competencesDev, index) => (
						<li key={index}>{competencesDev}</li>
					))}
				</ul>
			</div>
			<Link href={lien}>
				<Image src={logoGit} alt="Logo git"/>
                <p>Voir le projet</p>
			</Link>
		</article>
	);
};

export default Work;

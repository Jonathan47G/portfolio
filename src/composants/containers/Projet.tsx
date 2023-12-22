import React from "react";
import Card from "../elements/Card";
import '../../style/projets/projet.min.css'
import data from "../../Data/dataWork.json"
import { bangla } from "@/app/font";

const Projet:React.FC = async () => {
	const travaux = data
	return (
		<section  id="projet" className="containers__projets">
		<h2 className={bangla.className}>Mes projets</h2>
		<article className="containers__projets__card">
			{travaux.work.map((travail) => (
					<Card
						key={travail.id} titre={travail.titre} image={travail.image} tag={travail.tag} id={travail.id} git={travail.lien_github} focus ={travail.focus}/>
							
			))}
			</article>
		</section>
	);
};

export default Projet;

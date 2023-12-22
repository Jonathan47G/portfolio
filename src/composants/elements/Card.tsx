"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import gitLogo from "../../app/assets/images/logo/GitProjet.svg";
import Image from "next/image";

interface CardProps {
	id: number;
	titre: string;
	image: string;
	tag: any;
	git: string;
	focus: any;
}

const Card: React.FC<CardProps> = ({titre, image, tag, id, git, focus }) => {
	const router = useRouter();

	return (
		<div key={id} className="card">
			<img className="card_image"src={image} alt={titre} />
			<span className="card__tag">{tag}</span>

			<div className="card__info">
				<div className="card__info__texte">
					<h3>{titre}</h3>
					<div className="card__info__texte-conteneurImage"><Image className="card__info__texte-conteneurImage-focus" src={focus} alt={titre} height={200} width={400} /></div> 
					<div className="card__info__texte__git-bouton">
						<Link className="lien-git" href={git}>
							
							<Image
								className="card__info__texte-logo"
								src={gitLogo}
								height={150}
								width={200}
								alt="logo GitHub"
							/>
						</Link>
						<p>
							<Link href={`/projet/${id}`}>Voir le projet</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

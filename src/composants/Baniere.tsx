import photoDeProfile from '../app/assets/guestin-jonathan.webp'
import Image from 'next/image';

const Banniere:React.FC = () => {
	return (
		<div>
            <Image src ={photoDeProfile} alt="Photo Guestin Jonathan" priority={true} />
			<p>
				Développeur web passionné, je transforme des idées en code.
				<br /> Bienvenue sur mon portfolio où l&apos;innovation rencontre la
				technologie.
			</p>
            <p>GitHub</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>guestin.jonathan@gmail.com</p>
		</div>
	);
}

export default Banniere;

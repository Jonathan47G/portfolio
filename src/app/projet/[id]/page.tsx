'use client'
import { usePathname } from 'next/navigation';
import data from '../../../Data/dataWork.json';
import Slider from '@/composants/elements/Slider';
import Work from '@/composants/elements/DetailsProjets';
import '../../../style/global/global.min.css';
import '../../../style/detailsProjet/detailsProjet.min.css'
import { bangla } from '@/app/font';


const ProjectDetail = () => {
  const pathname = usePathname();
  const matches = pathname ? pathname.match(/\/projet\/(\d+)/) : null;
  const id = matches ? parseInt(matches[1], 10) : null;

  const detailProjet = data.work.find((work) => work.id === id);

  return (
    <section className='main'>
      <h1 className={bangla.className}>{detailProjet?.titre}</h1>
      <div className='main__projet'>
      {detailProjet && (
        <>
            <Slider sliderData={detailProjet.slider_work[0].images} />
            <Work stackTechnique={detailProjet.stack} description={detailProjet.description} lien={detailProjet.lien_github} competences={detailProjet.competence_developper} />
            </>
      )}
    </div>
    </section>
    
  );
};

export default ProjectDetail;

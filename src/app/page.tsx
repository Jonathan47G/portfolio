import Banniere from '@/composants/containers/Baniere'
import '../style/global/global.min.css'
import Projet from '@/composants/containers/Projet'
import Competences from '@/composants/containers/Competences'
import Contact from '@/composants/containers/Contact'


export default function Home() {
  return (

    <main>
      <Banniere />
      <Competences />
      <Projet />
      <Contact />
    </main>
  )
}

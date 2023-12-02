import Link from "next/link";

function NavBar () {
    return (
        <nav>
            <ul>
            Jonathan
                <li>
                <Link href="#a-propos">A propos</Link>
                </li>
                <li>
                <Link href="#projet"> Projets</Link> 
                </li>
                <li>
                <Link href="#competences">Compétences</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
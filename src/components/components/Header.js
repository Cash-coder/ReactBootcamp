import keyConceptsImage from '../../assets/images/key-concepts.png';

export default function Header(){
    return(
        <header>
            <img src={keyConceptsImage} alt="Medal badge" />
            <h1> Key concepts </h1>
            <p> Selected key react concept you know about </p>
        </header>
    )
}
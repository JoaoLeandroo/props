import '../Cards/cards.css'

export default function Cards(props) {
    return(
        <section>
            <h2>{props.tittle}</h2>

            <p>
                {props.description}
            </p>
        </section>
    )
}
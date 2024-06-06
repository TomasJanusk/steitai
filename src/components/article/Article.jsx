const Article = (props) => {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <a href="#">Daugiau...</a>
        </article>
    )
}
export default Article
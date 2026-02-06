import "./Header.css";
export default function Header(props)
{
    return (
    <div className="navigation">
    <h1>{props.tittle}</h1>
    <nav>
        <a href="#home">Home</a>{" "}
        <a href="#about">About</a>{" "}
        <a href="#contact">Contact</a>
    </nav>
    </div>
)
}
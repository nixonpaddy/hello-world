import "./Greeting.css";

// function Greeting(){
//     return <p>Hello</p>;
// }

const Greeting = (props) => {
    return <p className = "greeting-paragraph">Hello {props.name}, you are {props.age} years old</p>;
}

 export default Greeting;
import { useState } from "react";

const Home = () => {
    const [name,setName] = useState('mario');
    const [age,setAge] = useState(69)
    const handleClick = (e) => {
        // console.log("hellooo ",e);
        setName('peach');
        setAge(420);
    }
    
    // const handleClickAgain = (name,e) => {
    //     console.log("hellooo ",name,e);
    // }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClickAgain('mario',e)}>Click Me Again</button> */}
        </div>
      );
}
 
export default Home;

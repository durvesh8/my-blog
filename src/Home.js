// import { useEffect, useState } from "react";

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const [name,setName] = useState('mario');
    // const [age,setAge] = useState(69)
    // const handleClick = (e) => {
    //     // console.log("hellooo ",e);
    //     setName('peach');
    //     setAge(420);
    // }
    const {data: blogs, isPending, error} = useFetch('https://durvesh8.github.io/my-blog/data/db.json');
    // const [name,setName] = useState('Durvesh');
    // const handleClickAgain = (name,e) => {
    //     console.log("hellooo ",name,e);
    // }


    // const handleDelete = (id) => {
    //     const newblogs = blogs.filter(blog=>blog.id!==id);
    //     setBlogs(newblogs);
    //     // setName('Bruh')
    // }




    return (
        <div className="home">
            {/* {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2 className="previewTitle">{blog.title}</h2>
                    <p className="previewAuthor">Written by {blog.author}</p>
                </div>
            ))} */}
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs = {blogs} title= "All Blogs"/>}
            {/* { blogs && <BlogList blogs = {blogs} title= "All Blogs" handleDelete={handleDelete}/>} */}
            {/* <BlogList blogs = {blogs.filter((blog)=>blog.author==="mario")} title= "Mario's blogs"/> */}
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e) => handleClickAgain('mario',e)}>Click Me Again</button> */}
        </div>
      );
}
 
export default Home;

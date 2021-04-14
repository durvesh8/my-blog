import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // const [name,setName] = useState('mario');
    // const [age,setAge] = useState(69)
    // const handleClick = (e) => {
    //     // console.log("hellooo ",e);
    //     setName('peach');
    //     setAge(420);
    // }
    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    // const handleClickAgain = (name,e) => {
    //     console.log("hellooo ",name,e);
    // }

    const handleDelete = (id) => {
        const newblogs = blogs.filter(blog=>blog.id!==id);
        setBlogs(newblogs);
    }

    return (
        <div className="home">
            {/* {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2 className="previewTitle">{blog.title}</h2>
                    <p className="previewAuthor">Written by {blog.author}</p>
                </div>
            ))} */}
            <BlogList blogs = {blogs} title= "All Blogs" handleDelete={handleDelete}/>
            {/* <BlogList blogs = {blogs.filter((blog)=>blog.author==="mario")} title= "Mario's blogs"/> */}
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e) => handleClickAgain('mario',e)}>Click Me Again</button> */}
        </div>
      );
}
 
export default Home;

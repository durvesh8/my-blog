import { Link } from "react-router-dom";

const BlogList = (props) => {
       const blogs = props.blogs;
       const title = props.title;
    //    const handleDelete = props.handleDelete;
    return ( 
        <div className="blog-list">
            <div className="title">{title}</div>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2 className="previewTitle">{blog.title}</h2>
                        <p className="previewAuthor">Written by {blog.author}</p>
                        {/* <button className="delbut" onClick={()=>handleDelete(blog.id)}>Delete</button> */}
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
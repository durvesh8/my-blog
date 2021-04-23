import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const { id : blogId } = useParams();
    const { data: blogs, error, isPending } = useFetch('https://raw.githubusercontent.com/durvesh8/my-blog/main/data/db.json');
    

    const history = useHistory();

    const handleClick = () =>{
        // fetch('http://localhost:8000/blogs/'+getBlog(blogs).id,{
        //     method: 'DELETE'
        // }).then(()=>{
        //     history.push('/');
        // })
    }
    const filterBlog = (singleblog) => {
        console.log(singleblog);
        return singleblog.id == blogId;
    }

    const getBlog = (allBlogs) => {
        console.log(allBlogs);
        const retBlog = allBlogs.filter(filterBlog);
        console.log(retBlog);
        console.log(retBlog[0].body)
        return retBlog[0];
    }

    return ( 
        <div className="blog-details">
            {
                isPending && <div className="loading">Loading the freshly fetched blog... 😋</div>
            }
            {
                error && <div> Well somehow this error occured:- {error.message} </div>
            }
            {
                blogs
                && ( 
                    
                <article>
                    <div className="bloghead">
                        <h1>
                            {getBlog(blogs).title}
                        </h1>
                    </div>
                    <div className="blogbody">
                        {
                            
                        getBlog(blogs).body
                        }
                    </div>
                    {/* <button onClick={handleClick} >delete</button> */}
                </article>
                )
            }
        {/* <h2>
            Blog Details - {id}
        </h2> */}
        </div>
     );
}
 
export default BlogDetails;
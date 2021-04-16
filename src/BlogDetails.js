import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {
                isPending && <div>Loading the freshly fetched blog... 😋</div>
            }
            {
                error && <div> Well somehow this error occured:- {error.message} </div>
            }
            {
                blog && (
                <article>
                    <div className="bloghead">
                        <h2>
                            {blog.title}
                        </h2>
                    </div>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleClick} >delete</button>
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
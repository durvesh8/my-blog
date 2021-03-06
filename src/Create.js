import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const author = 'Durvesh';
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = {title , body, author};
      setIsPending(true);
      // fetch('http://localhost:8000/blogs',{
      //   method: 'POST', headers: {
      //     "Content-type": "application/json"
      //   },
      //   body: JSON.stringify(blog)
      // }).then(()=>{
      //   setIsPending(false);
      //   // history.go(-1);
      //   history.push('/');
      // }
      // )
    }
    
    return (
      <div className="create">
        <div>
           <h2>Add a new blog</h2>     
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Blog Title
          </label>
          <input 
            type="text" 
            required 
            value={title}
            onChange= {(e) => setTitle(e.target.value)}
          />
          <label>
            Blog Body
          </label>
          <textarea 
            required 
            value={body}
            onChange={(e)=>setBody(e.target.value)}
          />
          { !isPending &&
            <button type='submit'>
              Add Blog
            </button>
          }
          { isPending &&
            <button type='submit' disabled>
              This won't work as the data is static as of now🙃
            </button>
          }
        </form>
      </div>
      );
}
 
export default Create;
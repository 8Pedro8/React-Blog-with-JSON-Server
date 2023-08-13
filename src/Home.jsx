import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setTimeout(() => { // To simulate real server request
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok) throw Error('Failed to fetch the data');
                    return res.json();
                })
                .then(data => {
                    //console.log(data);
                    setBlogs(data);
                    setIsPending(false)
                })
                .catch(err => {
                    console.log(err.message);
                })
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;
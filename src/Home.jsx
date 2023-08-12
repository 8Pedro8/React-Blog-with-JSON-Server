import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleClick = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
            <button onClick={(e) => handleClick('Naruto', e)}>Click me</button>
        </div>
     );
}
 
export default Home;
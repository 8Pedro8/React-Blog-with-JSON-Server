const Home = () => {

    const handleClick = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={(e) => handleClick('Naruto', e)}>Click me</button>
        </div>
     );
}
 
export default Home;
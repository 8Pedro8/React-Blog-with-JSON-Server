import {useState, useEffect} from 'react'

// Custom hook should start with "use"
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => { // To simulate real server request
            fetch(url)
                .then(res => {
                    if(!res.ok) throw Error('Failed to fetch the data')
                    return res.json()
                })
                .then(data => {
                    //console.log(data);
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    //console.log(err.message);
                    setIsPending(false)
                    setError(err.message)
                })
        }, 1000)
    }, [])

    return {data, isPending, error}
}

export default useFetch
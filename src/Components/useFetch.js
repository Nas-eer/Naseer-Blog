import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [datas, setDatas] = useState(false)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() =>{
        const abortcont = new AbortController ();

        fetch(url, {signal: abortcont.signal})
        .then(res => {
            if (!res.ok){
                throw Error ("Could not get data from this resource")
            }
            return res.json();
        })
        .then(data =>{
            setDatas(data);
            setIsPending(false);
            setError(null)
        })
        .catch(err =>{
            if(err.name == 'AbortError'){
                console.log('fetch aborted');
            }else{
            setIsPending(false)
            setError(err.message);
            }
        }
        );
        return () => abortcont.abort();
},[url]);

return {datas, isPending, error}
}

export default useFetch;
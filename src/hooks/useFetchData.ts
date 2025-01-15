import { useState } from "react";
import axios from "axios";

export function useFetchData<T>(initial:T, token:string = ""){

    const [error, setError] = useState<any>();
    const [results, setResults] = useState<T>(initial);
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchData(endpoint: string) {

        let config = {};

        if(token){
          config= {
            headers: { authorization: `Bearer ${token}` },
          };
        }

        setLoading(true);
        try {
          const data = await axios.get(endpoint, config);
    
          setResults(data.data);
        } catch (e: any) {
          setError(e.message);
        }
    
        setLoading(false);
        return results;
    
    }

    return {
        error,
        loading,
        results,
        fetchData,
    };
}


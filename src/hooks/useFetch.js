import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [intento, setIntento] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            setData([]);
            try {
                const response = await axios.get(url);
                setData(response.data);
            }
            catch (error) {
                setError(error);
            }
            setLoading(false);
        };

        fetchData();
    },[url, intento]);

    const reintentar = () => {
        setIntento((intentoAnterior) => intentoAnterior + 1);
    };

    return { data, loading, error, reintentar};
};

export default useFetch;

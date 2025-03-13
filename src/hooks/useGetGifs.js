import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useGetGifs = (category) => {

    const [images, setImages]       = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getGifs(category)
            .then(setImages)
            .then(() => setIsLoading(false))
            .catch(console.error);
    }, [category]);

    return { images, isLoading };
}

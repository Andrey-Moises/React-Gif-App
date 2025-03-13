import { useState, useCallback } from 'react';
import { AddCategory, GifGrid  } from './components';

export default function GiftApp() {

    const [categories, setCategories] = useState(['Sailor Moon', 'Java', 'Python', 'Neko Arc']);

    const handleAdd = useCallback((newCategorie) => {
        if (newCategorie.trim() !== '' && !categories.includes(newCategorie)) {
            setCategories(prevCategories => [newCategorie, ...prevCategories]);
        }
    }, []);
    return (
        <>
            <h1>GiftApp</h1>
            <AddCategory onAddCategory={handleAdd} />
            {
                categories.map(category => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </>
    );
}
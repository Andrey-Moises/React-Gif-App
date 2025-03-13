import { GifGridItem } from "./GifGridItem";
import { useGetGifs  } from "../hooks/useGetGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useGetGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    isLoading ? (
                        <p>Cargando...</p>
                    ) : (
                        images.map((image) => (
                            <GifGridItem key={image.id} {...image} />
                        ))
                    )
                }
            </div>
        </>
    );

}
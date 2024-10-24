import { createContext, useState } from "react";


export const FavoritesContext = createContext({} as FavoritesContextType);


export const FavoritesProvider = ({ children }: any) => {

    const [favorites, setfavorites] = useState<any>([])

    const favOperation = (product: any) => {
        //favorilerde varsa çıkar yoksa ekle
        if (favorites.some((fav: any) => fav.id === product.id)) {
            setfavorites(favorites.filter((fav: any) => fav.id !== product.id))
        } else {
            setfavorites([...favorites, product])
        }
    }


    const hasFavorite = (product: any) => {
        return favorites.some((fav: any) => fav.id === product.id)
    }


    return <FavoritesContext.Provider value={{favorites,favOperation, hasFavorite}}>{children}</FavoritesContext.Provider>

}




type FavoritesContextType = {
    favorites: any[];
    favOperation: (product: any) => void;
    hasFavorite: (product: any) => boolean;
};
export interface ICity {
    name: string;
    temp: string | number;
    image: string;
}

export interface FavoritesSliceState {
    favorites: Array<ICity>;
}

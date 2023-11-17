export interface ICity {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    countryCode: string;
}

export type SearchCitiesParams = {
    inputValue: string;
};

export interface CitiesSliceState {
    items: Array<ICity>;
    status: null | string;
    error: any;
}

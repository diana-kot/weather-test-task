export interface ICity  {
    id?: number | string;
    latitude: number;
    longitude: number;
    name: string;
    countryCode: string;
};
export interface CitySliceState {
    item: ICity
    status: null | string;
    error: String | null,

}

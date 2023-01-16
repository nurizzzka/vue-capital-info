import { CountriesTypes } from "../types/CountriesTypes.interface";

export const getWeather = async (city: string): Promise<CountriesTypes> =>
    await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_CODE}&q=${city}`
    ).then(val => val.json());



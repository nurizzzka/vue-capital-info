import { CountriesTypes } from "../types/CountriesTypes.interface";

export const capitalSearch = async (capitalName: string): Promise<CountriesTypes> =>
  await fetch(
    `https://restcountries.com/v2/capital/${capitalName}`
  ).then(val => val.json());
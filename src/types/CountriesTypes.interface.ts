export type CountriesTypes = Array<Result>

export interface Result {
  name: string; //Country name
  capital: string;
  currencies: Currency[];
  timezones: string[];
  languages: Language[];
  subregion: string;
  flags: Flags;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  name: string;
  nativeName: string;
}

export interface Flags {
  svg: string;
  png: string;
}

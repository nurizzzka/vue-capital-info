export interface WeatherTypes {
    current?: Weather;
    location?: Location;
}

export interface Weather {
    temp_c: string;
    temp_f: string;
}

export interface Location {
    country: string;
    name: string;
    localtime: string;
}

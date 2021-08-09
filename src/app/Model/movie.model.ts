export interface Movie{ //Model to receive data from the API
    Title : string,
    imdbID : string, // will act as Unique Id for each movie
    Year : string,
    Poster : string,
    Type : string,
    active : boolean // custom field for bookmark icon toggle
}
class Birth {
  date;
  place;
  constructor(date, place) {
    this.date = date;
    this.place = place;
  }

  get getDateOfBirth() {
    return `${this.date}`;
  }

  get getPlaceOfBirth() {
    return `${this.place}`;
  }

  set setDate(date) {
    this.date = date;
  }

  set setPlace(place) {
    this.place = place;
  }
}

class Director extends Birth {
  constructor(date, place, name, nationality, notableFilmography) {
    super(date, place);
    this.name = name;
    this.nationality = nationality;
    this.notableFilmography = notableFilmography;
  }

  get getName() {
    return `${this.name}`;
  }

  get getNationality() {
    return `${this.nationality}`;
  }

  get getNotableFilmography() {
    return `${this.notableFilmography}`;
  }

  set setName(name) {
    this.name = name;
  }

  set setNationality(nationality) {
    this.nationality = nationality;
  }

  set setNotableFilmography(notableFilmography) {
    this.notableFilmography = notableFilmography;
  }
}

export class Movie extends Director {
  constructor(
    title,
    date,
    place,
    name,
    nationality,
    notableFilmography,
    year,
    genre,
    duration,
    rating,
    synopsis
  ) {
    super(date, place, name, nationality, notableFilmography);
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.duration = duration;
    this.rating = rating;
    this.synopsis = synopsis;
  }

  get getTitle() {
    return `${this.title}`;
  }

  get getYear() {
    return this.year;
  }

  get getGenre() {
    return `${this.genre}`;
  }

  get getDuration() {
    return this.duration;
  }

  get getRating() {
    return this.rating;
  }

  get getSynopsis() {
    return `${this.synopsis}`;
  }
}

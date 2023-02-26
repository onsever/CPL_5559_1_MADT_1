interface Movie {
  id: number;
  name: string;
  synopsis: string;
  image: string;
  trailer: string;
  release_date: string;
}

export default Movie; // This one allows me to use Movie.ts in other files

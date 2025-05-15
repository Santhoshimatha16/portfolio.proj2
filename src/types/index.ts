export interface User {
  id: string;
  email: string;
}

export interface Profile {
  id: string;
  name: string;
  avatarColor: string;
  isKids?: boolean;
  isPinProtected?: boolean;
}

export interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  bannerUrl?: string;
  releaseYear: number;
  maturityRating: string;
  duration: string;
  genre: string[];
  description: string;
  isTopRated?: boolean;
}

export interface Category {
  id: string;
  name: string;
  movies: Movie[];
}
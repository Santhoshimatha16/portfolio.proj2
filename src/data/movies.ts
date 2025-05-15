import { Movie, Category, Profile } from '../types';

export const profiles: Profile[] = [
  {
    id: '1',
    name: 'santhoshimatha',
    avatarColor: '#30BCED',
  },
  {
    id: '2',
    name: '😍',
    avatarColor: '#E53935',
  },
  {
    id: '3',
    name: '✨',
    avatarColor: '#2196F3',
  },
  {
    id: '4',
    name: 'poojjj',
    avatarColor: '#FFC107',
    isPinProtected: true,
  },
  {
    id: '5',
    name: 'Children',
    avatarColor: '#8BC34A',
    isKids: true,
  }
];

export const movies: Movie[] = [
  {
    id: '1',
    title: 'The Diplomat',
    imageUrl: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bannerUrl: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseYear: 2023,
    maturityRating: 'U/A 16+',
    duration: '3h 10m',
    genre: ['Drama', 'Political', 'Thriller'],
    description: 'A career diplomat lands in a high-profile job as the ambassador to the UK during an international crisis, juggling her complex marriage to a political star and a growing geopolitical crisis.',
    isTopRated: true
  },
  {
    id: '2',
    title: 'The Royals',
    imageUrl: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseYear: 2021,
    maturityRating: 'U/A 13+',
    duration: '2h 30m',
    genre: ['Drama', 'Historical'],
    description: 'A fictional account of a contemporary British royal family and their lives in the palace.',
    isTopRated: true
  },
  {
    id: '3',
    title: 'Action Hero',
    imageUrl: 'https://images.pexels.com/photos/2733337/pexels-photo-2733337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseYear: 2022,
    maturityRating: 'U/A 16+',
    duration: '2h 15m',
    genre: ['Action', 'Adventure'],
    description: 'A celebrated action star finds himself caught in a real-life action scenario when his life takes an unexpected turn.',
    isTopRated: true
  },
  {
    id: '4',
    title: 'Club Mission',
    imageUrl: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseYear: 2023,
    maturityRating: 'A',
    duration: '2h 45m',
    genre: ['Action', 'Crime'],
    description: 'An undercover agent infiltrates a notorious criminal organization to expose its operations.',
    isTopRated: true
  },
  {
    id: '5',
    title: 'Lucky Baskhar',
    imageUrl: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseYear: 2023,
    maturityRating: 'U/A 13+',
    duration: '2h 20m',
    genre: ['Drama', 'Comedy'],
    description: 'The story of an ordinary bank employee whose life takes an extraordinary turn when he decides to game the system.',
    isTopRated: true
  },
  {
    id: '6',
    title: 'Laapata Ladies',
    imageUrl: 'https://images.pexels.com/photos/5503190/pexels-photo-5503190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseYear: 2023,
    maturityRating: 'U/A',
    duration: '2h 5m',
    genre: ['Comedy', 'Drama'],
    description: 'A heartwarming tale of two brides who get exchanged during a train journey and the chaos that ensues.',
    isTopRated: false
  },
  {
    id: '7',
    title: 'Inception',
    imageUrl: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseYear: 2010,
    maturityRating: 'U/A 13+',
    duration: '2h 28m',
    genre: ['Sci-Fi', 'Action', 'Thriller'],
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the task of planting an idea into the mind of a CEO.',
    isTopRated: false
  },
  {
    id: '8',
    title: 'The Matrix',
    imageUrl: 'https://images.pexels.com/photos/2516412/pexels-photo-2516412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseYear: 1999,
    maturityRating: 'A',
    duration: '2h 16m',
    genre: ['Sci-Fi', 'Action'],
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    isTopRated: false
  },
  {
    id: '9',
    title: 'Jigra',
    imageUrl: 'https://images.pexels.com/photos/3697742/pexels-photo-3697742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseYear: 2023,
    maturityRating: 'U/A 16+',
    duration: '2h 10m',
    genre: ['Drama', 'Thriller'],
    description: 'The journey of a sister who would go to any lengths to protect her brother.',
    isTopRated: false
  },
  {
    id: '10',
    title: 'Friends',
    imageUrl: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    releaseYear: 1994,
    maturityRating: 'U/A 13+',
    duration: '10 Seasons',
    genre: ['Comedy', 'Romance'],
    description: 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
    isTopRated: false
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Trending Now',
    movies: movies.filter(movie => movie.isTopRated)
  },
  {
    id: '2',
    name: 'Because you watched Jigra',
    movies: movies.filter(movie => 
      movie.genre.includes('Drama') || movie.genre.includes('Thriller')
    )
  },
  {
    id: '3',
    name: 'Critically Acclaimed',
    movies: movies.filter((_, index) => index % 2 === 0)
  },
  {
    id: '4',
    name: 'New Releases',
    movies: movies.filter(movie => movie.releaseYear >= 2022)
  }
];
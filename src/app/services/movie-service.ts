import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  private http = inject(HttpClient)
  private apiKey = environment.apiKey
  public wishList: Movie[] = []

  public movieList: Movie[] = []
  public filteredMovieList: Movie[] = []
  public selectedGenre: string = 'all'

  // TMDB Genre IDs mapping
  private genreMap: { [key: string]: number[] } = {
    'action': [28],
    'adventure': [12],
    'comedy': [35],
    'crime': [80],
    'documentaries': [99],
    'drama': [18],
    'fantasy': [14],
    'horror': [27],
    'romance': [10749],
    'sci-fi': [878],
    'thriller': [53]
  };

  getMovieList(): Observable<Movie[]> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`).pipe(
        map((Response: any) => Response.results)
      )
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`).pipe(
        map((Response: any) => Response)
      )
  }

  filterByGenre(genre: string) {
    this.selectedGenre = genre;

    if (genre === 'all') {
      this.filteredMovieList = [...this.movieList];
    } else {
      const genreIds = this.genreMap[genre] || [];
      this.filteredMovieList = this.movieList.filter(movie =>
        movie.genre_ids.some(id => genreIds.includes(id))
      );
    }
  }
}


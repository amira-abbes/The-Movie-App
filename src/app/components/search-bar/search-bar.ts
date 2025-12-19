import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from '../../services/movie-service';

@Component({
  selector: 'app-search-bar',
  imports: [FontAwesomeModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  faMagnifyingGlass = faMagnifyingGlass
  movieService = inject(MovieService)

  updateMovieList(title: string) {
    this.movieService.getMovieList().subscribe(
      Response => {
        this.movieService.movieList = Response;

        // Filter by search term
        const searchFiltered = Response.filter(
          movie => movie.title.toUpperCase().includes(title.toUpperCase())
        );

        // Apply genre filter on top of search results
        if (this.movieService.selectedGenre === 'all') {
          this.movieService.filteredMovieList = searchFiltered;
        } else {
          this.movieService.filteredMovieList = searchFiltered;
          this.movieService.filterByGenre(this.movieService.selectedGenre);
        }
      }
    );
  }

}

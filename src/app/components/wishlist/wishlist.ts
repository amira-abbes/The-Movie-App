import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {
  movieService = inject(MovieService)
  router = inject(Router)
  navigateTo(id: number) {
    this.router.navigate(['', id])
  }

  removeFromWishlist(event: Event, movie: any) {
    event.stopPropagation(); // Prevent card click navigation
    const index = this.movieService.wishList.findIndex(m => m.id === movie.id);
    if (index > -1) {
      this.movieService.wishList.splice(index, 1);
    }
  }
}

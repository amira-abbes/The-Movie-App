import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { MovieService } from '../../services/movie-service';

@Component({
    selector: 'app-category-navbar',
    imports: [],
    templateUrl: './category-navbar.html',
    styleUrl: './category-navbar.css',
})
export class CategoryNavbar {
    @ViewChild('categoryContainer') categoryContainer!: ElementRef;
    movieService = inject(MovieService);

    get selectedCategory(): string {
        return this.movieService.selectedGenre;
    }

    scrollLeft() {
        if (this.categoryContainer) {
            this.categoryContainer.nativeElement.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    }

    scrollRight() {
        if (this.categoryContainer) {
            this.categoryContainer.nativeElement.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    }

    selectCategory(category: string) {
        this.movieService.filterByGenre(category);
    }
}

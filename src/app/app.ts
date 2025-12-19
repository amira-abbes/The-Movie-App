import { Component, signal } from '@angular/core';
import { HeadBar } from "./components/head-bar/head-bar";
import { SearchBar } from './components/search-bar/search-bar';
import { CategoryNavbar } from './components/category-navbar/category-navbar';
import { MovieList } from "./components/movie-list/movie-list";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeadBar, SearchBar, CategoryNavbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movie-app');
}

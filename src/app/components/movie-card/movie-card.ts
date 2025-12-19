import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie-service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-movie-card',
  imports: [DatePipe],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard implements OnInit{
  route=inject(ActivatedRoute)
  movieService=inject(MovieService)

  movieId:number=0
  movie:Movie|null=null
  buttonDisabled:boolean=false

  ngOnInit(): void {
      this.movieId=this.route.snapshot.params['id']
      if(this.movieService.wishList.find(movie=>movie.id==this.movieId))
        this.buttonDisabled=true
       this.movieService.getMovieById(this.movieId).subscribe(
        Response=>this.movie=Response
      )}

  addToWishList(movie:Movie){
    this.movieService.wishList.push(movie)    
    this.buttonDisabled=true
  }  
}

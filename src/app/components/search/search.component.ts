import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes( params['termino'] );
      console.log( this.heroes );

    } );
  }

}

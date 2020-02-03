import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: '',
  };

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService ) { 
    activatedRoute.params.subscribe( params => {
      this.heroe = heroesService.getHeroe( params['id'] );
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}

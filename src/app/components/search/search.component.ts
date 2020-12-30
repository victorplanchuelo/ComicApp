import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino = '';

  constructor(private _activatedRoute: ActivatedRoute, private _heroeService: HeroesService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      this.termino = params.texto;
      this.heroes = this._heroeService.buscarHeroes(this.termino);
    });
  }

}

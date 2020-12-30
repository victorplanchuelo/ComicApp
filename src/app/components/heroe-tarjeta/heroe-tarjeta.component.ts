import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number | undefined;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(): void {
    // console.log(this.index)
     this._router.navigate(['/heroe', this.index]);

    // this.heroeSeleccionado.emit( this.index );
  }

}

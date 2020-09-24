import { Component, OnInit } from '@angular/core';
import { CartoonService } from '../../services/cartoon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cartoon',
  templateUrl: './crear-cartoon.component.html',
  styleUrls: ['./crear-cartoon.component.css']
})
export class CrearCartoonComponent implements OnInit {

  constructor(
    private readonly _cartoonService: CartoonService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  crearCartoon(cartoon){
    const obsCrear = this._cartoonService.crear(cartoon);
    obsCrear.subscribe(
      (datos) => {
        const url = ["/cartoon", "lista"];
        this.router.navigate(url);
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }

}

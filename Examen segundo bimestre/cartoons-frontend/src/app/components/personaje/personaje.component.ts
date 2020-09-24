import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  constructor(private readonly _router: Router) { }

  ngOnInit(): void {
    this._router.navigate(["/personaje", "lista"]);
  }

}

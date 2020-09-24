import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartoon',
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.css']
})
export class CartoonComponent implements OnInit {

  constructor(private readonly _router: Router) { }

  ngOnInit(): void {
    this._router.navigate(["/cartoon", "lista"]);
  }

}

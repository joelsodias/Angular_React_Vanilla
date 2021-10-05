import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() 
  msg: string | undefined
  legenda: string = "novo teste de parametros"

  constructor() { 

  }

  ngOnInit(): void {
    this.msg = this.msg + " teste2"
  }

  resetLegenda(): void {
    console.log("click resetLegenda")
    this.legenda = "Alterado"
  }

}

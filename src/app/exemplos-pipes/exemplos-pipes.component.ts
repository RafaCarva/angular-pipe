import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning Angular',
    rating: 4.46544,
    numeroPaginas: 314,
    preco: 44.45,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glgjpRP'
  };

  constructor() { }

  ngOnInit() {
  }

}

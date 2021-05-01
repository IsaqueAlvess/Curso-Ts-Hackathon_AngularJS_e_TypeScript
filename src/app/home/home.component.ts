import { Component, OnInit } from '@angular/core';
import { Produto } from '../Objetos/Produto';

import { ProdutoService } from './../service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prod: any
  produtos: Array<Produto> = []
  carregarLoading: boolean = false

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {

    this.produtoService.listar().subscribe(prods =>{
      setTimeout(() =>{
        this.carregarLoading = true
        this.produtos = prods
      }, 3000)
    
    })


  }

}
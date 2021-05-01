import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
 
import {DiasDaSemana} from './../dias-da-semana.enum';
import {Produto} from './../Objetos/Produto';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id: any
  texto: string = 'Teste'
  valor: number = 0
  endereco: [string, number] = ['Rua Teste Numero', 22]
  diaSemana: DiasDaSemana = DiasDaSemana.sab


  produto: Produto = new Produto(1,'Cadeira', 900)



  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.produto.preco = this.produto.aplicarDesconto(950)

    this.route.params.subscribe(parametros =>{
      if(parametros['id']){
        this.id = parametros['id']
      }
    })

    this.texto = this.retornarNome('Zeca')
  }

  retornarNome = (nome: string): string =>{
      return `${nome} da Silva`
  }

}

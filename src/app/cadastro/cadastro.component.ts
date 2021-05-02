import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
 
import { Produto } from './../Objetos/Produto';
import { ProdutoService } from "./../service/produto.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  id: any
 
  produto: Produto = new Produto(0,'',0,0)

  txtBotao: string = 'Salvar'


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,                   
    private prodService: ProdutoService

  ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(parametros =>{
      if(parametros['id']){ 
        this.txtBotao = 'Editar'
        this.id = parametros['id']
        this.prodService.buscarItemID(this.id).subscribe(prod =>{
          this.produto = prod
        })

        console.log(`ID enviado: ${this.id}`)
      }
    })
  }

  adicionar = () =>{

    if(this.txtBotao == 'Salvar'){
      this.prodService.adicionarItem(this.produto).subscribe(
        success => this.navegar('home'),
        error => console.log("Deu ruim!"),
        () => console.log('Requisição completa.') )
    }else{
        this.editar()
    }    

  }

  editar = () =>{
    this.prodService.editar(this.produto).subscribe(
      success => this.navegar('home'),
      error => console.log("Deu ruim!"),
      () => console.log('Requisição completa.')) 
  }

  navegar = (rota: any) => {
    this.router.navigate([rota])
  }


}

import { Injectable } from '@angular/core';
import { ProdutoModel } from '../produto/models/produto.model';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  listaProdutos(): ProdutoModel[] {
    return JSON.parse(localStorage.getItem('produtos')!) as ProdutoModel[] ?? [];
  }

  cadastrar(produto: ProdutoModel): void {
    let produtos:ProdutoModel[] = this.listaProdutos();
    produto.id = uuid.v4();
    produtos.push(produto);
    console.log(produtos);
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }

  editar(produto: ProdutoModel): void {
    let produtos = this.listaProdutos();

    for(let i = 0; i < produtos.length; i++) {
      if(produto.id === produtos[i].id) {
        produtos[i] = produto;
      }
    }

    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }

  excluir(id:string): void{
    let produtos:ProdutoModel[] = this.listaProdutos();

    let novosProdutos:ProdutoModel[] = [];
    for(let i = 0; i < produtos.length; i++){
      if(produtos[i].id !== id) {
        novosProdutos.push(produtos[i]);
      }
    }

    produtos = novosProdutos;

    localStorage.setItem('produtos', JSON.stringify(produtos));
  }

}

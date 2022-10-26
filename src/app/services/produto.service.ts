import { Injectable } from '@angular/core';
import { ProdutoModel } from '../produto/models/produto.model';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }


  cadastrar(produto: ProdutoModel): void {
    let produtos = this.listaProdutos();
    produto.id = uuid.v4();
    produtos.push(produto);
    localStorage['produtos'] = JSON.stringify(produtos);
  }

  atualizar(produto: ProdutoModel): void {
    let produtos = this.listaProdutos();

    for(let i = 0; i < produtos.length; i++) {
      if(produto.id === produtos[i].id) {
        produtos[i] = produto;
      }
    }

    produtos.push(produto);
    localStorage['produtos'] = JSON.stringify(produtos);
  }

  listaProdutos(): ProdutoModel[] {
    return JSON.parse(localStorage['produtos']) ?? [];
  }
}

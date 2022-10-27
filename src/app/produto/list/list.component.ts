import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProdutoService } from 'src/app/services/produto.service';
import { ProdutoModel } from '../models/produto.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  produtos!:ProdutoModel[];
  displayedColumns: string[] = ["nome", "quantidade", "fornecedor", "validade", "categoria", "editar", "excluir"];
  dataSource!:MatTableDataSource<ProdutoModel>;
  clickedRows!:ProdutoModel;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.listaProdutos();
    this.dataSource = new MatTableDataSource(this.produtos);
  }

  listarProdutos(): ProdutoModel[]{
    return this.produtos;
  }

  excluir(id:string): void{
    this.produtoService.excluir(id);
  }
  editar(id:string): void{

  }

}

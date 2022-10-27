import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';
import { ProdutoModel } from '../models/produto.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  produtoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      fornecedor: ['', [Validators.required]],
      validade: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    })
  }

  cadastrar() {
    const produto = this.produtoForm.getRawValue() as ProdutoModel;
    this.produtoService.cadastrar(produto);
  }

  get nome() { return this.produtoForm.get('nome')!; }
  get quantidade() { return this.produtoForm.get('quantidade')!; }
  get fornecedor() { return this.produtoForm.get('fornecedor')!; }
  get validade() { return this.produtoForm.get('validade')!; }
  get categoria() { return this.produtoForm.get('categoria')!; }

}

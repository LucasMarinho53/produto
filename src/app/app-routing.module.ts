import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './produto/create/create.component';
import { ListComponent } from './produto/list/list.component';

const routes: Routes = [
  {
  path: "",
  redirectTo: "produto/list",
  pathMatch: "full",
  },
  {
  path: "produto/create",
  component: CreateComponent,
  },
  {
  path: "produto/list",
  component: ListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

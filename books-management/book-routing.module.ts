import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {BookListComponent} from "./book-list/book-list.component";
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookUpdateComponent} from "./book-update/book-update.component";
import {BookDeleteComponent} from "./book-delete/book-delete.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [
  { path: 'book-list', component: BookListComponent },
  { path: 'book-create', component: BookCreateComponent },
  { path: 'book-update/:id', component: BookUpdateComponent },
  { path: 'book-delete/:id', component: BookDeleteComponent },
  { path: 'book-detail/:id', component: BookDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookRoutingModule { }

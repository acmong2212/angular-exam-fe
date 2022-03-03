import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  books!: Book[];
  book: Book = new Book(0, '','' ,'');

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  createBook() {
    this.bookService.createBook(this.book).subscribe(() => {
      alert("Create Success!")
      this.router.navigate(['/book/book-list'])
    })
  }

}

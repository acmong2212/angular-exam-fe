import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {Book} from "../model/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private bookService: BookService) {
    this.findAllBook();
  }

  ngOnInit(): void {
  }

  findAllBook() {
    this.bookService.findAll().subscribe(data => {
      this.bookList = data;
    })
  }
}

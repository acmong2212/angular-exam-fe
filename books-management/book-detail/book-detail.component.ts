import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Book} from "../model/book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id!: number;
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.bookDetail()
    });
  }

  ngOnInit(): void {

  }

  book: Book = new Book(0, '','' ,'');

  bookDetail() {
    this.bookService.findBookById(this.id).subscribe(data => {
      this.book = data
      console.log(this.book)
    })
  }
}

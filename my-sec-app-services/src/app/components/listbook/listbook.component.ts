import { Component } from '@angular/core';
import { Book } from '../../model/Book';
import { BookdaoService } from '../../services/bookdao.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent {

  bookarr:Book[];
  bookser:BookdaoService;
  deletestatus:string;
  selectedBook!:Book ;

  constructor(bookser:BookdaoService) 
  {
    this.bookser=bookser;
    this.bookarr=this.bookser.getAllBooks();
    this.deletestatus='';
    
  }

  deleteBook(bkid:number):void
  {
    this.deletestatus = this.bookser.deleteBook(bkid);
    this.bookarr=this.bookser.getAllBooks();
  }

  updateBook(b:Book):void
  {
    this.bookser.updateBook(b);
    // this.bookarr=this.bookser.getAllBooks();
  }

  openForm2(b:Book):void
  {
    this.selectedBook=b;
  }

}

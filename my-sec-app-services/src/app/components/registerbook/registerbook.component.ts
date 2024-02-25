import { Component } from '@angular/core';
import { BookdaoService } from '../../services/bookdao.service';
import { Book } from '../../model/Book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registerbook',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './registerbook.component.html',
  styleUrl: './registerbook.component.css'
})
export class RegisterbookComponent {

  private bookser: BookdaoService ;
  mybook:Book;
  status:string;
  bkidcnt:number;

  constructor(bookser:BookdaoService) {
    this.bookser = bookser;
    this.bkidcnt=1;
    this.mybook = new Book(this.bkidcnt,'Learn Angular',700);
    this.status = '';
  }

  addBook():void
  {
    if(this.mybook.bkid>0 && this.mybook.bkname!='' && this.mybook.bkprice>0)
    {
      this.bookser.addBook(this.mybook);
      this.status='book'+this.mybook.toString()+' added successfully!'
      this.bkidcnt++;
    }
    else
    {
      this.status='book validation failed!'
    }
    this.mybook = new Book(this.bkidcnt);
  }
}

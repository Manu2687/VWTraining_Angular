import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Book } from './model/Book';

@Component({
  selector: 'app-mybook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mybook.component.html',
  styleUrl: './mybook.component.css'
})
export class MybookComponent {
  mybook1: Book;
  bookarr: Book[];
  status:string;

  constructor()
  {
    console.log("Inside app component constructor")
    this.mybook1=new Book(2,"Learn Python",4000);
    console.log(this.mybook1);
    this.bookarr = [];
    this.status='';
    
  }

  addBook():void
  {
    console.log(this.mybook1);
    if(this.mybook1.bkid!=0 && this.mybook1.bkname!='' && this.mybook1.bkprice!=0)
    {
      
      this.bookarr.push(this.mybook1);
      // this.temp = new Book(this.mybook1.bkid,this.mybook1.bkname,this.mybook1.bkprice);
      this.status = "book submitted:  "+this.mybook1.toString();
      this.mybook1 = new Book();
    }
    else 
    {
      this.status="book can not be submit, Validation failed"
    }
  } 
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Book } from './model/Book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  // template:`<p>Hi {{ title }} </p>
  //           This is first angular app`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title :string;
  mybook:{name:string, price:number};
  mybook1: Book;
  bookarr: Book[];
  status:string;
  temp!:Book;

  constructor()
  {
    this.title='my-first-angapp';
    console.log("Inside app component constructor")
    this.mybook1=new Book(2,"Learn Python",4000);
    this.mybook = {name:"Learn Angular" ,price:5000};
    console.log(this.mybook1);
    this.bookarr = [];
    this.status='';
    
  }

  // changebookname(bkname_ipcntrl:HTMLInputElement):void
  // {
  //   console.log("Inside changebookname function");
  //   console.dir(bkname_ipcntrl);
  //   console.log(bkname_ipcntrl);
  //   this.mybook.name=bkname_ipcntrl.value;
  // }

  changebookname1(bkname_ipcntrl:string):void
  {
    console.log("Inside changebookname1 function");
    this.mybook.name=bkname_ipcntrl;
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







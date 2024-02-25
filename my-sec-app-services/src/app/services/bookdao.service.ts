import { Injectable } from '@angular/core';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookdaoService {

  bookarr:Book[]

  constructor() {

    this.bookarr = [];

   }

   addBook(b:Book):void
   {
      console.log(b);
      this.bookarr.push(b);
    
   }

  getAllBooks():Book[]
   {
    return this.bookarr;
   }

   deleteBook(bkid:number):string
   {
    // const bkid = this.bookarr.indexOf(b);
    // if(bkid!==-1){
    //   this.bookarr.splice(bkid,1);
    //   console.log(b+" deleted!")
    // } else {
    //   console.log("Id does not exists!")
    // }
    this.bookarr = this.bookarr.filter(book => book.bkid !== bkid);
    
    return ("Book with id "+bkid+" deleted successfully!");
  }

   updateBook(b:Book):void
   {
    this.bookarr = this.bookarr.filter(book => book.bkid == b.bkid);
    this.addBook(b);
   }
}

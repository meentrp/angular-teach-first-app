import { Component } from '@angular/core';
import{ Card }from './card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Cards: Card[] = []; 
  get sorted():Card[]{
    console.log('access');
    return this.Cards.sort(
      (a,b)=>b.vote-a.vote
    );
  } 
  onclick(firstName:HTMLInputElement,lastName:HTMLInputElement){
    console.log(firstName.value,lastName.value,0); 
    firstName.value ='';
    lastName.value = '';
    
    
    const card=new Card(firstName.value,lastName.value,0);
    this.Cards.push(card);
  }
}

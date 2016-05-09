import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import { JuWarning } from './warning.component';


@Component({  
  selector: 'app-test',
  template:`
  {{name}}
  
  <ju-warning title="Test!" *ngIf="showWarning" (closeWarning)="showWarning=false"></ju-warning>
  
  <div *ngIf="showWarning" class="warning">This is a BIG warning!!!</div>
  <button (click)="showWarning=!showWarning">Toggle</button>
  `,
  styles:[`button {
    
    background-color:red;
    }
    .warning {
      color:white;
      box-shadow:2px 2px 2px rgba(0,0,0,0.8);
      background-color:#333;
      padding:10px;
      border-radius:5px;
    }
  `],
  directives:[NgIf,JuWarning]

})
export class AppTest {
  name = 'AppTest';
  showWarning=false;
  
  constructor(){
    setInterval(()=>{
      
      console.log('tick');
    },5000)
  }
  
  close(){
    console.log('emitted close');
  }
  
}

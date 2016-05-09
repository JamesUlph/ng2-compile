var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { JuWarning } from './warning.component';
export let AppTest = class AppTest {
    constructor() {
        this.name = 'AppTest';
        this.showWarning = false;
        setInterval(() => {
            console.log('tick');
        }, 5000);
    }
    close() {
        console.log('emitted close');
    }
};
AppTest = __decorate([
    Component({
        selector: 'app-test',
        template: `
  {{name}}
  
  <ju-warning title="Test!" *ngIf="showWarning" (closeWarning)="showWarning=false"></ju-warning>
  
  <div *ngIf="showWarning" class="warning">This is a BIG warning!!!</div>
  <button (click)="showWarning=!showWarning">Toggle</button>
  `,
        styles: [`button {
    
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
        directives: [NgIf, JuWarning]
    }), 
    __metadata('design:paramtypes', [])
], AppTest);
//# sourceMappingURL=test.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppTest } from './test';
let HelloCmp = class HelloCmp {
    constructor() {
        this.name = 'World';
    }
};
HelloCmp = __decorate([
    Component({
        selector: 'hello-app',
        template: `
    <h1>Hello, {{name}}!</h1>
    {{name}}
    
    <app-test></app-test>
    <app-test></app-test>
    <app-test></app-test>
    <app-test></app-test>
    
    <label> Say hello to: <input [value]="name" (input)="name = $event.target.value"></label>
`,
        directives: [AppTest]
    }), 
    __metadata('design:paramtypes', [])
], HelloCmp);
bootstrap(HelloCmp, []);
//# sourceMappingURL=main.js.map
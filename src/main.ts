import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {AppTest} from './test';

@Component({
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
directives:[AppTest]
})
class HelloCmp {
  name = 'World';
}

bootstrap(HelloCmp,[]);
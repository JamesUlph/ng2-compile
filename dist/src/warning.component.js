var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Output, EventEmitter, Component } from '@angular/core';
export let JuWarning = class JuWarning {
    constructor() {
        this.closeWarning = new EventEmitter();
        this.name = 'World';
        this.timer = setTimeout(() => {
            console.log('closing');
            this.closeWarning.emit({});
        }, 2000);
    }
    ngOnDestroy() {
        console.log('end');
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
};
__decorate([
    Input(), 
    __metadata('design:type', String)
], JuWarning.prototype, "title", void 0);
__decorate([
    Output(), 
    __metadata('design:type', Object)
], JuWarning.prototype, "closeWarning", void 0);
JuWarning = __decorate([
    Component({
        selector: 'ju-warning',
        template: `
  
    <h1>WARNING! </h1>
    <div class="warning">{{title}}</div>
    
    
    
    
`,
        styles: [`

  .warning {
      color:white;
      box-shadow:2px 2px 2px rgba(0,0,0,0.8);
      background-color:#633;
      padding:10px;
      border-radius:5px;
}
`]
    }), 
    __metadata('design:paramtypes', [])
], JuWarning);
//# sourceMappingURL=warning.component.js.map
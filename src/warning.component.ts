import {OnDestroy,OnInit, Input,Output, EventEmitter, Component} from '@angular/core';



@Component({
  selector: 'ju-warning',
  template: `
  
    <h1>WARNING! </h1>
    <div class="warning">{{title}}</div>
    
    
    
    
`,
styles:[`

  .warning {
      color:white;
      box-shadow:2px 2px 2px rgba(0,0,0,0.8);
      background-color:#633;
      padding:10px;
      border-radius:5px;
}
`]

})
export class JuWarning {
  @Input() title:string;
  @Output() closeWarning = new EventEmitter();
  timer:any; 
  name = 'World';
  
  constructor(){
    this.timer=setTimeout(()=>{
      console.log('closing');
      this.closeWarning.emit({});
    },2000);
  }
  

ngOnDestroy(){
  console.log('end');
  if (this.timer) {
    clearTimeout(this.timer);
  }
}
  
  
}


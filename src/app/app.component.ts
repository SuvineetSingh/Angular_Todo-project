import { Component } from '@angular/core';

@Component({
  selector: 'app-root',// this is a component for app-root tag
  templateUrl: './app.component.html', //kis template se link karna hai is compomemt.ts ko
  styleUrls: ['./app.component.css'] //styling kaha se leni hai
})
export class AppComponent {
  title = 'todo-list';
  constructor(){
    // setTimeout(()=>{
    //   this.title = "First Angular todo"
    // },2000)
  }
}

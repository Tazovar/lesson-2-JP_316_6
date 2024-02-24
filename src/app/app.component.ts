import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str: string = "tazo";
  test:string | undefined;  
  number: number = 14;
  bool: boolean = false;
  array:any = [ "tazo", 124,123,false,false,undefined];
  constructor(){
    this.test = "12";
  }
}
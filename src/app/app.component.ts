import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public price! : number;

public discount! : number;

  
  calculate() {
    let afterDiscount : any = this.price - (this.price * this.discount / 100);
    document.getElementById('afterDiscount')!.innerHTML=afterDiscount.toFixed(2);
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `


<h3>Counter {{counter}}</h3>

<button type="button" class="btn btn-outline-primary" (click)="increaseBy(1)">+1</button>
<button type="button" class="btn btn-outline-primary" (click)="resetCounter()">Reset</button>
<button type="button" class="btn btn-outline-primary" (click)="increaseBy(-1)">-1</button>


  `
})

export class CounterComponent  {
  constructor() { }

  
  public counter: number = 10;


  increaseBy(value: number): void{
    this.counter += value;
  }
  resetCounter(): void{
    this.counter =10;
  }





}

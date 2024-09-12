
import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {

  @Input()
  public characterList: Character[] =[{
    name: 'Trunks',
    power: 10,
  }

  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  // public onDelete2 = new EventEmitter<number>(); // otra forma de escribirlo



  onDeleteCharacter(id?: string):void{

    //TODO: Emitirel ID del personaje
    if(!id) return;
    this.onDelete.emit(id);
    console.log({id});
  }

}

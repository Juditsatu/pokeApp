import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokemon-input',
  templateUrl: './pokemon-input.component.html'
})
export class PokemonInputComponent implements OnInit {

  debouncer: Subject<string> = new Subject();
  
  term: string = '';

  ngOnInit(): void {
  }

}

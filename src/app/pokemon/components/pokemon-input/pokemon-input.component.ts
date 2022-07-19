import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokemon-input',
  templateUrl: './pokemon-input.component.html',
  styleUrls: ['./pokemon-input.component.scss']
})
export class PokemonInputComponent implements OnInit {

  debouncer: Subject<string> = new Subject();
  
  term: string = '';

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Hero, HEROES } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES
  selectedHero?: Hero

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
    // console.log(this.selectedHero)
  }

}

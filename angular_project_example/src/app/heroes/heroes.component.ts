import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes?: Hero[];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(hero => this.heroes = hero);
  }
}

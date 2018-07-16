import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService],
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService) { }
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }
  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  public gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

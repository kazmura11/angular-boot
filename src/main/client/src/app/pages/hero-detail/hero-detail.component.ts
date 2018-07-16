import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
    providers: [HeroService],
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }
    @Input() public hero: Hero;
    ngOnInit(): void {
        this.route.paramMap
            .pipe(
                switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id'))),
            ).subscribe((hero) => this.hero = hero);
    }
    public goBack(): void {
        this.location.back();
    }
}

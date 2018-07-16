import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Hero } from '../models/hero';

@Injectable()
export class HeroService {
    private heroUrl = '/api/frontend/heroes';

    constructor(private httpClient: HttpClient) { }

    public getHeroes(): Observable<Hero[]> {
        return this.httpClient.get<Hero[]>(this.heroUrl)
            .catch((error) => {
                console.error('An error occurred', error);
                return Observable.throw(error);
            });
    }

    public getHero(id: number): Observable<Hero> {
        return this.getHeroes()
             .map((heroes) => heroes.find((hero) => hero.id === id));
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Hero } from '../models/hero';

@Injectable()
export class HeroService {
    private heroUrl = '/api/frontend/heroes';

    constructor(private httpClient: HttpClient) { }

    public getHeroes(): Observable<Hero[]> {
        return this.httpClient.get<Hero[]>(this.heroUrl)
            .pipe(catchError((error) => Observable.throw(error)));
    }

    public getHero(id: number): Observable<Hero> {
        return this.getHeroes()
             .pipe(map((heroes) => heroes.find((hero) => hero.id === id)));
    }
}

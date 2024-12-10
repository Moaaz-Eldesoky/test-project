import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, of, retry } from 'rxjs';
import { map, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  x: number = 0;
  constructor(private http: HttpClient) {}
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  getNumbers(): Observable<number> {
    return of(1, 2, 3, 4, 5).pipe(
      filter((value) => value % 2 === 0),
      map((value) => value * 10)
    );
  }
  dedo(): Observable<number> {
    return of(1, 5, 6, 8, 2, 9, 7, 3, 4).pipe(
      filter((e) => e >= 5),
      map((e) => e * 10)
    );
  }
  stringMeth(): Observable<string> {
    return of('ahmed', 'mohammed', 'nada', 'aya', 'sayed').pipe(
      map((e) => e.toUpperCase()),
      filter((e) => e.includes('H'))
    );
  }
  getPosts(): Observable<string[]> {
    return this.http
      .get<{ userId: number; id: number; title: string; body: string }[]>(
        this.url
      )
      .pipe(
        map((posts) => posts.map((post) => post.title)),
        map((titles) => titles.filter((title) => title.split(' ').length < 5))
      );
  }
  rxjs(): Observable<string> {
    const names = of('ahmed', 'mohammed', 'nada', 'aya', 'sayed');
    return names.pipe(
      catchError((error) => {
        console.log('catch errro' + error);
        return of('moaaz', 'marwan');
      }),
      map((name) => name.toUpperCase()),
      filter((name) => name.length > 3),
      finalize(() => {
        console.log(
          'this step is to make something on the end of this subscription now i will increase var x with 1'
        );
        this.x += 1;
        console.log('now X = ' + this.x);
      })
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoService } from './services/demo.service';
import { error } from 'node:console';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'test-project';
  constructor(private demo: DemoService) {}
  ngOnInit() {
    // this.demo.getNumbers().subscribe({
    //   next: (value) => console.log('value =' + value),
    //   complete: () => console.log('complate'),
    // });
    // this.demo.dedo().subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('complate'),
    // });
    // this.demo.stringMeth().subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('compleated'),
    // });
    // this.demo.getPosts().subscribe({
    //   next: (value) => console.log(JSON.stringify(value)),
    //   complete: () => console.log('done'),
    // });
    this.demo.rxjs().subscribe({
      next: (value) => console.log('received values:' + value),
      error: (e) => console.log('error msg' + e),
      complete: () => console.log('compleated'),
    });
  }
}

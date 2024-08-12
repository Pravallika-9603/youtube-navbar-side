import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {
  shorts = [
    { title: 'Short Video 1', thumbnail: 'assets/short1.jpg' },
    { title: 'Short Video 2', thumbnail: 'assets/short2.jpg' },
    { title: 'Short Video 3', thumbnail: 'assets/short3.jpg' },
    { title: 'Short Video 4', thumbnail: 'assets/short4.jpg' },
    
  ];

  constructor() { }

  ngOnInit(): void { }
}

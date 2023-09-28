import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maldive',
  templateUrl: './maldive.component.html',
  styleUrls: ['./maldive.component.scss']
})
export class MaldiveComponent implements OnInit{
    ngOnInit(): void {
        window.scrollTo(0,0)
    }

}

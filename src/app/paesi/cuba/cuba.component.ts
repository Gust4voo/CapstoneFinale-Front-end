import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuba',
  templateUrl: './cuba.component.html',
  styleUrls: ['./cuba.component.scss']
})
export class CubaComponent implements OnInit{
    ngOnInit(): void {
        window.scrollTo(0,0)
    }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grecia',
  templateUrl: './grecia.component.html',
  styleUrls: ['./grecia.component.scss']
})
export class GreciaComponent implements OnInit{
    ngOnInit(): void {
        window.scrollTo(0,0)
    }

}

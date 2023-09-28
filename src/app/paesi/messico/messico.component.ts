import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messico',
  templateUrl: './messico.component.html',
  styleUrls: ['./messico.component.scss']
})
export class MessicoComponent implements OnInit{
    ngOnInit(): void {
        window.scrollTo(0,0)
    }

}

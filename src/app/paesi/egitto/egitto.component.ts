import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-egitto',
  templateUrl: './egitto.component.html',
  styleUrls: ['./egitto.component.scss']
})
export class EgittoComponent implements OnInit{
    ngOnInit(): void {
        window.scrollTo(0,0)
    }

}

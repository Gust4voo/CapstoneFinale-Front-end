import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bagaglio',
  templateUrl: './bagaglio.component.html',
  styleUrls: ['./bagaglio.component.scss']
})
export class BagaglioComponent implements OnInit{
    ngOnInit(): void {
        window.scrollTo(0,0)
    }

}

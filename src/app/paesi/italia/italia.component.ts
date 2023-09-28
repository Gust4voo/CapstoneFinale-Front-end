import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './italia.component.html',
  styleUrls: ['./italia.component.scss']
})
export class ItaliaComponent implements OnInit{
    ngOnInit(): void {
        window.scrollTo(0,0)
    }

}

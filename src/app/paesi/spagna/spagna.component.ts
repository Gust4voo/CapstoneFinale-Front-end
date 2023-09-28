import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spagna',
  templateUrl: './spagna.component.html',
  styleUrls: ['./spagna.component.scss']
})
export class SpagnaComponent implements OnInit{
    ngOnInit(): void {
        window.scrollTo(0,0)
    }

}

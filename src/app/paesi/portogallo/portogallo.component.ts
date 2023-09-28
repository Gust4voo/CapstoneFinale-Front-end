import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portogallo',
  templateUrl: './portogallo.component.html',
  styleUrls: ['./portogallo.component.scss']
})
export class PortogalloComponent implements OnInit{
    ngOnInit(): void {
        window.scrollTo(0,0)
    }

}

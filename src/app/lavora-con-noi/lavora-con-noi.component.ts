import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lavora-con-noi',
  templateUrl: './lavora-con-noi.component.html',
  styleUrls: ['./lavora-con-noi.component.scss']
})
export class LavoraConNoiComponent implements OnInit{
    ngOnInit(): void {
        window.scrollTo(0,0)
    }

}

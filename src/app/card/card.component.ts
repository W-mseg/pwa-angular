import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() source;
@Input() alt;
@Input() text;
  constructor() { }

  ngOnInit(): void {
  }

}

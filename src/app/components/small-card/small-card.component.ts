import { Component, Input, OnInit } from '@angular/core';
import { DataFake } from 'src/app/pages/data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.component.responsive.css']
})
export class SmallCardComponent implements OnInit {

  smallCardImg: string = ''

  smallCardTitle: string = ''

  @Input()
  id: string | null = ''

  constructor() { }

  setValuesToSmallCard(id: string | null) {
    const result = DataFake.find((article) => article.id === id)
    if (result) {
      this.smallCardImg = result.contentImg
      this.smallCardTitle = result.title
    }
  }

  ngOnInit(): void {
    this.setValuesToSmallCard(this.id)
  }

}

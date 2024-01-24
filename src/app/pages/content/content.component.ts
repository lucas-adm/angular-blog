import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFake } from '../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.component.responsive.css']
})
export class ContentComponent implements OnInit {

  contentImg: string = ''

  contentTitle: string = ''

  contentDescription: string = ''

  private id: string | null = ''

  constructor(
    private route: ActivatedRoute
  ) { }

  setValuesToComponent(id: string | null) {
    const result = DataFake.filter(article => article.id == id)[0]
    this.contentImg = result.contentImg
    this.contentTitle = result.title
    this.contentDescription = result.description
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(value => this.id = value.get('id'))

    this.setValuesToComponent(this.id)

  }

}

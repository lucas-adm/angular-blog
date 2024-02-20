import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFake } from 'src/app/pages/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.component.responsive.css']
})
export class BigCardComponent implements OnInit {

  bigCardImg: string = ''

  bigCardTitle: string = ''

  bigCardDescription: string = ''

  id: string | null = '1'

  constructor(private route: ActivatedRoute) { }

  summarizeDescription(description: string, wordCount: number): string {
    const words = description.split(' ');
    const summarizedWords = words.slice(0, wordCount);
    return summarizedWords.join(' ') + '...';
  }

  setValuesToBigCard(id: string | null) {
    const result = DataFake.find(article => article.id === id);
    if (result) {
      this.bigCardImg = result.contentImg;
      this.bigCardTitle = result.title;
      this.bigCardDescription = this.summarizeDescription(result.description, 25);
    }
  }

  ngOnInit(): void {
    const id = '1';
    this.setValuesToBigCard(id);
  }
}

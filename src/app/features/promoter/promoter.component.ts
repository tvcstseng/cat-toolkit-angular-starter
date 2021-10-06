import { Component, OnInit } from '@angular/core';
import { EventDto } from '@app/features/dto/event-dto';
import { PromoterDto } from '@app/features/dto/promoter-dto';

@Component({
  selector: 'app-promoter',
  templateUrl: './promoter.component.html',
  styleUrls: ['./promoter.component.scss'],
})
export class PromoterComponent implements OnInit {
  focussedPromoterDto: PromoterDto = new PromoterDto('1', 'Fito');

  constructor() {}

  ngOnInit(): void {}
}

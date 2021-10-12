import { Component, OnInit } from '@angular/core';
import { PromoterDto } from '@app/features/dto/promoter-dto';

@Component({
  selector: 'app-promoter-selected',
  templateUrl: './promoter-selected.component.html',
  styleUrls: ['./promoter-selected.component.scss'],
})
export class PromoterSelectedComponent implements OnInit {
  focussedPromoterDto: PromoterDto = new PromoterDto('1', 'Fito');

  constructor() {}

  ngOnInit(): void {}
}

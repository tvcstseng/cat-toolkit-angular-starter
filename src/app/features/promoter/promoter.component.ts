import { Component, OnInit } from '@angular/core';
import { PromoterDto } from '@app/features/dto/promoter-dto';
import { ShellService } from '@app/shell/shell.service';

@Component({
  selector: 'app-promoter',
  templateUrl: './promoter.component.html',
  styleUrls: ['./promoter.component.scss'],
})
export class PromoterComponent implements OnInit {
  focussedPromoterDto: PromoterDto = new PromoterDto('1', 'Fito');

  constructor(private shellService: ShellService) {}

  ngOnInit(): void {
    this.shellService.setDetailRouterEnabled(true);
    console.log('PromoterComponent: true');
  }
}

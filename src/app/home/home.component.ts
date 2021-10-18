import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ShellService } from '@app/shell/shell.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit, OnDestroy {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1077, 10, 1019, 1033, 1043].map((n) => `https://picsum.photos/id/${n}/1920/1080`);

  constructor(private shellService: ShellService) {}

  ngOnInit() {
    this.shellService.setDetailRouterEnabled(false);
    console.log('HomeComponent: false');
  }

  ngOnDestroy() {
    this.shellService.setDetailRouterEnabled(true);
    console.log('HomeComponent: true');
  }
}

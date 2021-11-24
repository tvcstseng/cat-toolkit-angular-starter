import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShellService } from '@app/shell/shell.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit, OnDestroy {
  constructor(private shellService: ShellService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/' + this.router.url + '/', { outlets: { detailEvent: 'list' } }]);
    console.log('EventComponent: true');
  }

  ngOnDestroy() {}
}

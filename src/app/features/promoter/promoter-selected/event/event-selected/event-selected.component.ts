import { Component, OnInit } from '@angular/core';
import { EventDto } from '@app/features/dto/event-dto';
import { ShellService } from '@app/shell/shell.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-selected',
  templateUrl: './event-selected.component.html',
  styleUrls: ['./event-selected.component.scss'],
})
export class EventSelectedComponent implements OnInit {
  focussedEventDto: EventDto = new EventDto('', 'eventName', 'venueName', '', '', '', '', 0, 0, false);

  constructor(private shellService: ShellService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // this.closeDetailViaParent();
  }

  // public closeDetailViaParent(): void {
  //   this.router.navigate(
  //     [
  //       // NOTE: No relative-path navigation is required because we are accessing
  //       // the parent's "activatedRoute" instance. As such, this will be executed
  //       // as if we were doing this in the parent view component.
  //       {
  //         outlets: {
  //           primary: this.focussedEventDto.uuid,
  //           detail: 'edit'
  //         }
  //       }
  //     ],
  //     {
  //       relativeTo: this.activatedRoute // <--- PARENT activated route.
  //     }
  //   );
  // }
}

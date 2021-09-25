import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookerComponent } from '@app/features/booker/booker.component';
import { BookerRoutingModule } from '@app/features/booker/booker-routing.module';

@NgModule({
  declarations: [BookerComponent],
  imports: [CommonModule, BookerRoutingModule],
})
export class BookerModule {}

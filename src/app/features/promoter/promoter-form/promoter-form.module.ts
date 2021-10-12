import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PromoterFormComponent } from '@app/features/promoter/promoter-form/promoter-form.component';

@NgModule({
  declarations: [PromoterFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PromoterFormComponent,
      },
    ]),
  ],
})
export class PromoterFormModule {}

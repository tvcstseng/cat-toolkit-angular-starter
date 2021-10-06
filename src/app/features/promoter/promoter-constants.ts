// Angular Modules
import { Injectable } from '@angular/core';

@Injectable()
export class PromoterConstants {
  static focussedPromoterId: string;
  static focussedEventId: string;

  public static get PROMOTER_ID_PARAM(): string {
    return '1';
  }

  public static set PROMOTER_ID_PARAM(promoterId: string) {
    this.focussedPromoterId = promoterId;
  }

  public static get EVENT_ID_PARAM(): string {
    return this.focussedEventId;
  }

  public static set EVENT_ID_PARAM(eventId: string) {
    this.focussedEventId = eventId;
  }
}

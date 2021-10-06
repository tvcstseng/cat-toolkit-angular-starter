// Angular Modules
import { Injectable } from '@angular/core';

@Injectable()
export class PromoterConstants {
  static focussedPromoterId: string;
  static focussedEventId: string;

  public static get PROMOTER_ID_PARAM(): string {
    return 'promoterUuid';
  }

  public static get PROMOTER_ID_PARAM_VALUE(): string {
    return this.focussedPromoterId;
  }

  public static set PROMOTER_ID_PARAM_VALUE(promoterId: string) {
    this.focussedPromoterId = promoterId;
  }

  public static get EVENT_ID_PARAM(): string {
    return 'eventUuid';
  }

  public static get EVENT_ID_PARAM_VALUE(): string {
    return this.focussedEventId;
  }

  public static set EVENT_ID_PARAM_VALUE(eventId: string) {
    this.focussedEventId = eventId;
  }
}

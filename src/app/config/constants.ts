// Angular Modules
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class Constants {
  public readonly Api_Endpoint: string = environment.Api_Endpoint;
  public readonly Api_Mock_Endpoint: string = environment.Api_Mock_Endpoint;

  public readonly api_url_event: string = environment.Api_event_url;
  public readonly api_url_venue: string = environment.Api_venue_url;

  // Running app constants
  public readonly PROMOTER_ID_PARAM: string;
  public readonly EVENT_ID_PARAM: string;
}

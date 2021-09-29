export class EventDto {
  uuid: string;
  name: string;
  venue: string;

  constructor(uuid: string, name: string, venue: string) {
    this.uuid = uuid;
    this.name = name;
    this.venue = venue;
  }
}

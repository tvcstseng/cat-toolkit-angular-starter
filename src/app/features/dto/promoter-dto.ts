export class PromoterDto {
  uuid: string;
  name: string;

  constructor(uuid: string, name: string) {
    this.uuid = uuid;
    this.name = name;
  }
}

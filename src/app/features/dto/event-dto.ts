export class EventDto {
  uuid: string;
  name: string;
  venue: string;
  start: string;
  timeZoneStart: string;
  end: string;
  voucherQty: number;
  voucherQtyPerCustomer: number;
  timeZoneEnd: string;
  ageRequirement: boolean;

  constructor(
    uuid: string,
    name: string,
    venue: string,
    start: string,
    timeZoneStart: string,
    end: string,
    timeZoneEnd: string,
    voucherQty: number,
    voucherQtyPerCustomer: number,
    ageRequirement: boolean
  ) {
    this.uuid = uuid;
    this.name = name;
    this.venue = venue;
    this.start = start;
    this.timeZoneStart = timeZoneStart;
    this.end = end;
    this.timeZoneEnd = timeZoneEnd;
    this.voucherQty = voucherQty;
    this.voucherQtyPerCustomer = voucherQtyPerCustomer;
    this.ageRequirement = ageRequirement;
  }
}

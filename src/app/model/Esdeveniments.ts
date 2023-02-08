export class Event {
  name: string;
  type: any;
  date: any;
  place: any;
  price: any;

  constructor(name: string, type: any, date: any, place: any, price: any) {
    this.name = name;
    this.type = type;
    this.date = date;
    this.place = place;
    this.price = price;
  }

  get Name(): string {
    return this.name;
  }

  set Name(name: string) {
    this.name = name;
  }

  get Type(): any {
    return this.type;
  }

  set Type(type: any) {
    this.type = type;
  }

  get Date(): any {
    return this.date;
  }

  set Date(date: any) {
    this.date = date;
  }

  get Place(): any {
    return this.place;
  }

  set Place(place: any) {
    this.place = place;
  }

  get Price(): any {
    return this.price;
  }

  set Price(price: any) {
    this.price = price;
  }
}

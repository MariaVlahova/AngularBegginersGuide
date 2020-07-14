export class Payload {
//this is object class
  constructor(id: string, name: string, error: string) {
    this.id = id;
    this.name = name;
    this.errorMassage = error ;
  }

  id: string ;
  name: string ;
  errorMassage: string;
}

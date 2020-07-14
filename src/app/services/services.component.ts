import { Component, OnInit } from '@angular/core';
import {CrudService} from './crud.service';
import {Payload} from './payload';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  // this is dependancy injection
  payload: Payload;
  // tslint:disable-next-line:variable-name
  constructor(private _crudService: CrudService) { }
  ngOnInit(): void {
    this.getPayload();
  }
  getPayload(): void{
    this._crudService.getPayload();
  }

}

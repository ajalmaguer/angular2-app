import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dm-devices',
  templateUrl: 'devices.component.html',
  styleUrls: ['devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createNewDevice() {
  	console.log("gonna make a new device.")
  }

}

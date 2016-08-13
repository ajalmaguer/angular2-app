import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http' 

import { _MC } from '../shared/_MC'

@Injectable()
export class DeviceService {
	private authHeader = new Headers()
	private url = 'https://192.168.51.4/api/v2/paymentengine/devices'

	constructor(@Inject(_MC) private MC: any, private http: Http) { 
		this.authHeader.append('CSRF-Token', this.MC.csrf)
  	}

  	getDevices() {
  		return this.http.get(this.url, {headers: this.authHeader})
  	}

  	registerDevice(newDeviceSettings: any) {
  		return this.http.post(this.url, newDeviceSettings, {headers: this.authHeader})
  	}

}

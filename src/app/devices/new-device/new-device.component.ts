import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'dm-new-device',
	templateUrl: 'new-device.component.html',
	styles: [`
		.modal-body .input-group-addon {
		    background-color: rgba(255,255,255,1);
		    color: rgba(57, 113, 155, 1);
		}
		.modal-body label:first-child {
		    color: rgba(57, 113, 155, 1);
		    font-weight: 400;
		}
	`]

})
export class NewDeviceComponent implements OnInit {
	newDevice: FormGroup

	constructor() {
		this.newDevice = new FormGroup({
			name: new FormControl(),
			deviceType: new FormControl(),
			sourceKey: new FormControl(),
			timeout: new FormControl()
		})
	}

	ngOnInit() {
	}

	register(){
		console.log(this.newDevice)
	}

}

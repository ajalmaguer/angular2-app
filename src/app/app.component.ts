import { Component, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'dm-root',
	template:`
		<div class="container-fluid">
			<dm-devices></dm-devices>
		</div>
	`
})
export class AppComponent {
	title = 'app works!';
	public constructor(public viewContainerRef:ViewContainerRef) {
		// You need this small hack in order to catch application root view container ref
		// this.viewContainerRef = viewContainerRef;
	}
}

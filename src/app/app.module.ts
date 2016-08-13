// _MC is a token used to inject the MC object, which we use to store user data.
import { _MC } from './shared/_MC'
declare var MC;

// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, provide } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { ReactiveFormsModule, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';


// 3rd Part Modules and directives
import { MODAL_DIRECTIVES } from "ng2-modal";

// Components
import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component'
import { NewDeviceComponent } from './devices/new-device'

// Services
import { DeviceService } from './devices/device.service'


@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    NewDeviceComponent,
    MODAL_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    { provide: _MC, useValue: MC },
    DeviceService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

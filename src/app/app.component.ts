import { Component } from '@angular/core';
import AppCity from './city/city.component';

@Component({
    selector  : 'app-root',
    standalone: true,
    template  : `
        <h1>Hello, World!</h1>
        <app-city ngSkipHydration/>
    `,
    imports   : [
        AppCity,
    ],
})
export class AppComponent {
}

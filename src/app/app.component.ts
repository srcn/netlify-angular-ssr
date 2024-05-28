import { Component, Inject, Optional } from '@angular/core';
import { Context } from '@netlify/functions';

@Component({
    selector  : 'app-root',
    standalone: true,
    template  : `
        <h1>Hello, World!</h1>
        <div>City: <b>{{context?.geo?.city ?? 'undefined'}}</b></div>
    `,
})
export class AppComponent {

    constructor(
        @Inject('netlify.request') @Optional() public request?: Request,
        @Inject('netlify.context') @Optional() public context?: Context
    )
    {
        console.log('Request:', this.request?.url);
        console.log('Context:', this.context?.geo.city);
    }
}

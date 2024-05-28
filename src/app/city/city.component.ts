import { Component, Inject, Optional } from '@angular/core';
import { Context } from '@netlify/edge-functions';

@Component({
    selector: 'app-city',
    standalone: true,
    template: `
        <div>Your location: <b>{{context?.geo?.city ?? 'undefined'}}</b></div>
    `
})
export default class AppCity {
    constructor(
        @Inject('netlify.request') @Optional() public request?: Request,
        @Inject('netlify.context') @Optional() public context?: Context
    )
    {
        console.log('Request:', this.request?.url);
        console.log('Context:', this.context?.geo.city);
    }
}

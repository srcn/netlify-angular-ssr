import { Component, Inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Context } from '@netlify/functions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netlify-ssr-functions-test';

    constructor(
        @Inject('netlify.request') @Optional() request?: Request,
        @Inject('netlify.context') @Optional() context?: Context
    )
    {
        console.log('Request:', request?.url);
        console.log('Context:', context?.geo.city);
    }

}

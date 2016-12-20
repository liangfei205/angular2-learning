import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	temlate: `
	<h1>{{title}}</h1>
	<h2>My favortite hero is: {{myHero}}</h2>
	`

})

export class AppComponent {
	title = 'Tour of Heroes';
	myHero = 'Windstrom';
}
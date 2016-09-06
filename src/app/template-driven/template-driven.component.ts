import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";


@Component( {
	moduleId: module.id,
	selector: 'template-driven',
	templateUrl: 'template-driven.component.html',
	styles: [ `
	.ng-invalid, .invalid {
		border: 1px solid red;
	}
	
	.invalid-msg {
		color: red;
		padding-top: 5px;
	}
` ]
} )
export class TemplateDrivenComponent {
	user = {
		username: 'Tom',
		email: 'tom@default.com',
		password: 'test',
		gender: 'male'
	};

	genders = [
		'male',
		'female'
	];

	onSubmit ( form: NgForm ) {
/*		console.log( this.user );*/ /*the 'user' variable will pre-populate the form fields*/
/*		console.log( form );*/ /*this is an example of a non-grouped form result*/
		console.log( form.value ); /*this is an example of a grouped form result*/
	}
}

import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormArray,
    FormBuilder
} from "@angular/forms";


@Component({
  moduleId: module.id,
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html',
  styles: [ `
	.ng-invalid {
		border: 1px solid red;
	}
	
	.invalid-msg {
		color: red;
		padding-top: 5px;
	}
` ]
})
export class DataDrivenComponent {
  myForm: FormGroup;

  genders = [
    'male',
    'female'
  ];

  constructor(private formBuilder: FormBuilder) {
    // OPTION 1 for building forms with Form Group
    // this.myForm = new FormGroup({
    //   'userData': new FormGroup({
    //     'username': new FormControl('', Validators.required),
    //     'email': new FormControl('', [ Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?") ])
    //   }),
    //   'password': new FormControl('', Validators.required),
    //   'gender': new FormControl('male'),
    //   'hobbies': new FormArray([
    //       new FormControl('Cooking', Validators.required)
    //   ])
    // });

    // OPTION 2 for building forms with Form Builder
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['', Validators.required],
        'email': ['', [ Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?") ]]
      }),
      'password': ['', Validators.required],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required]
      ])
    });
  }

  onAddHobby(){
    (<FormArray>this.myForm.find('hobbies')).push(new FormControl('', Validators.required));
  }

  onSubmit() {
    console.log(this.myForm);
  }
}














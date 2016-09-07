import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormArray,
    FormBuilder
} from "@angular/forms";
import { Observable } from "rxjs";


@Component({
  moduleId: module.id,
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html',
  styles: [ `
	.ng-invalid {
		border: 1px solid hotpink;
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
        'username': ['', [Validators.required, this.exampleValidator]],
        'email': ['', [ Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?") ]]
      }),
      'password': ['', Validators.required],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required, this.asyncExampleValidator]
      ])
    });

    // react to value changes in your form state
    // this.myForm.valueChanges.subscribe(
    //     (data: any) => console.log(data)
    // );

    // react to status changes in your form state
    this.myForm.statusChanges.subscribe(
        (data: any) => console.log(data)
    );
  }

  onAddHobby(){
    (<FormArray>this.myForm.find('hobbies')).push(new FormControl('', Validators.required, this.asyncExampleValidator));
  }

  onSubmit() {
    console.log(this.myForm);
  }

  onReset(){
    this.myForm.reset();
  }

  exampleValidator(control: FormControl): {[s: string]: boolean}{
    // this is the case where the validation will fail
    if (control.value === 'Example'){
      return {example: true};
    }
    // this is the case where the validation has succeeded
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({ 'invalid': true });
          } else{
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }

}














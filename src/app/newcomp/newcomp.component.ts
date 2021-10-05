import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  testFormGroup!: FormGroup;
  submitted!: boolean;

  constructor( private service:AuthenticationService) { this.service.authenticate(); }
  var1 = 10;
  var2 = 20;

  ngOnInit(): void {

    this.testFormGroup = new FormGroup(
      {
        'fname' : new FormControl('',[Validators.required]),
        'lname' : new FormControl('',[Validators.required]),
        'mnumber' : new FormControl('',[Validators.required]),
        'email' : new FormControl('',[Validators.required,Validators.email])
      }
    )
  }

  onSubmit(){
    this.submitted = true
  }
  addData() {
    return true;
  }
  minusData() {
    return false;
  }

  userloggedIn(){
    if(this.service.checkAuthentication()){
      return "logged in";
    }
    return "not logged in";
  }
  count = 0;

  countInc(){
    this.count++;
  }
  countDec(){
    this.count--;
  }

}

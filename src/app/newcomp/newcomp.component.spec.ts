import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthenticationService } from '../authentication.service';

import { NewcompComponent } from './newcomp.component';

describe('NewcompComponent', () => {
  let component: NewcompComponent;
  let fixture: ComponentFixture<NewcompComponent>;
  let authservice: AuthenticationService ;
  let de : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcompComponent ],
      providers:[AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcompComponent);
    authservice = TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de= fixture.debugElement;
  });
  // afterEach(()=>{
  
  // })
  beforeAll(()=>{
    fixture = TestBed.createComponent(NewcompComponent);
    authservice = TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de= fixture.debugElement;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return addition', () => {
    
    let data = component.addData;
    expect(data).toBeTruthy;
  });
  it('should return Subtract', () => {
 
    let data = component.minusData;
    expect(data).toBeFalsy;
  });

  it('should return user logged in',()=>{
    let userlogged = component.userloggedIn();
    expect(userlogged).toEqual("logged in")
  })

  it('should check that checkAuthentication is called ',()=>{
    spyOn(authservice,'checkAuthentication').and.returnValue(true)
    let userlogged = component.userloggedIn();
    expect(userlogged).toEqual("logged in");
    expect(authservice.checkAuthentication).toHaveBeenCalled();
  })
  it('should check the button click', () => {
    const p = de.query(By.css('#count'));
    const btn = de.query(By.css('#incButton'));
    btn.triggerEventHandler('click',{});
    fixture.detectChanges();
    expect(component.count).toEqual(parseInt(p.nativeElement.innerText));
   
  });

  it('Submit btn should be clicked',()=>{
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  })
  it('onSubmit method is not called ',()=>{
    spyOn(component,'onSubmit')
    const btn = de.query(By.css('button')).nativeElement;
    btn.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  })

  it('form is not valid ',()=>{
    component.testFormGroup?.controls['fname'].setValue('');
    component.testFormGroup?.controls['lname'].setValue('');
    component.testFormGroup?.controls['mnumber'].setValue('');
    component.testFormGroup?.controls['email'].setValue('');
    expect(component.testFormGroup?.valid).toBeFalsy();
  })
  it('form is valid ',()=>{
    component.testFormGroup?.controls['fname'].setValue('yash');
    component.testFormGroup?.controls['lname'].setValue('tiwari');
    component.testFormGroup?.controls['mnumber'].setValue('8559830391');
    component.testFormGroup?.controls['email'].setValue('abc@gmail.com');
    expect(component.testFormGroup?.valid).toBeTruthy();
  })
});

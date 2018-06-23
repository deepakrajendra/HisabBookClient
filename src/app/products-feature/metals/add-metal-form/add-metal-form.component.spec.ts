import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMetalFormComponent } from './add-metal-form.component';

describe('AddMetalFormComponent', () => {
  let component: AddMetalFormComponent;
  let fixture: ComponentFixture<AddMetalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMetalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMetalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

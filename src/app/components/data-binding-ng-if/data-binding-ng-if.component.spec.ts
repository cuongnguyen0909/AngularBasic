import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingNgIfComponent } from './data-binding-ng-if.component';

describe('DataBindingNgIfComponent', () => {
  let component: DataBindingNgIfComponent;
  let fixture: ComponentFixture<DataBindingNgIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingNgIfComponent]
    });
    fixture = TestBed.createComponent(DataBindingNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

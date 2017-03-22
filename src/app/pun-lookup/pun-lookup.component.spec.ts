import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunLookupComponent } from './pun-lookup.component';

describe('PunLookupComponent', () => {
  let component: PunLookupComponent;
  let fixture: ComponentFixture<PunLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsdevenimentsComponent } from './esdeveniments.component';

describe('EsdevenimentsComponent', () => {
  let component: EsdevenimentsComponent;
  let fixture: ComponentFixture<EsdevenimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsdevenimentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsdevenimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

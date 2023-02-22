import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoTableComponent } from './compo-table.component';

describe('CompoTableComponent', () => {
  let component: CompoTableComponent;
  let fixture: ComponentFixture<CompoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

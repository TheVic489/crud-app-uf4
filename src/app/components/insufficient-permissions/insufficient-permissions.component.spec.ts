import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsufficientPermissionsComponent } from './insufficient-permissions.component';

describe('InsufficientPermissionsComponent', () => {
  let component: InsufficientPermissionsComponent;
  let fixture: ComponentFixture<InsufficientPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsufficientPermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsufficientPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

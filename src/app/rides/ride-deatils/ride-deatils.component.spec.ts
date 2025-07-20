import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideDeatilsComponent } from './ride-deatils.component';

describe('RideDeatilsComponent', () => {
  let component: RideDeatilsComponent;
  let fixture: ComponentFixture<RideDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RideDeatilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RideDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

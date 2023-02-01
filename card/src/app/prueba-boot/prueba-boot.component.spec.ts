import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaBootComponent } from './prueba-boot.component';

describe('PruebaBootComponent', () => {
  let component: PruebaBootComponent;
  let fixture: ComponentFixture<PruebaBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaBootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

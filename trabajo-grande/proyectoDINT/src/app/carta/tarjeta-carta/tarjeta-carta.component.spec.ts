import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCartaComponent } from './tarjeta-carta.component';

describe('TarjetaCartaComponent', () => {
  let component: TarjetaCartaComponent;
  let fixture: ComponentFixture<TarjetaCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCartaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresrayaComponent } from './tresraya.component';

describe('TresrayaComponent', () => {
  let component: TresrayaComponent;
  let fixture: ComponentFixture<TresrayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresrayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TresrayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

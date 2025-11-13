import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inhalte } from './inhalte';

describe('Inhalte', () => {
  let component: Inhalte;
  let fixture: ComponentFixture<Inhalte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inhalte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inhalte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

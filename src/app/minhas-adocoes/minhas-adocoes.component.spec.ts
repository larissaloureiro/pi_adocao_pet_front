import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasAdocoesComponent } from './minhas-adocoes.component';

describe('MinhasAdocoesComponent', () => {
  let component: MinhasAdocoesComponent;
  let fixture: ComponentFixture<MinhasAdocoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhasAdocoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasAdocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

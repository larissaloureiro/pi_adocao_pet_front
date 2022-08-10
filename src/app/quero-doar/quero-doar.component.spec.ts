import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueroDoarComponent } from './quero-doar.component';

describe('QueroDoarComponent', () => {
  let component: QueroDoarComponent;
  let fixture: ComponentFixture<QueroDoarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueroDoarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueroDoarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

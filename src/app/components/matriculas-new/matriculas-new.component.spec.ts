import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasNewComponent } from './matriculas-new.component';

describe('MatriculasNewComponent', () => {
  let component: MatriculasNewComponent;
  let fixture: ComponentFixture<MatriculasNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculasNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

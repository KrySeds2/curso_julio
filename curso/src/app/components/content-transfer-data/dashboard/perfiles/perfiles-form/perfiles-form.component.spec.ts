import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesFormComponent } from './perfiles-form.component';

describe('PerfilesFormComponent', () => {
  let component: PerfilesFormComponent;
  let fixture: ComponentFixture<PerfilesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

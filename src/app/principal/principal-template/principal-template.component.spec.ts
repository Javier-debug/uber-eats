import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTemplateComponent } from './principal-template.component';

describe('PrincipalTemplateComponent', () => {
  let component: PrincipalTemplateComponent;
  let fixture: ComponentFixture<PrincipalTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

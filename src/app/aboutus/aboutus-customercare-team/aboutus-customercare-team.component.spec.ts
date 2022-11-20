import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusCustomercareTeamComponent } from './aboutus-customercare-team.component';

describe('AboutusCustomercareTeamComponent', () => {
  let component: AboutusCustomercareTeamComponent;
  let fixture: ComponentFixture<AboutusCustomercareTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusCustomercareTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusCustomercareTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

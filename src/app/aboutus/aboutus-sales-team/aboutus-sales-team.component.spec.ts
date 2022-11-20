import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusSalesTeamComponent } from './aboutus-sales-team.component';

describe('AboutusSalesTeamComponent', () => {
  let component: AboutusSalesTeamComponent;
  let fixture: ComponentFixture<AboutusSalesTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusSalesTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusSalesTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

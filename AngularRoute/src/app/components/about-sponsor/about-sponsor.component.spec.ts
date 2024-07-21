import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSponsorComponent } from './about-sponsor.component';

describe('AboutSponsorComponent', () => {
  let component: AboutSponsorComponent;
  let fixture: ComponentFixture<AboutSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSponsorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBannerComponent } from './save-banner.component';

describe('SaveBannerComponent', () => {
  let component: SaveBannerComponent;
  let fixture: ComponentFixture<SaveBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

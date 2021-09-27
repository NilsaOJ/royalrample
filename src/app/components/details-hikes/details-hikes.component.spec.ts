import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHikesComponent } from './details-hikes.component';

describe('DetailsHikesComponent', () => {
  let component: DetailsHikesComponent;
  let fixture: ComponentFixture<DetailsHikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsHikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsHikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

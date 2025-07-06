import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paper } from './paper';

describe('Paper', () => {
  let component: Paper;
  let fixture: ComponentFixture<Paper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paper],
    }).compileComponents();

    fixture = TestBed.createComponent(Paper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

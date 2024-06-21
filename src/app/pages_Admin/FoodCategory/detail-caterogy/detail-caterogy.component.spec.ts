import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCaterogyComponent } from './detail-caterogy.component';

describe('DetailCaterogyComponent', () => {
  let component: DetailCaterogyComponent;
  let fixture: ComponentFixture<DetailCaterogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailCaterogyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCaterogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

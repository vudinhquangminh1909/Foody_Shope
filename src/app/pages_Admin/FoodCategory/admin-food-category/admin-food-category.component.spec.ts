import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminFoodCategoryComponent } from './admin-food-category.component';

describe('AdminFoodCategoryComponent', () => {
  let component: AdminFoodCategoryComponent;
  let fixture: ComponentFixture<AdminFoodCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFoodCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFoodCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

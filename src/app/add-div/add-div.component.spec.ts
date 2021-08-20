import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDivComponent } from './add-div.component';

describe('Create Element Testing', () => {
  let component: AddDivComponent;
  let fixture: ComponentFixture<AddDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDivComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDivComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('shud have the component', () => {
    expect(component).toBeTruthy();
  });

  it('on Scroll is called when scroll', async () => {
    // let spy = spyOn(component, 'onScroll');
    window.scroll(0, 350);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.onScroll).toHaveBeenCalled();
    });
  });
});

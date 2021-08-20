import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateElementComponent } from './create-element.component';

describe('Create Element Testing', () => {
  let component: CreateElementComponent;
  let fixture: ComponentFixture<CreateElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateElementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateElementComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('shud have the component', () => {
    expect(component).toBeTruthy();
  });

  it('onClick() is called on button click', async () => {
    let spyon = spyOn(component, 'onClick');
    let accessButton: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector('button');
    accessButton.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyon).toHaveBeenCalled();
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './banner.component';

describe('Create Element Testing', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('shud have the Banner component', () => {
    expect(component).toBeTruthy();
  });

  it('h3 shud have the title', async () => {
    let para = fixture.nativeElement.querySelector('h3');
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(para.textContent).toContain(
        'A floating banner text which keeps on rotating'
      );
    });
  });
});

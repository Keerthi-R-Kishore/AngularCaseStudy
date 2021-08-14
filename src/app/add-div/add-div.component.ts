import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CreateElementComponent } from './create-element/create-element.component';

@Component({
  selector: 'app-add-div',
  templateUrl: './add-div.component.html',
  styleUrls: ['./add-div.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddDivComponent implements OnInit {
  @ViewChild('addDiv', { static: true, read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;
  num: number = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.addElement(5);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (pageYOffset > 340) {
      this.num++;
      console.log(this.num);
      for (let i = 1; i < this.num; i++) {
        this.addElement(this.num * 4);
      }
    }
  }

  private addElement(num: number) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        CreateElementComponent
      );
    this.viewContainerRef.clear();
    for (let i = 1; i <= num; i++) {
      const comp = this.viewContainerRef.createComponent(componentFactory);
      comp.instance.index = i;
    }
  }
}

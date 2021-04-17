import {
  Directive,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

type Device = 'mobile' | 'web';

const config = {
  mobile: ["(max-width: 991.98px)"],
  web: ["(min-width: 992px)"]
};

@Directive({
  selector: '[showOn]',
})
export class ShowOnDirective implements OnDestroy {

  @Input('showOn') set device(value: Device) {
    this.subscription.unsubscribe();
    this.subscription = this.breakpointObserver
      .observe(config[value])
      .subscribe(this.updateView);
  }

  private subscription = new Subscription();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  updateView = ({ matches }: BreakpointState) => {
    console.log(matches);
    if (matches && !this.viewContainerRef.length) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else if (!matches && this.viewContainerRef.length) {
      this.viewContainerRef.clear();
    }
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

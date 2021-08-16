import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { FormsModule } from '@angular/forms';
import { AddDivModule } from './add-div/add-div.module';
import { BannerModule } from './banner/banner.module';
import { CountdownModule } from './count-down-timer/count-down-timer.module';
import { EcommerceModule } from './e-commerce-category/e-commerce-category.module';
import { StudentModule } from './student/student.module';
import { SubjectTimerModule } from './subject-timer/subject-timer.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AddDivModule,
    BannerModule,
    CountdownModule,
    EcommerceModule,
    StudentModule,
    SubjectTimerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

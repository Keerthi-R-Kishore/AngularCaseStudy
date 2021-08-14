import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ECommerceCategoryComponent } from './e-commerce-category/e-commerce-category.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './e-commerce-category/product/product.component';
import { DropdownDirective } from './dropdown.directive';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { DisplayTimerComponent } from './count-down-timer/display-timer/display-timer.component';
import { ManageTimerComponent } from './count-down-timer/manage-timer/manage-timer.component';
import { LogTimerComponent } from './count-down-timer/log-timer/log-timer.component';
import { TrackTimerComponent } from './count-down-timer/track-timer/track-timer.component';
import { FormsModule } from '@angular/forms';
import { SubjectTimerComponent } from './subject-timer/subject-timer.component';
import { SubjectManageComponent } from './subject-timer/subject-manage/subject-manage.component';
import { SubjectLogComponent } from './subject-timer/subject-log/subject-log.component';
import { SubjectDisplayComponent } from './subject-timer/subject-display/subject-display.component';
import { SubjectTrackComponent } from './subject-timer/subject-track/subject-track.component';
import { CreateElementComponent } from './add-div/create-element/create-element.component';
import { BannerComponent } from './banner/banner.component';
import { StudentComponent } from './student/student.component';
import { AddDivComponent } from './add-div/add-div.component';
import { AddDivModule } from './add-div/add-div.module';
import { BannerModule } from './banner/banner.module';
import { CountdownModule } from './count-down-timer/count-down-timer.module';
import { EcommerceModule } from './e-commerce-category/e-commerce-category.module';
import { StudentModule } from './student/student.module';
import { SubjectTimerModule } from './subject-timer/subject-timer.module';

@NgModule({
  declarations: [
    AppComponent,
    // ECommerceCategoryComponent,
    HeaderComponent,
    // ProductComponent,
    DropdownDirective,
    // CountDownTimerComponent,
    // DisplayTimerComponent,
    // ManageTimerComponent,
    // LogTimerComponent,
    // TrackTimerComponent,
    // SubjectTimerComponent,
    // SubjectManageComponent,
    // SubjectLogComponent,
    // SubjectDisplayComponent,
    // SubjectTrackComponent,
    // CreateElementComponent,
    //BannerComponent,
    // StudentComponent,
    // AddDivComponent,
  ],
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

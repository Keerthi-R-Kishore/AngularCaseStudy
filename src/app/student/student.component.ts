import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from './student.model';
import { SortObj, StuService } from './stu.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit, OnDestroy {
  students: Student[] = [];
  headings: string[] = [];
  originalArr: Student[] = [];
  sortType: string = '';
  stuSortTypeSubs: Subscription;

  constructor(private studentSer: StuService) {}

  ngOnInit(): void {
    this.studentSer.getStudentData().subscribe((res) => {
      this.students = res;
      this.originalArr = [...this.students];
      this.transformResponse(this.students);
    });
    this.stuSortTypeSubs = this.studentSer.sortType.subscribe((data) => {
      this.sortType = data;
    });
  }

  transformResponse(data: Student[]) {
    data.forEach((ele) => {
      this.headings = Object.keys(ele);
    });

    let transformHeading = this.headings.map((el) => {
      let firstLetter = el.toLowerCase()[0].toUpperCase();
      let remainingLetters = el.slice(1, el.length);
      let finalHeading = firstLetter + remainingLetters;
      return finalHeading;
    });
    this.headings = transformHeading;
  }

  onHeading(heading: string) {
    let sortObj = this.studentSer.selectSortName(
      heading.toLowerCase(),
      this.sortType
    );

    if (this.sortType === 'normal') {
      this.students = [...this.originalArr];
      this.studentSer.emitSortType('normal');
    } else {
      this.students = this.sortMethods(sortObj);
    }
  }

  sortMethods(obj: SortObj) {
    if (obj.direction === 'asc') {
      return this.sortAscending(this.students, obj);
    } else if (obj.direction === 'dsc') {
      return this.sortDescending(this.students, obj);
    } else if (obj.direction === 'normal') {
      return this.students;
    }
  }

  sortAscending(arr: Student[], sortOb: SortObj) {
    this.studentSer.emitSortType('asc');
    const sorted = arr.sort((a: any, b: any) => {
      if (sortOb.type === 'string') {
        if (a[sortOb.column].toUpperCase() < b[sortOb.column].toUpperCase())
          return -1;
      } else {
        return a[sortOb.column] - b[sortOb.column];
      }
      return 0;
    });
    return sorted;
  }

  sortDescending(arr: Student[], sortOb: SortObj) {
    this.studentSer.emitSortType('dsc');
    const sorted = arr.sort((a: any, b: any) => {
      if (sortOb.type === 'string') {
        if (a[sortOb.column].toUpperCase() > b[sortOb.column].toUpperCase())
          return -1;
      } else {
        return b[sortOb.column] - a[sortOb.column];
      }
      return 0;
    });
    return sorted;
  }

  ngOnDestroy() {
    this.stuSortTypeSubs.unsubscribe();
  }
}

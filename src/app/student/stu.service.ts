import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Student } from './student.model';

export interface SortObj {
  direction: string;
  column: string;
  type: string;
}

@Injectable({ providedIn: 'root' })
export class StuService {
  students: Student[] = [];
  emitColumn = new Subject<SortObj>();
  sortType = new BehaviorSubject<string>('asc');

  constructor(private http: HttpClient) {}

  getStudentData() {
    return this.http.get<Student[]>(
      'https://studentmarks-a252b-default-rtdb.firebaseio.com/posts.json'
    );
  }

  emitSortType(value: string) {
    if (value === 'asc') {
      this.sortType.next('dsc');
    } else if (value === 'dsc') {
      this.sortType.next('normal');
    } else if (value === 'normal') {
      this.sortType.next('asc');
    }
  }

  selectSortName(value: string, sortType: string) {
    switch (value) {
      case 'name':
        return {
          direction: sortType,
          column: value,
          type: 'string',
        };

      case 'section':
        return {
          direction: sortType,
          column: value,
          type: 'string',
        };

      case 'std':
        return {
          direction: sortType,
          column: value,
          type: 'number',
        };

      case 'sub1':
        return {
          direction: sortType,
          column: value,
          type: 'number',
        };

      case 'sub2':
        return {
          direction: sortType,
          column: value,
          type: 'number',
        };

      case 'sub3':
        return {
          direction: sortType,
          column: value,
          type: 'number',
        };
    }
  }
}

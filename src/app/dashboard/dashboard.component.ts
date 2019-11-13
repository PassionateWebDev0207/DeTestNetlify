import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  uploadedImgs = [
    "../../assets/images/up1.png",
    "../../assets/images/up2.png",
    "../../assets/images/up3.png",
    "../../assets/images/up4.png",
  ];

  indexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  homebuilderItems = new Array(10);

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.homebuilderItems.fill(null);
    this.todoService.getToDoList().subscribe(
      data => {
        this.homebuilderItems = [...data, ... new Array(10 - data.length)];
      });
  }

  CompleteEvent(id: Number, completed: Boolean) {
    this.todoService.updateToDoItem(id, completed).subscribe(
      val => {
        this.todoService.getToDoList().subscribe(
          data => {
            this.homebuilderItems = [...data, ... new Array(10 - data.length)];
          });
      });
  }
}

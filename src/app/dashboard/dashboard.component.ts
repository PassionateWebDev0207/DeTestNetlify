import { Component, OnInit } from '@angular/core';

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

  homebuilderItems = [
    {
      "id": 1,
      "todo": "Buy Windows",
      "desc": "#DE 8009 Description lorem ipsum lorem ipsum",
      "info": "ABC",
      "completed": false,
      "state": "high-price"
    },
    {
      "id": 2,
      "todo": "Find Contractors",
      "desc": "#DE 2100 Description lorem ipsum lorem ipsum",
      "info": "Tomorrow",
      "completed": false,
      "state": "medium"
    },
    {
      "id": 3,
      "todo": "Prints of plans",
      "desc": "#DE 8009 Description lorem ipsum lorem ipsum",
      "info": "5 copies",
      "completed": true,
      "state": "final"
    }, {}, {}, {}, {}, {}, {}, {}
  ];

  constructor() { }

  ngOnInit() {
  }

}

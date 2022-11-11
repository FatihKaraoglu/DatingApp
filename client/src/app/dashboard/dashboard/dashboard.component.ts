import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    const file = XLSX.readFile("/assets/TestAngular.xlsx");
    let data = [];

    const sheets = file.SheetNames;
    for(let i = 0; i < sheets.length; i++){
      const temp = XLSX.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
        temp.forEach((res) => {
          data.push(res)
        })
    }
  }
}

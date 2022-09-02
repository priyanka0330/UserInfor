import {Component, ViewChild, OnInit,ElementRef} from '@angular/core';
import {jsPDF} from "jspdf";
declare var $: (arg0: any) => any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  @ViewChild('dataTable') table:any;
  dataTable: any;
  constructor(){
  }

  ngOnInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }
  @ViewChild('content',{static: false}) el!: ElementRef;
  makePDF(){
    let pdf = new jsPDF('p','pt', [1190, 1190]);
    pdf. html(this.el.nativeElement,{
      callback: (pdf) => {

        pdf.save("User-Information.pdf");
      }
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { GridApi, GridOptions, ColumnApi } from 'ag-grid';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AddMetalFormComponent } from './add-metal-form/add-metal-form.component';

@Component({
  selector: 'app-metals',
  templateUrl: './metals.component.html',
  styleUrls: ['./metals.component.scss']
})
export class MetalsComponent implements OnInit {
  bsModalRef: BsModalRef;
  title = 'app';
  items: Array<string> = ["item 1", "item 2", "item 3"];
  today: any = new Date();
  userName: string = "User name";
  ngOnInit(){}
//drop down
selected ="1";  
  //grid
  private metals: Array<Metal>;
  private gridOptions: GridOptions;
  //  private icons: any;
  public rowData: any[];
  public columnDefs: any[];
  public defaultColDef:any;
  //  public rowCount: string;

  private api: GridApi;
  private columnApi: ColumnApi;
  private pageSize = 2;

  constructor(private modalService :BsModalService) {

    this.metals = [
     new Metal(1,"Gold","gold","Main metal"),
     new Metal(1,"Silver","silver","Secondary metal"),
     new Metal(1,"Bronze","bronze","Third metal")
    ];   
    this.gridOptions = <GridOptions>{};
    this.rowData = this.createRowData();
    this.columnDefs = this.createColumnDefs();

  }

  // k

  private onReady(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
    this.gridOptions.api.sizeColumnsToFit();
    this.gridOptions.headerHeight=40;
    // this.gridOptions.groupHeaderHeight=40;
    // this.gridOptions.floatingFiltersHeight=40;
    this.defaultColDef=
      {
      width: 100,
      headerComponentParams : {
      template:
          '<div class="ag-cell-label-container" role="presentation">' +
          '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
          '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
          '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order" ></span>' +
          '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon" ></span>' +
          '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon" ></span>' +
          '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon" ></span>' +
          '    ** <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>' +
          '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
          '  </div>' +
          '</div>'
      }
    // this.gridOptions.angularCompileHeaders=true;
  }
}

  private createRowData() {
    const rowData = this.metals;

    return rowData;
  }

  private createColumnDefs() {

    const columnDefs = [
      {
        headerName: 'METAL',
        field: 'metalName',
        headerCheckboxSelection: true,
        checkboxSelection:true,
        filter:"agTextColumnFilter",
        suppressFilter: true
      },
      {
        headerName: 'SHORT NAME',
        field:'shortName',
        suppressFilter: true,
        filter:"agTextColumnFilter"
      },
      {
        headerName: 'DESCRIPTION',
        field: 'description',
        // valueFormatter: this.concatReviewers,
        filter: "agTextColumnFilter"
      },
      
      {
        headerName:'ACTIONS',
        suppressFilter: true,
        suppressSorting:true,
        // cellRendererFramework:ActionsRendererComponent
      }

    ];
    return columnDefs;
  }

  // k 

  concatReviewers(params: any) {
    var reviewers = "";
    if (params.value.length < 3) {
      return params.value.join(', ');
    }
    else {
      reviewers = params.value[0] + ',' + params.value[1] + ' +' + (params.value.length - 2) + ' others';
      return reviewers;
    }
  }

  openAddMetalForm() {
    this.bsModalRef = this.modalService.show(AddMetalFormComponent, Object.assign({}, { class: 'gray' }));
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}

export class Metal{
  constructor(
      public id?: number,
      public metalName?: string,
      public shortName?: string,
      public description?: string
  ){}
}
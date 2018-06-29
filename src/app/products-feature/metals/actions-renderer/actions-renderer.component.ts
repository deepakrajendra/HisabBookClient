import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-renderer',
  templateUrl: './actions-renderer.component.html',
  styleUrls: ['./actions-renderer.component.scss']
})
export class ActionsRendererComponent implements OnInit {
  private params: any;
  public cell: any;


  ngOnInit(){}
  agInit(params: any): void {
      this.params = params;
      console.log('parmas :'+this.params);
      this.cell = {row: params.value, col: params.colDef.headerName};
  }

  public clicked(cell: any): void {
      console.log("Child Cell Clicked: " + JSON.stringify(cell));
  }

  refresh(): boolean {
      return false;
  }

}

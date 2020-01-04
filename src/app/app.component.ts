import { Component } from '@angular/core';

import { AllModules } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public modules = AllModules;

  sidebar = {
    toolPanels: ['columns', 'filters' ]
  };

  gridOptions = {
    enableCharts: true,
    enableRangeSelection: true,
    enableRedoCellEditing: true,
    headerHeight: 90
  };

  defaultColDef = {
    enableValue: true,
    enableRowGroup: true,
    enablePivot: true,
    sortable: true,
    filter: true
  };

  columnDefs = [
    { headerName: 'Make', field: 'make', checkboxSelection: true, editable: true },
    { headerName: 'Model', field: 'model', editable: true },
    { headerName: 'Price', field: 'price', editable: true }
  ];

  autoGroupColumnDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
  };

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
}

import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.html',
  styleUrl: './piano.scss',
  imports: [AgGridAngular],
})
export class Piano {
  // Row Data: The data to be displayed.
  rowData = [{ 1: 'black', 3: 'black', 7: 'black', 9: 'black', 11: 'black', 15: 'black', 17: 'black'}, {}];

  // Column Definitions: Defines the columns to be displayed.
  columnDefs: ColDef[] = [
    { field: '0' },
    { field: '1' },
    { field: '2' },
    { field: '3' },
    { field: '4' },
    { field: '5' },
    { field: '6' },
    { field: '7' },
    { field: '8' },
    { field: '9' },
    { field: '10' },
    { field: '11' },
    { field: '12' },
    { field: '13' },
    { field: '14' },
    { field: '15' },
    { field: '16' },
    { field: '17' },
    { field: '18' }
  ].map((colDef) => ({
    ...colDef,
    cellRenderer: PianoKeyRenderer,
    width: 10,
  }));
}

function PianoKeyRenderer(params: any) {
 const color = params.data[params.column.getColId()];

  const style = `
    background-color: ${color === 'black' ? 'black' : 'white'};
    height:100%;
    width:100%;
    padding:0;
  `;

  return `<div style="${style}" ></div>`;
}

import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type {
  CellClassParams,
  CellClickedEvent,
  ColDef,
  GetRowIdParams,
  GridOptions,
} from 'ag-grid-community';

interface PianoKeyRowData {
  id: string;
  values: Record<string, PianoKeyData>;
}
interface PianoKeyData {
  color: 'white' | 'black';
  colSpan: number;
  isSelected?: boolean;
}

@Component({
  selector: 'app-piano',
  templateUrl: './piano.html',
  styleUrl: './piano.scss',
  imports: [AgGridAngular],
})
export class Piano {
  readonly agGridOptions: GridOptions = {
    suppressCellFocus: true,
    getRowId: (params: GetRowIdParams<PianoKeyRowData>) => params.data.id,
  };
  // Row Data: The data to be displayed.
  rowData: PianoKeyRowData[] = [
    {
      id: '0',
      values: {
        '0': { color: 'white', colSpan: 2 },
        '2': { color: 'black', colSpan: 2 },
        '5': { color: 'black', colSpan: 2 },
        '7': { color: 'white', colSpan: 2 },
        '9': { color: 'white', colSpan: 2 },
        '11': { color: 'black', colSpan: 2 },
        '14': { color: 'black', colSpan: 2 },
        '17': { color: 'black', colSpan: 2 },
        '19': { color: 'white', colSpan: 2 },
      },
    },
    {
      id: '1',
      values: {
        '0': { color: 'white', colSpan: 3 },
        '3': { color: 'white', colSpan: 3 },
        '6': { color: 'white', colSpan: 3 },
        '9': { color: 'white', colSpan: 3 },
        '12': { color: 'white', colSpan: 3 },
        '15': { color: 'white', colSpan: 3 },
        '18': { color: 'white', colSpan: 3 },
      },
    },
  ];

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
    { field: '18' },
    { field: '19' },
    { field: '20' },
  ].map((colDef) => ({
    ...colDef,
    cellRenderer: PianoKeyRenderer,
    cellClassRules: {
      'cell--selected': (params: CellClassParams<PianoKeyData>) =>
        !!params.value?.isSelected,
    },
    width: 20,
    minWidth: 20,
    colSpan: (params) => {
      const colSpan = params.data.values[params.column.getColId()]?.colSpan;
      if (colSpan) {
        // have all Russia age columns width 2
        return colSpan;
      }
      // all other rows should be just normal
      return 1;
    },
  }));

  onCellClicked(event: CellClickedEvent) {
    event.api.applyTransaction({
      update: [
        {
          ...event.node.data,
          [event.column.getId()]: { ...event.value, isSelected: true },
        },
      ],
    });
  }
}

function PianoKeyRenderer(params: any) {
  const color = params.data.values[params.column.getColId()]?.color;
  const style = `
    background-color: ${color === 'black' ? 'black' : 'white'};
    height:100%;
    width:100%;
    padding:0;
    margin:0;
   
     `;

  return `<div style="${style}" ></div>`;
}

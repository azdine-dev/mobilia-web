import { Component, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Bus } from 'src/app/feature-module/_services/bus/bus.model';
import { BusService } from 'src/app/feature-module/_services/bus/bus.service';
import {
  PaginationService,
  pageSelection,
  tablePageSize,
} from 'src/app/shared/custom-pagination/pagination.service';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import {
  apiResultFormat,
  userBookings,
} from 'src/app/shared/services/model/model';
import { MatDialog } from '@angular/material/dialog';
import { BusSelectionService } from 'src/app/feature-module/_services/bus/bus-selection.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrl: './bus-list.component.css',
})
export class BusListComponent {
  public routes = routes;
  public tableData: Array<Bus> = [];
  dataSource!: MatTableDataSource<Bus>;
  public showFilter = false;
  public searchDataValue = '';
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;
  busesSize = 0;
  initChecked = false;

  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService,
    private buseService: BusService,
    private busSelectionService: BusSelectionService,
    private dialog: MatDialog
  ) {
    // this.data.getUserBookings().subscribe((apiRes: apiResultFormat) => {
    //   this.totalData = apiRes.totalData;
    // });

    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.userBusList) {
        this.getTableData(res);
      }
    });
  }

  // private getTableData(pageOption: pageSelection): void {
  //   this.data.getUserBookings().subscribe((apiRes: apiResultFormat) => {
  //     this.tableData = [];
  //     this.serialNumberArray = [];
  //     this.totalData = apiRes.totalData;
  //     apiRes.data.map((res: userBookings, index: number) => {
  //       const serialNumber = index + 1;
  //       if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
  //         res.id = serialNumber;
  //         this.tableData.push(res);
  //         this.serialNumberArray.push(serialNumber);
  //       }
  //     });
  //     this.dataSource = new MatTableDataSource<userBookings>(this.tableData);
  //     this.pagination.calculatePageSize.next({
  //       totalData: this.totalData,
  //       pageSize: this.pageSize,
  //       tableData: this.tableData,
  //       serialNumberArray: this.serialNumberArray,
  //     });
  //   });
  // }
  private getTableData(res: tablePageSize): void {
    const pageSize = res.pageSize;
    const pageNo = res.limit / pageSize - 1;
    this.buseService
      .gettAllBusesForAuthenticatedUser(pageNo, pageSize)
      .subscribe({
        next: (buses: Bus[]) => {
          this.tableData = buses;
          this.totalData = buses.length;
          this.busesSize = this.totalData;

          this.dataSource = new MatTableDataSource<Bus>();
          this.dataSource.data = this.tableData;
          this.pagination.calculatePageSize.next({
            totalData: this.totalData,
            pageSize: this.pageSize,
            tableData: this.tableData,
            serialNumberArray: this.serialNumberArray,
          });
        },
      });
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  selectBus(bus: Bus): void {
    this.router.navigate([routes.userBusDetails], {
      state: { busData: bus },
    });
  }

  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }

  // openBusDetailsModal(bus: Bus): void {
  //   const dialogRef = this.dialog.open(BusDetailsModalComponent);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}

import { Component, OnInit } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ApiService } from "../../services/api.service";
import { Subject, takeUntil, tap } from "rxjs";
import { Item } from '../../types/Item';
import { Response } from '../../types/Reponse';
import { CommonModule } from "@angular/common";
import { FilterFolderPipe } from "../../pipes/filterFolders";
import { MatIconModule } from "@angular/material/icon";
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import { NestedTreeControl } from "@angular/cdk/tree";
import { generateTree } from "../../utils/generateTree";
import { getSelectedFromTree, selectInTree } from "../../utils/searchInTree";


@Component({
    selector: 'item-list',
    templateUrl: 'itemList.component.html',
    standalone: true,
    styleUrls: ['itemList.component.css'],
    providers: [FilterFolderPipe],
    imports: [CommonModule, MatCardModule, MatButtonModule, FilterFolderPipe, MatIconModule, MatTreeModule]
})
export class ItemList implements OnInit {
  private destroy$ = new Subject<void>();
  folders: Item[] = [];
  selectedIds: number[] = [];

  treeControl = new NestedTreeControl<Item>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Item>();

  constructor(
    private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.get<Response>()
    .pipe(
      takeUntil(this.destroy$),
      tap((response: Response) =>  console.log(response)),
    )
    .subscribe({
      next: (response: Response) => {
        this.folders = generateTree(response);
      },
      error: (error: Error) => console.error('Error fetching json:', error)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  hasChild = (_: number, node: Item) => node.expandable;

  getSelectedIds = () => {
    this.selectedIds = [];
    this.folders.forEach(item => getSelectedFromTree(item, this.selectedIds));
  }

  selectItem = (uiId: number, checked: boolean) => {
    this.folders.forEach(item => selectInTree(item, uiId, checked));
    this.getSelectedIds();
  }

  clearSelection = () => {
    this.folders.forEach(item => selectInTree(item, item.uiId, false));
    this.getSelectedIds();
  }
}

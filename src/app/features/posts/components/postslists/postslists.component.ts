import { Component, ViewChild } from '@angular/core';
import { PostDto } from '../../../../dto/post.dto';
import { PostService } from '../../services/post.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from 'src/app/delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-postslists',
  templateUrl: './postslists.component.html',
  styleUrls: ['./postslists.component.css']
})
export class PostslistsComponent {

  displayedColumns: string[] = ['id', 'userId', 'title', 'body', 'action'];
  dataSource = new MatTableDataSource<PostDto>([]);
  posts: PostDto[] = [];
  totalLength = 0;
  selectedUserId: number | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _PostService: PostService, private dialog: MatDialog) { }

  ngOnInit(): void {

    if (!this._PostService.isPostsChanged) {
      this._PostService.getposts().subscribe({
        next: (response) => {

          this.dataSource.data = response;
          this.totalLength = this.posts.length;
          this.refreshLocalPosts(this.dataSource.data);
        },
        error: (err) => {
          console.error('Failed to retrieve posts ', err);
        }
      });
    }
    else {
      this.refreshDataSource();
    }


  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  get uniqueUserIds(): number[] {
    return Array.from(new Set(this.dataSource.data.map(post => post.userId)));
  }

  applyFilter() {
    if (this.selectedUserId !== null) {
      this.dataSource.data = this.dataSource.data.filter(post => post.userId === this.selectedUserId);
    } else {
      this.resetFilter();
    }
  }

  resetFilter() {
    this.refreshDataSource()
    this.selectedUserId = null;
  }


  delete(id: number) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: { id }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        const updatedPosts = this._PostService.deletPostById(id, this.dataSource.data);
        this.dataSource.data = updatedPosts || [];
        this.refreshLocalPosts(updatedPosts);
        this.totalLength = this.dataSource.data.length;
      }
    });
  }

  refreshLocalPosts(updatedPosts: PostDto[]) {
    this._PostService.localPosts = updatedPosts;
  }

  refreshDataSource() {
    this.dataSource.data = this._PostService.localPosts;
    this.totalLength = this._PostService.localPosts.length;
  }
}

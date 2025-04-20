import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { PostDto } from '../../../dto/post.dto';
import { ApiService } from 'src/network/core/api.service';
import { environment } from 'src/environments/env';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = environment.apiUrl.posts;
  private getEndPoint = 'posts';
  private _localPosts: PostDto[] = []
  private _isPostsChanged: boolean = false;
  createflag: boolean = false


  constructor(private apiService: ApiService) { }



  getposts(): Observable<PostDto[]> {
    return this.apiService.get<PostDto[]>(this.baseUrl, this.getEndPoint).pipe(
      map(response => response.map((item: PostDto) => ({
        userId: item.userId,
        id: item.id,
        title: item.title,
        body: item.body
      })))
    );
  }

  getPostById(id: number): PostDto | undefined {
    return this.localPosts.find(post => post.id === id);
  }

  deletPostById(id: number, posts: PostDto[]): PostDto[] {
    if (posts !== undefined) {
      posts = posts.filter(post => post.id !== id);
    }
    return posts;
  }

  editPostById(id: number, posts: PostDto[], newPost: PostDto): PostDto[] {
    if (posts !== undefined) {
      let selectedPostIndex = posts.findIndex(post => post.id === id);
      if (selectedPostIndex !== -1) {
        posts[selectedPostIndex] = newPost;
      }
    }
    return posts;
  }

  getLastPostIdValue(): number {
    let max = 0;

    this._localPosts.forEach(post => {
      max = max > post.id ? max : post.id;
    })

    return max;
  }


  public get isPostsChanged(): boolean {
    return this._isPostsChanged;
  }
  public set isPostsChanged(value: boolean) {
    this._isPostsChanged = value;
  }

  public get localPosts(): PostDto[] {
    return this._localPosts;
  }

  public set localPosts(posts: PostDto[]) {
    this._localPosts = posts
  }
}

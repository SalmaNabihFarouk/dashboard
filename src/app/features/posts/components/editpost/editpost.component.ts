import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostDto } from '../../../../dto/post.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent {



  id: number = 0;
  editForm!: FormGroup;
  post!: PostDto | undefined;
  localPosts: PostDto[] = [];
  userIds: Set<number> = new Set();
  constructor(
    private route: ActivatedRoute,
    private _PostService: PostService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.post = this._PostService.getPostById(this.id);
    this.localPosts = this._PostService.localPosts;

    this.editForm = this.fb.group({
      userId: [this.post?.userId],
      title: [this.post?.title],
      body: [this.post?.body]
    });
  

    for (const post of this.localPosts) {   
    this.userIds.add(post.userId);  
    }
  }



  onSave() {
    const updatedPost: PostDto = {
      id: this.id,
      userId: this.editForm.value.userId,
      title: this.editForm.value.title,
      body: this.editForm.value.body
    };

    let selectedIndex = this.localPosts.findIndex(post => post.id === this.id);
    this.localPosts[selectedIndex] = updatedPost;


    this._PostService.localPosts = this.localPosts;
   
    this._PostService.isPostsChanged = true;

    console.log('Post Updated:', updatedPost);
    this.router.navigate(['posts']);
  }

}

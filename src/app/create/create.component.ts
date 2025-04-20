import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostDto } from '../dto/post.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../features/posts/services/post.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {


  id: number = 0;
  createForm!: FormGroup;



  constructor(
    private route: ActivatedRoute,
    private _PostService: PostService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      userId: [],
      title: [],
      body: []
    });
  }

  onSave() {
    const updatedPost: PostDto = {
      id: this._PostService.getLastPostIdValue() + 1,
      userId: this.createForm.value.userId,
      title: this.createForm.value.title,
      body: this.createForm.value.body
    };

    this._PostService.localPosts.push(updatedPost)
    this._PostService.isPostsChanged = true;

    console.log('Post Updated:', updatedPost);
    this.router.navigate(['posts']);
  }

}

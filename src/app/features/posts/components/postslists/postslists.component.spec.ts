import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostslistsComponent } from './postslists.component';

describe('PostslistsComponent', () => {
  let component: PostslistsComponent;
  let fixture: ComponentFixture<PostslistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostslistsComponent]
    });
    fixture = TestBed.createComponent(PostslistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

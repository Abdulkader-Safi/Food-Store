import { Component } from '@angular/core';

import { Tag } from 'src/app/shared/models/Tag';
import { TagService } from '../../../services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  tags?: Tag[] = [];

  constructor(private tagService: TagService) {}

  ngOnInit(): void {
    this.tagService.getAllTags().subscribe((tag) => {
      this.tags = tag;
    });
  }
}

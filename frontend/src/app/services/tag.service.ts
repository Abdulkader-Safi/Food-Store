import { Injectable } from '@angular/core';
import { sample_tags } from 'src/Data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor() {}

  getAllTags(): Tag[] {
    return sample_tags;
  }
}

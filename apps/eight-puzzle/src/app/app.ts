import { Component } from '@angular/core';
import { DragAndDropComponent } from './features/drag-and-drop/drag-and-drop.component';
import { ImageSlicerComponent } from './features/image-slicer/image-slicer.component';
import { PuzzleComponent } from './features/puzzle/puzzle.component';

@Component({
  imports: [DragAndDropComponent, ImageSlicerComponent, PuzzleComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'eight-puzzle';

  screenDisplayed = 'UPLOAD';
  imageFile: any;
  images: any;
  originalImage: any;

  onImageSelected(image: any) {
    this.imageFile = image;
    this.screenDisplayed = 'CROP';
  }

  onImageCrop(images: string | any[]) {
    this.screenDisplayed = 'PUZZLE';
    this.originalImage = images[0];
    this.images = images.slice(1);
  }

  onUploadNew(event: any) {
    if (event) {
      this.screenDisplayed = 'UPLOAD';
    }
  }
}


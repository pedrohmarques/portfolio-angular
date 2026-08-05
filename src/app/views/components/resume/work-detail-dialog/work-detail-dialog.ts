import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

export interface WorkDetail {
  enterprise: string;
  year: string;
  vocation: string;
  vocationEN: string;
  description: string;
  descriptionEN: string;
  responsibilities: string[];
  responsibilitiesEN: string[];
  achievements: string[];
  achievementsEN: string[];
  technologies: string[];
}

@Component({
  selector: 'app-work-detail-dialog',
  imports: [
    MatIconModule,
    TranslocoPipe
  ],
  templateUrl: './work-detail-dialog.html',
  styleUrl: './work-detail-dialog.scss',
})
export class WorkDetailDialog {

  constructor(
    private translocoService: TranslocoService,
    private dialogRef: MatDialogRef<WorkDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: WorkDetail
  ) {

  }

  get systemLanguage(): string {
    return this.translocoService.getActiveLang()
  }

  close(): void {
    this.dialogRef.close();
  }
}

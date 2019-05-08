import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';

import { FsNavActionsComponent } from './components/nav-actions/nav-actions.component';
import { FsNavBackComponent } from './components/nav-back/nav-back.component';
import { FsNavBaseComponent } from './components/nav-base/nav-base.component';
import { FsNavComponentComponent } from './components/nav-component/nav-component.component';
import { FsNavMenuComponent } from './components/nav-menu/nav-menu.component';
import { FsNavSubtitleComponent } from './components/nav-subtitle/nav-subtitle.component';
import { FsNavSupertitleComponent } from './components/nav-supertitle/nav-supertitle.component';
import { FsNavTitleComponent } from './components/nav-title/nav-title.component';

import { FsNavService } from './services/fs-nav.service';
import { FsNavStackService } from './services/fs-nav-stack.service';
import { FsNavUpdatesService } from './services/fs-nav-updates.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
  ],
  exports: [
    FsNavTitleComponent,
    FsNavSubtitleComponent,
    FsNavSupertitleComponent,
    FsNavActionsComponent,
    FsNavComponentComponent,
    FsNavBackComponent,
    FsNavMenuComponent,
  ],
  entryComponents: [
  ],
  declarations: [
    FsNavBaseComponent,
    FsNavTitleComponent,
    FsNavSupertitleComponent,
    FsNavSubtitleComponent,
    FsNavActionsComponent,
    FsNavComponentComponent,
    FsNavMenuComponent,
    FsNavBackComponent,
    FsNavBaseComponent,
  ],
})
export class FsNavModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsNavModule,
      providers: [
        FsNavService,
        FsNavStackService,
        FsNavUpdatesService,
      ]
    };
  }
}
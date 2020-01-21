import { NgModule } from '@angular/core';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { RouterModule } from '@angular/router';
import { CharacterDetailGuard } from './character-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'characters', component: CharacterListComponent },
      {
        path: 'characters/:id',
        canActivate: [CharacterDetailGuard],
        component: CharacterDetailComponent
      },
    ]),
    SharedModule
  ]
})
export class CharacterModule { }

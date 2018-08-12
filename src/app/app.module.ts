import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MenuofthedayComponent } from './menuoftheday/menuoftheday.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { ModelComponent } from './model/model.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    MenuofthedayComponent,
    AddmenuComponent,
    PipeComponent,
    ModelComponent,
    FormbuilderComponent,
    FormvalidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

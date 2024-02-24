import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderNavigationComponent } from './components/header-childs/header-navigation/header-navigation.component';
import { HeaderSearchComponent } from './components/header-childs/header-search/header-search.component';
import { HeaderRightMenuComponent } from './components/header-childs/header-right-menu/header-right-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavigationComponent,
    HeaderSearchComponent,
    HeaderRightMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

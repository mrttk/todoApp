import { Component, NgModule } from '@angular/core';
import { Model } from './model';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  model = new Model();

  getName(){
    return this.model.user
  }

  getItems(){
    return this.model.items.filter(item => !item.action)
  }
}

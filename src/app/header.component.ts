import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  template: `<div class="header-container">
  <img class="logo" src="https://www.revera.co.nz/images/furniture/Revera_Spark_white_red.svg" alt="Revera"/>
</div>`,
  styles: [`.header-container { background: #6200EE; position: relative; text-align: center; }
  img { height:200px; width:200px }`]
})
export class HeaderComponent  {
}

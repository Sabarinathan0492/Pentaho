import { Component, Input } from '@angular/core';

@Component({
  selector: 'embed-iframe',
  template: `<iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="100%"
    height="500px"
    src="http://ww3.pentaho.com/pentaho/plugin/chicagoCrime/api/main?userid=pentaho&password=demo">
</iframe>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class EmbedIFrameComponent  {
  @Input() url: string;
}

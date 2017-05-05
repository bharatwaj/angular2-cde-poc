import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const reportPath = '/public/plugin-samples/pentaho-cdf-dd/pentaho-cdf-dd-require/cde_sample1.wcdf';
    window['require']([
      `http://10.200.73.90:8080/pentaho/plugin/pentaho-cdf-dd/api/renderer/getDashboard?path=${reportPath}`
    ], (SampleDash) => {

      const sampleDash = new SampleDash('content1');
      sampleDash.render();

    });
  }
}

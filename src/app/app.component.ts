import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
// npm install --save-dev @types/googlemaps first
// add default index.d.ts file in current folder if typescript 
// gives error for missing type modules and restart dev server
import {} from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('map', null) mapElement: ElementRef;
  map: google.maps.Map;

  title = 'GMapsKLayers';

  ngOnInit() {
    // create new map instance
    const mapProperties = {
      zoom: 4,
      center: new google.maps.LatLng(37.0902, 95.7129), // this is not required for kml file
      mapTypeId: google.maps.MapTypeId.ROADMAP // optional
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

    // url based kml layer ( working )
    // generate kml file from https://www.doogal.co.uk/polylines.php
    const kmllayer = new google.maps.KmlLayer({
      url: 'https://raw.githubusercontent.com/cyrusfurtado/kml-samples/master/usa_border.kml', // this url should be publicly visible
      map: this.map
    });

  }

}

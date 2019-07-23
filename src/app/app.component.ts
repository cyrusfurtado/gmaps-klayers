import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
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
    // const mapProperties = {
    //   zoom: 4,
    //   center: {lat: 20.5937, lng: 78.9629},
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // }
    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

    // const kmllayer = new google.maps.KmlLayer({
      // url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml',
      // url: 'https://www.doogal.co.uk/KmlViewer.php?url=https://www.doogal.co.uk/UploadedKml/7e25a29b-4be5-438c-a702-c66a9c1f2873.kml',
      // map: this.map
    // });

    // kmllayer.setMap(this.map);

    var shapes = [];
    var path = [
    new google.maps.LatLng(48.972236901245125, -123.03446682770289),
    new google.maps.LatLng(49.029897095181965, -95.17313870270289),
    new google.maps.LatLng(48.3335643506032, -88.40556057770289),
    new google.maps.LatLng(45.38991241456361, -82.60477932770289),
    new google.maps.LatLng(43.698804235444385, -82.16532620270289),
    new google.maps.LatLng(42.5441235406275, -82.86845120270289),
    new google.maps.LatLng(42.02394331920752, -83.13212307770289),
    new google.maps.LatLng(41.696651156327334, -82.60477932770289),
    new google.maps.LatLng(42.867053829783345, -79.00126370270289),
    new google.maps.LatLng(43.762313865022165, -80.05595120270289),
    new google.maps.LatLng(43.762313865022165, -76.45243557770289),
    new google.maps.LatLng(45.08045138011635, -74.95829495270289),
    new google.maps.LatLng(45.08045138011635, -72.05790432770289),
    new google.maps.LatLng(45.820326949551514, -70.73954495270289),
    new google.maps.LatLng(47.56832331574036, -69.42118557770289),
    new google.maps.LatLng(47.39011893254246, -68.36649807770289),
    new google.maps.LatLng(47.15157256302691, -67.83915432770289),
    new google.maps.LatLng(45.75904133839621, -67.75126370270289),
    new google.maps.LatLng(45.32815502401299, -67.13602932770289),
    new google.maps.LatLng(44.70687359825857, -66.69657620270289),
    new google.maps.LatLng(43.762313865022165, -70.12431057770289),
    new google.maps.LatLng(42.867053829783345, -70.47587307770289),
    new google.maps.LatLng(41.8277690330814, -70.30009182770289),
    new google.maps.LatLng(41.762243585284544, -69.86063870270289),
    new google.maps.LatLng(40.638078341608725, -73.02470120270289),
    new google.maps.LatLng(39.08652669662302, -73.20048245270289),
    new google.maps.LatLng(37.5697766739482, -75.22196682770289),
    new google.maps.LatLng(36.79955007898063, -75.92509182770289),
    new google.maps.LatLng(35.95038147726224, -75.39774807770289),
    new google.maps.LatLng(35.59383301950524, -75.66141995270289),
    new google.maps.LatLng(34.65935872479662, -76.62821682770289),
    new google.maps.LatLng(34.36967792859537, -77.68290432770289),
    new google.maps.LatLng(33.05373455810985, -79.08915432770289),
    new google.maps.LatLng(32.68463382779579, -80.14384182770289),
    new google.maps.LatLng(31.193005349686533, -80.84696682770289),
    new google.maps.LatLng(30.66525823967541, -81.46220120270289),
    new google.maps.LatLng(26.969993484898538, -79.70438870270289),
    new google.maps.LatLng(25.471975606613977, -80.14384182770289),
    new google.maps.LatLng(24.994953929276747, -80.49540432770289),
    new google.maps.LatLng(25.86805524464082, -81.81376370270289),
    new google.maps.LatLng(29.830097455884072, -84.09891995270289),
    new google.maps.LatLng(29.67749023359689, -84.62626370270289),
    new google.maps.LatLng(29.371580566778274, -85.06571682770289),
    new google.maps.LatLng(30.513939764005126, -86.38407620270289),
    new google.maps.LatLng(29.67749023359689, -89.37235745270289),
    new google.maps.LatLng(28.98789760701243, -90.07548245270289),
    new google.maps.LatLng(29.371580566778274, -94.64579495270289),
    new google.maps.LatLng(26.10506880946569, -97.10673245270289),
    new google.maps.LatLng(25.947112848476568, -97.19462307770289),
    new google.maps.LatLng(26.262811680462132, -99.21610745270289),
    new google.maps.LatLng(29.753822888758837, -101.67704495270289),
    new google.maps.LatLng(29.524651025038615, -102.55595120270289),
    new google.maps.LatLng(29.218279603096374, -102.99540432770289),
    new google.maps.LatLng(28.98789760701243, -103.08329495270289),
    new google.maps.LatLng(29.44814465578446, -104.84110745270289),
    new google.maps.LatLng(31.717825663664883, -106.77470120270289),
    new google.maps.LatLng(31.418288357499414, -108.44462307770289),
    new google.maps.LatLng(31.193005349686533, -111.25712307770289),
    new google.maps.LatLng(32.462437485792485, -114.77274807770289),
    new google.maps.LatLng(32.5365640891705, -117.23368557770289),
    new google.maps.LatLng(33.64108717674985, -118.28837307770289),
    new google.maps.LatLng(34.36967792859537, -120.39774807770289),
    new google.maps.LatLng(35.87919972686875, -121.80399807770289),
    new google.maps.LatLng(38.60737044762391, -123.82548245270289),
    new google.maps.LatLng(42.15439096501739, -124.70438870270289),
    new google.maps.LatLng(45.38991241456361, -123.91337307770289),
    new google.maps.LatLng(48.45028858007359, -124.96806057770289),
    new google.maps.LatLng(48.391959934976875, -123.82548245270289),
    new google.maps.LatLng(48.391959934976875, -123.38602932770289),
    new google.maps.LatLng(49.00711943787288, -123.03589872680698)];
    var polyline = new google.maps.Polyline({path:path, strokeColor: "#FF0000", strokeOpacity: 1.0, strokeWeight: 2});
    polyline.setMap(this.map);
    this.map.setCenter(new google.maps.LatLng(46.875453600917155, -116.25733427368196), 6);
    shapes.push(polyline);

  }

}

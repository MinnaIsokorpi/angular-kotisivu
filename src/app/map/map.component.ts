import { AfterViewInit, Component } from '@angular/core';

import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  private map: any;
  latlng: L.LatLng;
  lat: number;
  lon: number;

  constructor() {
    this.latlng = new L.LatLng(0, 0);
    this.lat = 0;
    this.lon = 0;
  }

  // Asiat jotka tehdään sitten kun templaatti eli html-osa on
  // latautunut muistiin:
  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    navigator.geolocation.watchPosition((location) => {
      this.latlng = new L.LatLng(
        location.coords.latitude,
        location.coords.longitude
      );
      this.lat = location.coords.latitude;
      this.lon = location.coords.longitude;
      console.log(this.lat + ' ' + this.lon);

      if (this.map == null) {
        this.map = L.map('map').setView(this.latlng, 13);
        // Alakulmaan mittatikku:
        L.control.scale().addTo(this.map);
      } else {
        this.map.setView(this.latlng, 13);
      }

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(this.map);

      // Täppä kartalle:
      L.marker(this.latlng).bindPopup('Hei sä oot tässä').addTo(this.map);

      // Notifikaation lähetys:
      if (this.lat > 60) {
        console.log('Testi');
        this.notifyMe();
      }
    });
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/notification
  private notifyMe(): void {
    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === 'granted') {
      // If it's okay let's create a notification
      const notification = new Notification(
        'Olet nyt 60-leveyspiirin pohjoispuolella'
      );
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          const notification = new Notification('JES kiitos luvasta');
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }
}

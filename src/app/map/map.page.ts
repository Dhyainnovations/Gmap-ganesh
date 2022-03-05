import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { GoogleMaps, GoogleMap, Environment, Marker, GoogleMapOptions, GoogleMapsEvent, LatLng } from '@ionic-native/google-maps/ngx';
import { LoadingController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
declare var google;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {

  map: GoogleMap;
  address: string;
  accuracy: number;

  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder, private loadingCtrl: LoadingController, private platform: Platform, private router: Router) { }

  ngOnInit() {
    this.mapLoding()
  }
  showLatLon: number;
  loading: any;
  latitude: number = 11.016844;
  longitude: number = 76.955833;
  mapLoding() {
    var mapOptions = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
    google.maps.event.addListener(map, 'click', function (e) {




      // console.log("Latitude: " + e.latLng.lat() + "\r\nLongitude: " + e.latLng.lng());
      this.show = (e.latLng.lat())
      console.log(this.show);

      this.address = new Object(e).toString()
      // "[object Object]"
      this.address = (e)
      alert(this.address)
      this.latitude = (e.latLng.lat());
      this.longitude = (e.latLng.lng());


      google.maps.event.addListener(map, 'click', function (event) {
        addMarker(event.latLng);
      });

      // add marker to positon
      function addMarker(location) {


        var marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'hello world'
        });
        // google.maps.event.addListenerOnce(marker, 'click', function (event) {
        //   this.setMap(null);
        // });

      }

      console.log(this.latitude, this.longitude);

    });
  }

  delete() {
    this.ngOnInit()

  }


  //Get current coordinates of device
  currentLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      alert(resp)
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.accuracy = resp.coords.accuracy;

      this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);

    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    });
  }



  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.address = this.generateAddress(result[0]);
        console.log(this.address);
      })


      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  //Return Comma saperated address
  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length)
        address += obj[val] + ', ';
    }
    return address.slice(0, -2);
  }

}





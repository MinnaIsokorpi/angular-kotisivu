# AngKotisivu - Mintzin Angular-kotisivu

Tästä linkistä pääset katsomaan tajunnanräjäyttävän lopputuloksen:
[mintzin-angular-kotisivu.web.app](https://mintzin-angular-kotisivu.web.app)

1. Luotu uusi Angular-projekti Angular CLI:n avulla sekä siihen uudet komponentit "navbar", "me", "studies" ja "hobbies"

2. Reititys ja navigointipalkki tämän ohjeen mukaan: https://angular.io/guide/router

3. Luotu sisältöä sivulle

4. Siirretty osa sisällöstä palveluun ja laitettu komponentit hakemaan sisältö http-pyyntönä palvelusta "homepage.service", joka saa tiedon tietokantaa/backendiä simuloivalta "in-memory-data.service"-palvelulta. Sisällön luokat määritelty "dataClasses.ts". Tästä kohtaa napattu ohjeita: https://angular.io/tutorial/toh-pt6

5. Lisätty UI komponentteja ottamalla käyttöön Angular Material: List, Toolbar, Tabs, Card ja Button

6. Lisätty uusi komponentti "map" ja Map-välillehti Leaflet-kartalle

7. Lisätty karttaan toiminnallisuutta (https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet):
   karttapalojen haku, täppä ja notifikaatio (https://developer.mozilla.org/en-US/docs/Web/API/notification)

8. Tehty sovelluksesta PWA-sovellus (ng add @angular/pwa), buildattu sovellus ja kokeiltu sitä http-server avulla, mutta Chromen Lighthouse ei tykkää siitä yhtään, raportti täyttä erroria ja ylhäällä teksti: "Chrome prevented page load with an interstitial. Make sure you are testing the correct URL and that the server is properly responding to all requests."

9. Yritetty lisätä Push-notifikaatio toiminto (https://malcoded.com/posts/angular-push-notifications/),
   mutta koska meillä on käytössä tuo InMemoryWebApi noita sisältöjä varten, niin notifikaatioiden
   vastaanottaminen ulkoiselta palvelimelta ja tuolta sisäiseltä ei voi toimia samaan aikaan.
   Tässä vielä StackOverFlow-linkki, jossa ihmetelty samaa asiaa:
   https://stackoverflow.com/questions/42386685/getting-json-for-angular-2-from-http-remote-server-fails-but-succeeds-localy

10. Luotu sivustolle oma GitHub-repo ja yritetty laittaa tämä sovellus sen kautta Firebase-palvelun kautta kaikkien ihailtavaksi, katsotaan miten käy...

# Other documentation

## Creation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

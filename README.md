# ProjetAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

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


## DESCRIPTION DU PROJET

Notre  projet s'inscrit dans le cadre de nos études afin de valider les competences vu en classe.
Il s'agit pour nous de réaliser une applicaton client serveur grâce à l'outil Angular. De plus nous devons 
choisir une API qui nous fourniras les données dont nous avons besoin pour notre application.

Grâce à une API de type MARVEL, notre projet a pour but de faire découvrire les personnages Marvel. 
Nous allons récuperer principalement les noms, images et descriptions des personnages MARVEL. 

L'API MARVEL met à notre disposition un nombre de personnage limité à 20 et une seul méthode "GET"

## USE

L'application posséde deux champs, recherche et resultats.
Dans le champs recherche nous avons deux maniéres de choisir le personnages:

   - Nous disposons d'une liste déroulante avec les noms des personnages fournit par l'API, lorsque l'on choisit un nom dans la liste on devrait afficher l'images, le nom et la description du personnage choisi.

   - Nous disposons d'un bouton qui nous permet de lancer une recherche aléatoire, lorsque l'on click dessus on devrait recevoir un personnage au hasard.

   - Le champ résultats devrait afficher les personnages en fonction des actions réalisées dans le champ recherche.

## ETAT DU PROJET

Le projet fonctionne en partie, nous recuperons bien les données, les noms, images et descriptions s'affichent bien, mais les actions sur la recherche ne fonctionne pas car on a du mal à faire communiquer les deux composants recherche et resultats. 



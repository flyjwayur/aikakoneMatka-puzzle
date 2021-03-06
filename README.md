## Introduction
Back to the Suomi past \^o^/

It is a collaborative multiplayer puzzle game with inspiring Finnish architecture images.

It is composed of 'front end'(written in Clojurescript) and ['backend'(written in Clojure)](https://github.com/flyjwayur/aikakonematka-puzzle-backend).

## Development 
### 1. Using 'boot'(boot run & boot build)
It is built based on a play-cljs ClojureScript game library.

Do `boot run` to develop and `boot build` to compile a release version.

### 2. Generating 'project.clj'
Whenever any boot task is run(e.g. `boot run`) `project.clj` is generated automatically

so that IntelliJ will understand this as a leiningen project and Cursive can help our development.

### 3. Running project & Browser editing 'Nightlight'
* Go to 'localhost:3000' to see running project and,

* Go to 'localhost:4000' to edit project on the browser with 'Nightlight'.

### Checking the code 
Run 'boot check' to find out if the code can be improved.

## Licensing
#### Image Copyright

For the images used in this game,

#### background images

* aikakone-intro.png
* aikakone-intro.mobile.png
* puzzle-selection-bg.png
* puzzle-play-bg.png
* ranking-board-bg.png

#### button images
* puzzle-selection-button.png
* puzzle-selection-door.png
* ranking-button.png
* audio-button.png
* play-button.png
* reset-button.png
* control-buttons.png

### other images
* choose-image.png
* click-to-start-button.png
* intro-title.png
* lovely-baby-in-puzzle.png
* lovely-baby-in-selection.png


All rights reserved to the image creator, HyeSoo Park.

Copyright @2018 HyeSoo Park 
Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
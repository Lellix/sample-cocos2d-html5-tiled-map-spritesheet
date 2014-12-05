# Cocos2d-HTML5 2.2 Tiled Map & Armature Animation Sample

### Desclaimer
See [LICENSE.md]() for license terms and conditions.

This sample is used to show the usage of Tiled Map in Cocos2d-HTML5 2.2 engine with 
Intel(R) XDK. The assets and code are created from [Map Test](https://github.com/jucimarjr/html5games/tree/master/cocos2d/mapteste) by Jucimar Junior.

### Application Files
* asset/
* lib/
* cocos2d.js
* game.js
* index.html
* main.js
* sprite.js

### Overview

`www/cocos2d.js` bootstraps the Cocos2d engine, and `www/main.js` is the entrance of the game which loads the resources and switch to the start scene.

### Game Asset Manager
Game Asset Manager (GAM) is a tool for previewing and creating code snippets for various assets commonly used in game projects. By creating or importing a game project in XDK, you will find GAM panel on the left side of "DEVELOP" tab.
With Game Asset Manager, you can generate code snippet to preload and use tiled map in Cocos2d-HTML5.

### Preload Tiled Map
In Cocos2d, all resources should be loaded by `cc.LoaderScene.preload(resources, callback)` or `cc.Loader.preload(resources, callback)` if you don't need to create a loader scene. Tiled Map file, Armature Animation file and corresponding spritesheets and images should be loaded before using them.

In this sample, all resources are loaded in `www/main.js`. See `www/main.js` for detailed usage of resource loading.

### Usage of Tiled Map
The TMX (Tile Map XML) map format used by Tiled is a flexible way to describe a tile based map. It can describe maps with any tile size, any amount of layers, any number of tile sets and it allows custom properties to be set on most elements. Beside tile layers, it can also contain groups of objects that can be placed freely. For detailed format specification, please refer to [official documentation](https://github.com/bjorn/tiled/wiki/TMX-Map-Format). And [Tiled Map Editor](http://www.mapeditor.org/) is a common tool to generate TMX file.

To add tiled map in Cocos2d, you can use `cc.TMXTiledMap.create(tmxFile)` to create a [`cc.TMXTiledMap`](http://www.cocos2d-x.org/reference/html5-js/V2.2.3/symbols/cc.TMXTiledMap.html). And then add it to a layer. For example to add `www/asset/tiles/map.tmx`, Game Asset Manager will generate following code:

```
//
// Intel XDK had generated this code snippet for you
//
// To make it work in your project,
//   follow the instructions in comments below
//

// Make sure you had preloaded the assets
//   This preload function call is usually done when loading the game
//   TODO: merge the proload array with existing one
cc.LoaderScene.preload([
    'asset/tiles/map.tmx',
    'asset/tiles/tiles.png',
    ]);
// End of preloading assets

// This function demonstrates how to load tiled map
function demoTiledMapFontUsage (parentCocosLayer) {
    var tiledMap = cc.TMXTiledMap.create("asset/tiles/map.tmx");
    var TAG_TILED_MAP = 1;
    parentCocosLayer.addChild(tiledMap, 0, TAG_TILED_MAP);

    // TODO: tiled map is loaded, write your own code below

}
```

Just paste them into your project and make changes according to your needs. See `www/game.js` for detailed usage of Tiled Map.


# Intel(R) XDK
This sample is part of the Intel(R) XDK. 
Download the Intel XDK at http://software.intel.com/en-us/html5.

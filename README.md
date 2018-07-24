# mutability-leaflet
This is a custom modification of the [mutability/dump1090](https://github.com/mutability/dump1090) web server map displaying the captured aircraft.
It includes the display of Geneva Airspace, and the use of another map library.


## Getting Started

This project is based on the dump1090-mutability v1.15, but works as well on the v1.14 release and any previous version as long as the data format that is forwarded to the web server is the same.
>This project is almost only a "look" customization, the processing logic has not been modified.

### Installing

You need an installed copy of dump1090-mutability.

Go to the html files location (default location)

```
cd /usr/share/dump1090-mutability/public_html
```

Either clone the directory or remove everything inside
```
rm -Rf ./*
```

And then put in the files from this project, either using git (might be useful to stay updated easily), or via an old copy command
```
cp -r ~/download/mutability-leaflet/* /usr/share/dump1090-mutability/public_html
```

Now you're done!

## Built With
This project relies on multiple sources/plugins

* [Leaflet JS](https://leafletjs.com/) - The map library
* [Leaflet.RotatedMarker](https://github.com/bbecquet/Leaflet.RotatedMarker) - Plugin to the Leaflet library, to rotate marker's icon
* [leaflet.fullscreen](https://github.com/brunob/leaflet.fullscreen) - Plugin to the Leaflet library, to toggle the map to fullscreen and back
* [spherical-geometry-js](https://github.com/hollandben/spherical-geometry-js) - A port of the GoogleMaps API Spherical Geometry library

## License

This project is licensed under the GPL v3 - see the [LICENSE](licenses/LICENSE) file for details.
Other source projects are licensed under bothe GPL v2+ and MIT licenses. See the [licenses](licenses) directory for details.
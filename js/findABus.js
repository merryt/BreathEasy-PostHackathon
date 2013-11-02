 

 var map;
    
      require([
        "esri/map", "esri/InfoTemplate", 
        "esri/layers/FeatureLayer", "esri/dijit/HistogramTimeSlider", 
        "dojo/parser", "dojo/dom-construct", 
        "dijit/layout/BorderContainer", "dijit/layout/ContentPane", 
        "esri/IdentityManagerBase",  "dojo/domReady!"
      ], function(
         Map, InfoTemplate, 
         FeatureLayer,
         IdentityManagerBase,
         domConstruct
      ) {
      // console.log(IdentityManagerBase.Credential);
      map = new Map("mapDiv", {
  			basemap: "streets",
  			center: [-0.22739, 5.6256 ],


  			zoom: 10
      });

      var featuresUrl = "http://services2.arcgis.com/LAcQAIYCF3p2ANkH/arcgis/rest/services/lastshot2/FeatureServer/0";
      var layer = new FeatureLayer(featuresUrl, {
        id: "u2",
        infoTemplate: new InfoTemplate(
              "Attributes", "${*}"
            ),
            // infoTemplate: new InfoTemplate("title", "description"),
            mode: FeatureLayer.MODE_SNAPSHOT, // SNAPSHOT required for the histogram time slider
            outFields: ["*"]
      });

 
          
      map.addLayer(layer);
    
   });



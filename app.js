var querystring = require('querystring');
var http = require('http');

var post_domain = 'http://services2.arcgis.com/';
var post_port = 80;
var post_path = 'LAcQAIYCF3p2ANkH/ArcGIS/rest/services/UBot--Time2/FeatureServer/0/applyEdits?f=pjson&token=HvybdTTFjKP9q0PbsckKXfcboSQAAY_Gz92sgoz5ihVBEduy2aWgMU3WFlSEmJoMlHueTgdIOIDyC3ckZYf5aVPVOxESYaius6ZzJVzMEaijl_yFtRAHkFak0XtNKrVAmbHIF8KensgpeqVv2QDs71LMv41QzRJ1mkstPZCJrdY9_BpR921lIys7tC2tXNHy';

var post_data = querystring.stringify({"geometry":{"x":-110.9,"y": 12,"spatialReference":{"wkid":4326}},"attributes":{"CO2":"200","CO":"100"}});

var post_options = {
  host: post_domain,
  port: post_port,
  path: post_path,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': post_data.length
  }
};

var post_req = http.request(post_options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('Response: ' + chunk);
  });
});

        //Request type: POST, URL: http://services2.arcgis.com/LAcQAIYCF3p2ANkH/ArcGIS/rest/services/UBot--Time2/FeatureServer/0/applyEdits?f=pjson&token=lmXOErKezzI_DxTJHAyz2RyRyryVgrZIG2pDAx7T8129gX0b6HHtp8jpD6lzkUPaCISUn4g7E6KG8niZwD1UDiZSkfyef4OoEfx0cokhvQPmKY-NfzZXIb2vycNo-FNDcWYViYoURnZ9SI8BG8CvMQ.., Content: adds=[{"geometry":{"x":-13041634.9,"y":,"spatialReference":{"wkid":4326}},"attributes":{"CO2":"200","CO":"100"}}]


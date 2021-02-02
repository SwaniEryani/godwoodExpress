import React from "react";

export default function Map() {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
        className="map-iframe"
          width="100%"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=1422%20N%20Amherst%20Hwy,%20Amherst,%20VA%2024521,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          title="mapFrame"
        ></iframe>
      </div>
    </div>
  );
}

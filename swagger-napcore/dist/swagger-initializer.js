window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "swagger.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    supportedSubmitMethods: [],
    // Hiding 'servers'-dropdown. Also hiding sub-objects from 'Scehmas'-list
    onComplete: function() {
        Array.from(document.getElementsByClassName("scheme-container")).forEach(
            function (element, index, array) {
              element.outerHTML = ""
            })
    }
  });
  //</editor-fold>
};


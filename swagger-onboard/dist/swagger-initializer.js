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
        document.getElementById("model-PrivateChannelApi").outerHTML = "";
        document.getElementById("model-PrivateChannelEndpointApi").outerHTML = ""
        document.getElementById("model-SelectorApi").outerHTML = ""
        document.getElementById("model-ApplicationApi").outerHTML = ""
        document.getElementById("model-CamApplicationApi").outerHTML = ""
        document.getElementById("model-DatexApplicationApi").outerHTML = ""
        document.getElementById("model-DenmApplicationApi").outerHTML = ""
        document.getElementById("model-IvimApplicationApi").outerHTML = ""
        document.getElementById("model-MapemApplicationApi").outerHTML = ""
        document.getElementById("model-MetadataApi").outerHTML = ""
        document.getElementById("model-SpatemApplicationApi").outerHTML = ""
        document.getElementById("model-SremApplicationApi").outerHTML= ""
        document.getElementById("model-SsemApplicationApi").outerHTML = ""
        document.getElementById("model-CapabilitySplitApi").outerHTML = ""
        document.getElementById("model-AddSubscription").outerHTML = ""


    }
  });
  //</editor-fold>
};


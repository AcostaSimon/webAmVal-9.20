//=================================================================================
// Mapa:                                                                    [.Here]
//=================================================================================
// Initialize the platform object:
var platform = new H.service.Platform({
    // Api -> simon2347 -> AmeVal -> API-KEY
    'apikey': 'XqH2rRBT4wucNcHYASBdCFYsehF7ED8HqAGJMrqqihg'
});
//---------------------------------------------------------------------------------
// Get the default map types from the Platform object:
var defaultLayers = platform.createDefaultLayers();
//---------------------------------------------------------------------------------
// Obtener mapa por defecto de la plataforma de here:
var maptypes = platform.createDefaultLayers();
//---------------------------------------------------------------------------------
// Inicializador y muestra en pantalla del mapa:
var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map, {
        // Parametros de zoom, cordenada y latitud:
        zoom: 16.6,
        center: { lng: -60.641861, lat: -32.9459 }
    });
//---------------------------------------------------------------------------------
// Eventos de sistemas en el mapa:
var mapEvents = new H.mapevents.MapEvents(map);
// Add event listeners:
map.addEventListener('tap', function(evt) {
    // Log 'tap' and 'mouse' events:
    console.log(evt.type, evt.currentPointer.type);
});
//---------------------------------------------------------------------------------
// Instantiate the default behavior, providing the mapEvents object:
var behavior = new H.mapevents.Behavior(mapEvents);
//---------------------------------------------------------------------------------
// Create the default UI:
var ui = H.ui.UI.createDefault(map, defaultLayers, 'es-ES');
//---------------------------------------------------------------------------------
// Create an info bubble object at a specific geographic location:
var bubble = new H.ui.InfoBubble({ lng: -60.641861, lat: -32.9459 }, {
    content: '<b>América Valores</b><p>Cordoba 1365 - Piso 1 Oficina 1</p>'
});
// Add info bubble to the UI:
ui.addBubble(bubble);
//---------------------------------------------------------------------------------       
// Get an instance of the geocoding service:
var service = platform.getSearchService();
// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):
service.geocode({ q: 'Córdoba 1365, 2013 Rosario, Argentina' },
    (result) => { // Add a marker for each location found
        result.items.forEach((item) => {
            map.addObject(new H.map.Marker(item.position));
        });
    }, alert);
//=================================================================================
// Ventana emergente:                                                       [Popup]
//=================================================================================
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});
//=================================================================================
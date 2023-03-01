// Import Package google-maps yang telah diinstall
import {
  GoogleMap,
  LoadScript,
  MarkerF, 
} from "@react-google-maps/api";

function App() {

  // Mengatur posisi marker untuk titik tengah map
  const center = {
    lat: -7.782825250373379,
    lng: 110.36707285574852,
  };

  const containerStyle = {
    width: '800px',
    height: '800px'
  };

  return (
    <>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-16 lg:py-16">
          <div className="hidden sm:mb-6 sm:flex sm:justify-center">
            <div className="text-center">

              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Lokasi Tugu Yogyakarta
              </h2>

              <a href="https://www.google.com/maps/place/Tugu/@-7.7828873,110.3667933,18.15z/data=!4m5!3m4!1s0x2e7a591a4d553bd5:0xc0f964003add568b!8m2!3d-7.7829218!4d110.3670757" class="no-underline hover:underline ...">Lihat di Google Maps</a>

              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-xl pt-5 pb-7">
                Jl. Jend. Sudirman
                Gowongan
                Jetis
                Yogyakarta City, Special Region of Yogyakarta 55233, Indonesia
              </h2>


              <LoadScript googleMapsApiKey={'AIzaSyAiRncAHPx3uNScCZ3RPUiErghVhZZD1vQ'}>
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={16} // 0 = zoom paling dekat, 21 = zoom paling jauh
                >
                  <MarkerF // MarkerF = Marker Fix untuk mengubah posisi marker
                    position={{
                      lat: -7.782825250373379, 
                      lng: 110.36707285574852,
                    }}
                    // Supaya marker dapat di drag 
                    draggable={true}
                  />
                </GoogleMap>
              </LoadScript>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
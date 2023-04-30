import dotenv from 'dotenv';

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: import.meta.env.VITE_APPUSERNAME,
    password: import.meta.env.VITE_APPPASSWORD,
  },
  channels: [import.meta.env.VITE_APPCHANNELS]
});



/* const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: import.meta.env.VITE_APPUSERNAME,
    password: import.meta.env.VITE_APPPASSWORD,
  },
  channels: [import.meta.env.VITE_APPCHANNELS]
}); */

const sounds = {
  yaesta: { audio: new Audio('../sonidos/!yaesta.mp3') },
  belleza: { audio: new Audio('../sonidos/!belleza.mp3') },
  donando: { audio: new Audio('../sonidos/!donando.mp3') },
  dulzura: { audio: new Audio('../sonidos/!dulzura.mp3') },
  luooz: { audio: new Audio('../sonidos/!luooz.mp3') },
  pqno: { audio: new Audio('../sonidos/!pqno.mp3') },
  regalar: { audio: new Audio('../sonidos/!regalar.mp3') },
  risa: { audio: new Audio('../sonidos/!risa.mp3') },
  rojo: { audio: new Audio('../sonidos/!rojo.mp3') },
  sorete: { audio: new Audio('../sonidos/!sorete.mp3') },
  elpecho: { audio: new Audio('../sonidos/!elpecho.mp3') },
  mami: { audio: new Audio('../sonidos/!mami.mp3') },
  papi: { audio: new Audio('../sonidos/!papi.mp3') },
  pelotudismo: { audio: new Audio('../sonidos/!pelotudismo.mp3') },
  tercermundi: { audio: new Audio('../sonidos/!tercermundi.mp3') },
  nojuego: { audio: new Audio('../sonidos/!nojuego.mp3') },
  ese: { audio: new Audio('../sonidos/!ese.mp3') },
  fin: { audio: new Audio('../sonidos/!fin.mp3') },
  rechazo: { audio: new Audio('../sonidos/!rechazo.mp3') },
  forro: { audio: new Audio('../sonidos/!forro.mp3') },
  verde: { audio: new Audio('../sonidos/!verde.mp3') },
  correPerra: { audio: new Audio('../sonidos/!correperra.mp3') },
  chingona: { audio: new Audio('../sonidos/!chingona.mp3') },
  sexo: { audio: new Audio('../sonidos/!sexo.mp3') },
  empanada: { audio: new Audio('../sonidos/!empanada.mp3') },
  anna: { audio: new Audio('../sonidos/!anna.mp3') },
  any: { audio: new Audio('../sonidos/!any.mp3') },
  cande: { audio: new Audio('../sonidos/!cande.mp3') },
  gabi: { audio: new Audio('../sonidos/!gabi.mp3') },
  magui: { audio: new Audio('../sonidos/!magui.mp3') },
  mara: { audio: new Audio('../sonidos/!mara.mp3') },
  mela: { audio: new Audio('../sonidos/!mela.mp3') },
  usted: { audio: new Audio('../sonidos/!usted.mp3') },
  pongo: { audio: new Audio('../sonidos/!pongo.mp3') },
  transmiti: { audio: new Audio('../sonidos/!ds.mp3') },
  dormir: { audio: new Audio('../sonidos/!dormir.mp3') },
  estre: { audio: new Audio('../sonidos/!estre.mp3') },
  mili: { audio: new Audio('../sonidos/!mili.mp3') },
  fati: { audio: new Audio('../sonidos/!fati.mp3') },
  unite: { audio: new Audio('../sonidos/!unite.mp3') },
  ro: { audio: new Audio('../sonidos/!ro.mp3') },
  anda: { audio: new Audio('../sonidos/!anda.mp3') },
  puntitos: { audio: new Audio('../sonidos/!puntitos.mp3') },
  eltimer: { audio: new Audio('../sonidos/!eltimer.mp3') },
  lapala: { audio: new Audio('../sonidos/!lapala.mp3') },
  llorar: { audio: new Audio('../sonidos/!llorar.mp3') },
  tere1: { audio: new Audio('../sonidos/!tere1.mp3') },
  tere2: { audio: new Audio('../sonidos/!tere2.mp3') },
  tere3: { audio: new Audio('../sonidos/!tere3.mp3') },
  tere4: { audio: new Audio('../sonidos/!tere4.mp3') },
  meter: { audio: new Audio('../sonidos/!meter.mp3') },
  hicistes: { audio: new Audio('../sonidos/!hicistes.mp3') },
  rodilla: { audio: new Audio('../sonidos/!rodilla.mp3') },

  // Agregar los demás sonidos aquí
};

function playSound(audio) {
  audio.play();
}


client.connect();
client.on('message', (channel, tags, message, self) => {

  if (message.startsWith('!')) {
    const soundName = message.slice(1); // Eliminar el signo de exclamación del mensaje
    const sound = sounds[soundName];
    if (sound) {
      playSound(sound.audio);
    }
  }

});


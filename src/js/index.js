///// CODIGO PARA PAGINA INICIO /////

// Selectores para form direccion
const ubiDireccion = document.querySelector("#direccion");
const ubiCalle = document.querySelector("#calle");
const ubiNoExt = document.querySelector("#noExt");
const ubiNoInt = document.querySelector("#noInt");
const ubiColonia = document.querySelector("#colonia");
const ubiMunicipio = document.querySelector("#municipio");
const ubiEstado = document.querySelector("#estado");
const botonSigInicio = document.querySelector(".btn-sig-inicio");

const listaAutoComp = document.querySelector("#lista-autocompletado");

const inputsList = [
  ubiDireccion,
  ubiCalle,
  ubiNoExt,
  ubiNoInt,
  ubiColonia,
  ubiMunicipio,
  ubiEstado,
];

let busquedaData = {
  id: "",
  direccion: "",
  calle: "",
  noExt: "",
  noInt: "",
  colonia: "",
  municipio: "",
  estado: "",
  cp: "",
  tipo: "",
  sola: "",
  noRecamaras: "",
  noBanos: "",
  noMediosBanos: "",
  noEstacionamientos: "",
  tamanoConstruccion: "",
  tamanoTerreno: "",
  antiguedad: "",
  nueva: "",
  amenidades: {
    aireAcondicionado: false,
    alberca: false,
    amueblado: false,
    cocinaIntegral: false,
    cuartoLavado: false,
    estudio: false,
    gimnasio: false,
    terraza: false,
    jacuzzi: false,
    seguridad: false,
  },
};

// Lista de datos de propiedades
const propiedadesData = [
  {
    id: "GHI789",
    direccion: "Calle Miguel Hidalgo 10 Colonia Centro Monterrey",
    calle: "Calle Miguel Hidalgo",
    noExt: "10",
    noInt: "3",
    colonia: "Centro",
    municipio: "Monterrey",
    estado: "Nuevo León",
    cp: "64000",
    tipo: "Casa",
    sola: true,
    noRecamaras: "4",
    noBanos: "3",
    noMediosBanos: "0",
    noEstacionamientos: "2",
    tamanoConstruccion: 250,
    tamanoTerreno: 400,
    antiguedad: "8",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: false,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "JKL012",
    direccion: "Avenida Insurgentes 500 Colonia Condesa Ciudad de México",
    calle: "Avenida Insurgentes",
    noExt: "500",
    noInt: "15",
    colonia: "Condesa",
    municipio: "Cuauhtémoc",
    estado: "Ciudad de México",
    cp: "06140",
    tipo: "Departamento",
    sola: false,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 60,
    tamanoTerreno: 0,
    antiguedad: "3",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: false,
      gimnasio: true,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "MNO345",
    direccion: "Calle Hidalgo 15 Colonia San Juan Guadalajara",
    calle: "Calle Hidalgo",
    noExt: "15",
    noInt: "2",
    colonia: "San Juan",
    municipio: "Guadalajara",
    estado: "Jalisco",
    cp: "44100",
    tipo: "Casa",
    sola: true,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "1",
    tamanoConstruccion: 150,
    tamanoTerreno: 200,
    antiguedad: "6",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "PQR678",
    direccion: "Avenida Reforma 250 Colonia Polanco Ciudad de México",
    calle: "Avenida Reforma",
    noExt: "250",
    noInt: "20",
    colonia: "Polanco",
    municipio: "Miguel Hidalgo",
    estado: "Ciudad de México",
    cp: "11560",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "2",
    noBanos: "2",
    noMediosBanos: "0",
    noEstacionamientos: "2",
    tamanoConstruccion: 120,
    tamanoTerreno: 0,
    antiguedad: "4",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: false,
      gimnasio: true,
      terraza: true,
      jacuzzi: true,
      seguridad: true,
    },
  },
  {
    id: "STU901",
    direccion: "Calle Zaragoza 5 Colonia Centro Puebla",
    calle: "Calle Zaragoza",
    noExt: "5",
    noInt: "1",
    colonia: "Centro",
    municipio: "Puebla",
    estado: "Puebla",
    cp: "72000",
    tipo: "Casa",
    sola: false,
    noRecamaras: "4",
    noBanos: "3",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 200,
    tamanoTerreno: 350,
    antiguedad: "12",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "VWX234",
    direccion: "Avenida Universidad 80 Colonia Del Valle Ciudad de México",
    calle: "Avenida Universidad",
    noExt: "80",
    noInt: "5",
    colonia: "Del Valle",
    municipio: "Benito Juárez",
    estado: "Ciudad de México",
    cp: "03100",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 100,
    tamanoTerreno: 0,
    antiguedad: "2",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: false,
      gimnasio: true,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "YZA567",
    direccion: "Calle Revolución 35 Colonia Centro Tijuana",
    calle: "Calle Revolución",
    noExt: "35",
    noInt: "12",
    colonia: "Centro",
    municipio: "Tijuana",
    estado: "Baja California",
    cp: "22000",
    tipo: "Casa",
    sola: false,
    noRecamaras: "2",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "0",
    tamanoConstruccion: 80,
    tamanoTerreno: 150,
    antiguedad: "5",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: false,
      amueblado: false,
      cocinaIntegral: false,
      cuartoLavado: true,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: false,
    },
  },
  {
    id: "BCD890",
    direccion: "Calle Juárez 25 Colonia Centro Mérida",
    calle: "Calle Juárez",
    noExt: "25",
    noInt: "4",
    colonia: "Centro",
    municipio: "Mérida",
    estado: "Yucatán",
    cp: "97000",
    tipo: "Casa",
    sola: true,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 180,
    tamanoTerreno: 250,
    antiguedad: "7",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "EFG123",
    direccion: "Avenida Morelos 120 Colonia Centro Guadalajara",
    calle: "Avenida Morelos",
    noExt: "120",
    noInt: "8",
    colonia: "Centro",
    municipio: "Guadalajara",
    estado: "Jalisco",
    cp: "44100",
    tipo: "Departamento",
    sola: false,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 70,
    tamanoTerreno: 0,
    antiguedad: "2",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: false,
      gimnasio: true,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "HIJ456",
    direccion: "Calle Independencia 75 Colonia Centro Querétaro",
    calle: "Calle Independencia",
    noExt: "75",
    noInt: "6",
    colonia: "Centro",
    municipio: "Querétaro",
    estado: "Querétaro",
    cp: "76000",
    tipo: "Casa",
    sola: true,
    noRecamaras: "2",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 90,
    tamanoTerreno: 120,
    antiguedad: "4",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "KLM789",
    direccion: "Calle Hidalgo 10 Colonia Centro Puebla",
    calle: "Calle Hidalgo",
    noExt: "10",
    noInt: "3",
    colonia: "Centro",
    municipio: "Puebla",
    estado: "Puebla",
    cp: "72000",
    tipo: "Departamento",
    sola: false,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "0",
    tamanoConstruccion: 60,
    tamanoTerreno: 0,
    antiguedad: "3",
    nueva: true,
    amenidades: {
      aireAcondicionado: true,
      alberca: false,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "NOP012",
    direccion: "Avenida Reforma 45 Colonia Juárez Ciudad de México",
    calle: "Avenida Reforma",
    noExt: "45",
    noInt: "7",
    colonia: "Juárez",
    municipio: "Ciudad de México",
    estado: "Ciudad de México",
    cp: "06600",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "2",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 120,
    tamanoTerreno: 0,
    antiguedad: "6",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: true,
      terraza: true,
      jacuzzi: true,
      seguridad: true,
    },
  },
  {
    id: "QRS345",
    direccion: "Calle Zaragoza 80 Colonia Centro Monterrey",
    calle: "Calle Zaragoza",
    noExt: "80",
    noInt: "9",
    colonia: "Centro",
    municipio: "Monterrey",
    estado: "Nuevo León",
    cp: "64000",
    tipo: "Casa",
    sola: false,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 150,
    tamanoTerreno: 200,
    antiguedad: "8",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: false,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "TUV678",
    direccion: "Calle Allende 15 Colonia Centro Guadalajara",
    calle: "Calle Allende",
    noExt: "15",
    noInt: "2",
    colonia: "Centro",
    municipio: "Guadalajara",
    estado: "Jalisco",
    cp: "44100",
    tipo: "Casa",
    sola: true,
    noRecamaras: "4",
    noBanos: "3",
    noMediosBanos: "0",
    noEstacionamientos: "2",
    tamanoConstruccion: 180,
    tamanoTerreno: 250,
    antiguedad: "5",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "WXY901",
    direccion: "Avenida 20 de Noviembre 30 Colonia Centro Mérida",
    calle: "Avenida 20 de Noviembre",
    noExt: "30",
    noInt: "1",
    colonia: "Centro",
    municipio: "Mérida",
    estado: "Yucatán",
    cp: "97000",
    tipo: "Departamento",
    sola: false,
    noRecamaras: "2",
    noBanos: "2",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 100,
    tamanoTerreno: 0,
    antiguedad: "2",
    nueva: true,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "YZA234",
    direccion: "Calle Ocampo 5 Colonia Centro Querétaro",
    calle: "Calle Ocampo",
    noExt: "5",
    noInt: "4",
    colonia: "Centro",
    municipio: "Querétaro",
    estado: "Querétaro",
    cp: "76000",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 70,
    tamanoTerreno: 0,
    antiguedad: "3",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "BCD567",
    direccion: "Calle López Mateos 25 Colonia San Pedro Monterrey",
    calle: "Calle López Mateos",
    noExt: "25",
    noInt: "3",
    colonia: "San Pedro",
    municipio: "Monterrey",
    estado: "Nuevo León",
    cp: "66220",
    tipo: "Casa",
    sola: false,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 160,
    tamanoTerreno: 300,
    antiguedad: "4",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "EFG789",
    direccion: "Avenida Juárez 60 Colonia Centro Guadalajara",
    calle: "Avenida Juárez",
    noExt: "60",
    noInt: "6",
    colonia: "Centro",
    municipio: "Guadalajara",
    estado: "Jalisco",
    cp: "44100",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "2",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 80,
    tamanoTerreno: 0,
    antiguedad: "2",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "HIJ012",
    direccion: "Calle Morelos 12 Colonia Centro Mérida",
    calle: "Calle Morelos",
    noExt: "12",
    noInt: "2",
    colonia: "Centro",
    municipio: "Mérida",
    estado: "Yucatán",
    cp: "97000",
    tipo: "Casa",
    sola: false,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 150,
    tamanoTerreno: 200,
    antiguedad: "5",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: false,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "KLM123",
    direccion: "Avenida Hidalgo 20 Colonia Centro Puebla",
    calle: "Avenida Hidalgo",
    noExt: "20",
    noInt: "5",
    colonia: "Centro",
    municipio: "Puebla",
    estado: "Puebla",
    cp: "72000",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "0",
    tamanoConstruccion: 60,
    tamanoTerreno: 0,
    antiguedad: "3",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: true,
      amueblado: false,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "NOP345",
    direccion: "Calle Reforma 25 Colonia Juárez Ciudad de México",
    calle: "Calle Reforma",
    noExt: "25",
    noInt: "8",
    colonia: "Juárez",
    municipio: "Ciudad de México",
    estado: "Ciudad de México",
    cp: "06600",
    tipo: "Departamento",
    sola: false,
    noRecamaras: "2",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 120,
    tamanoTerreno: 0,
    antiguedad: "6",
    nueva: true,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: true,
      terraza: true,
      jacuzzi: true,
      seguridad: true,
    },
  },
  {
    id: "QRS567",
    direccion: "Calle Zaragoza 40 Colonia Centro Monterrey",
    calle: "Calle Zaragoza",
    noExt: "40",
    noInt: "10",
    colonia: "Centro",
    municipio: "Monterrey",
    estado: "Nuevo León",
    cp: "64000",
    tipo: "Casa",
    sola: true,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 150,
    tamanoTerreno: 200,
    antiguedad: "8",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "XYZ789",
    direccion: "Calle del Sol 15 Colonia La Paz Guadalajara",
    calle: "Calle del Sol",
    noExt: "15",
    noInt: "4",
    colonia: "La Paz",
    municipio: "Guadalajara",
    estado: "Jalisco",
    cp: "44150",
    tipo: "Casa",
    sola: true,
    noRecamaras: "4",
    noBanos: "3",
    noMediosBanos: "0",
    noEstacionamientos: "2",
    tamanoConstruccion: 200,
    tamanoTerreno: 300,
    antiguedad: "6",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "ABC012",
    direccion: "Avenida Revolución 80 Colonia Reforma Ciudad de México",
    calle: "Avenida Revolución",
    noExt: "80",
    noInt: "6",
    colonia: "Reforma",
    municipio: "Ciudad de México",
    estado: "Ciudad de México",
    cp: "06030",
    tipo: "Departamento",
    sola: false,
    noRecamaras: "2",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 90,
    tamanoTerreno: 0,
    antiguedad: "4",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "DEF345",
    direccion: "Calle Allende 10 Colonia Centro Puebla",
    calle: "Calle Allende",
    noExt: "10",
    noInt: "3",
    colonia: "Centro",
    municipio: "Puebla",
    estado: "Puebla",
    cp: "72000",
    tipo: "Casa",
    sola: true,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 160,
    tamanoTerreno: 200,
    antiguedad: "5",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: false,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "GHI678",
    direccion: "Calle Hidalgo 30 Colonia Centro Guanajuato",
    calle: "Calle Hidalgo",
    noExt: "30",
    noInt: "2",
    colonia: "Centro",
    municipio: "Guanajuato",
    estado: "Guanajuato",
    cp: "36000",
    tipo: "Departamento",
    sola: false,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 70,
    tamanoTerreno: 0,
    antiguedad: "2",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: true,
      amueblado: false,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: true,
      gimnasio: true,
      terraza: true,
      jacuzzi: false,
      seguridad: false,
    },
  },
  {
    id: "JKL901",
    direccion: "Avenida Reforma 120 Colonia Juárez Ciudad de México",
    calle: "Avenida Reforma",
    noExt: "120",
    noInt: "5",
    colonia: "Juárez",
    municipio: "Ciudad de México",
    estado: "Ciudad de México",
    cp: "06600",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "2",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "1",
    tamanoConstruccion: 100,
    tamanoTerreno: 0,
    antiguedad: "3",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "MNO234",
    direccion: "Calle Morelos 5 Colonia Centro Mérida",
    calle: "Calle Morelos",
    noExt: "5",
    noInt: "1",
    colonia: "Centro",
    municipio: "Mérida",
    estado: "Yucatán",
    cp: "97000",
    tipo: "Casa",
    sola: false,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 180,
    tamanoTerreno: 250,
    antiguedad: "7",
    nueva: true,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: true,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: true,
      seguridad: true,
    },
  },
  {
    id: "PQR567",
    direccion: "Calle San Luis 20 Colonia Centro Monterrey",
    calle: "Calle San Luis",
    noExt: "20",
    noInt: "2",
    colonia: "Centro",
    municipio: "Monterrey",
    estado: "Nuevo León",
    cp: "64000",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 80,
    tamanoTerreno: 0,
    antiguedad: "1",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: false,
      gimnasio: true,
      terraza: false,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "STU123",
    direccion: "Avenida Morelos 50 Colonia Centro Querétaro",
    calle: "Avenida Morelos",
    noExt: "50",
    noInt: "3",
    colonia: "Centro",
    municipio: "Querétaro",
    estado: "Querétaro",
    cp: "76000",
    tipo: "Casa",
    sola: false,
    noRecamaras: "4",
    noBanos: "3",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 220,
    tamanoTerreno: 280,
    antiguedad: "8",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: false,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "VWX890",
    direccion: "Calle Zaragoza 25 Colonia Centro Guadalajara",
    calle: "Calle Zaragoza",
    noExt: "25",
    noInt: "4",
    colonia: "Centro",
    municipio: "Guadalajara",
    estado: "Jalisco",
    cp: "44100",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "2",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 90,
    tamanoTerreno: 0,
    antiguedad: "3",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "YZA678",
    direccion: "Calle Juárez 35 Colonia Centro Oaxaca",
    calle: "Calle Juárez",
    noExt: "35",
    noInt: "2",
    colonia: "Centro",
    municipio: "Oaxaca",
    estado: "Oaxaca",
    cp: "68000",
    tipo: "Casa",
    sola: false,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 150,
    tamanoTerreno: 180,
    antiguedad: "5",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "BCD901",
    direccion: "Avenida 5 de Mayo 40 Colonia Centro Pachuca",
    calle: "Avenida 5 de Mayo",
    noExt: "40",
    noInt: "3",
    colonia: "Centro",
    municipio: "Pachuca",
    estado: "Hidalgo",
    cp: "42000",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 75,
    tamanoTerreno: 0,
    antiguedad: "2",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: false,
      gimnasio: true,
      terraza: false,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "ABC123",
    direccion: "Calle Revolución 15 Colonia Centro Tijuana",
    calle: "Calle Revolución",
    noExt: "15",
    noInt: "2",
    colonia: "Centro",
    municipio: "Tijuana",
    estado: "Baja California",
    cp: "22000",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "2",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 85,
    tamanoTerreno: 0,
    antiguedad: "4",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: false,
      gimnasio: true,
      terraza: false,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "DEF456",
    direccion: "Avenida Hidalgo 80 Colonia Centro Mérida",
    calle: "Avenida Hidalgo",
    noExt: "80",
    noInt: "4",
    colonia: "Centro",
    municipio: "Mérida",
    estado: "Yucatán",
    cp: "97000",
    tipo: "Casa",
    sola: false,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 150,
    tamanoTerreno: 200,
    antiguedad: "6",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "GHI789",
    direccion: "Calle Independencia 25 Colonia Centro Guanajuato",
    calle: "Calle Independencia",
    noExt: "25",
    noInt: "3",
    colonia: "Centro",
    municipio: "Guanajuato",
    estado: "Guanajuato",
    cp: "36000",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 75,
    tamanoTerreno: 0,
    antiguedad: "3",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "JKL012",
    direccion: "Avenida Juárez 120 Colonia Del Valle Ciudad de México",
    calle: "Avenida Juárez",
    noExt: "120",
    noInt: "5",
    colonia: "Del Valle",
    municipio: "Ciudad de México",
    estado: "Ciudad de México",
    cp: "03100",
    tipo: "Casa",
    sola: true,
    noRecamaras: "4",
    noBanos: "3",
    noMediosBanos: "0",
    noEstacionamientos: "2",
    tamanoConstruccion: 200,
    tamanoTerreno: 300,
    antiguedad: "10",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: false,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: true,
      seguridad: true,
    },
  },
  {
    id: "MNO345",
    direccion: "Calle Reforma 70 Colonia Reforma Monterrey",
    calle: "Calle Reforma",
    noExt: "70",
    noInt: "2",
    colonia: "Reforma",
    municipio: "Monterrey",
    estado: "Nuevo León",
    cp: "64000",
    tipo: "Departamento",
    sola: false,
    noRecamaras: "2",
    noBanos: "2",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 90,
    tamanoTerreno: 0,
    antiguedad: "5",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: false,
      gimnasio: true,
      terraza: false,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "PQR678",
    direccion: "Avenida Benito Juárez 50 Colonia Centro Oaxaca",
    calle: "Avenida Benito Juárez",
    noExt: "50",
    noInt: "1",
    colonia: "Centro",
    municipio: "Oaxaca",
    estado: "Oaxaca",
    cp: "68000",
    tipo: "Casa",
    sola: true,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 150,
    tamanoTerreno: 200,
    antiguedad: "8",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "STU901",
    direccion: "Calle Miguel Hidalgo 35 Colonia Centro Querétaro",
    calle: "Calle Miguel Hidalgo",
    noExt: "35",
    noInt: "3",
    colonia: "Centro",
    municipio: "Querétaro",
    estado: "Querétaro",
    cp: "76000",
    tipo: "Departamento",
    sola: false,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 75,
    tamanoTerreno: 0,
    antiguedad: "2",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "VWX234",
    direccion: "Avenida Constitución 65 Colonia Centro Puebla",
    calle: "Avenida Constitución",
    noExt: "65",
    noInt: "4",
    colonia: "Centro",
    municipio: "Puebla",
    estado: "Puebla",
    cp: "72000",
    tipo: "Casa",
    sola: true,
    noRecamaras: "2",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 85,
    tamanoTerreno: 0,
    antiguedad: "4",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: false,
      gimnasio: true,
      terraza: false,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "YZA567",
    direccion: "Calle Allende 20 Colonia Centro San Miguel de Allende",
    calle: "Calle Allende",
    noExt: "20",
    noInt: "3",
    colonia: "Centro",
    municipio: "San Miguel de Allende",
    estado: "Guanajuato",
    cp: "37700",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 75,
    tamanoTerreno: 0,
    antiguedad: "3",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "BCD890",
    direccion: "Avenida Insurgentes 40 Colonia Condesa Ciudad de México",
    calle: "Avenida Insurgentes",
    noExt: "40",
    noInt: "2",
    colonia: "Condesa",
    municipio: "Ciudad de México",
    estado: "Ciudad de México",
    cp: "06140",
    tipo: "Departamento",
    sola: false,
    noRecamaras: "2",
    noBanos: "2",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 90,
    tamanoTerreno: 0,
    antiguedad: "5",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: false,
      gimnasio: true,
      terraza: false,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "EFG234",
    direccion: "Calle Reforma 60 Colonia Reforma Guadalajara",
    calle: "Calle Reforma",
    noExt: "60",
    noInt: "1",
    colonia: "Reforma",
    municipio: "Guadalajara",
    estado: "Jalisco",
    cp: "44100",
    tipo: "Casa",
    sola: true,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 150,
    tamanoTerreno: 200,
    antiguedad: "8",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "GHI456",
    direccion: "Avenida Morelos 30 Colonia Centro Cuernavaca",
    calle: "Avenida Morelos",
    noExt: "30",
    noInt: "3",
    colonia: "Centro",
    municipio: "Cuernavaca",
    estado: "Morelos",
    cp: "62000",
    tipo: "Departamento",
    sola: false,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 75,
    tamanoTerreno: 0,
    antiguedad: "3",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "JKL678",
    direccion: "Calle 5 de Mayo 10 Colonia Centro Pachuca",
    calle: "Calle 5 de Mayo",
    noExt: "10",
    noInt: "2",
    colonia: "Centro",
    municipio: "Pachuca",
    estado: "Hidalgo",
    cp: "42000",
    tipo: "Casa",
    sola: true,
    noRecamaras: "2",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 85,
    tamanoTerreno: 0,
    antiguedad: "4",
    nueva: false,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: true,
      cuartoLavado: false,
      estudio: false,
      gimnasio: true,
      terraza: false,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "MNO012",
    direccion: "Avenida Zaragoza 20 Colonia Centro Guadalajara",
    calle: "Avenida Zaragoza",
    noExt: "20",
    noInt: "1",
    colonia: "Centro",
    municipio: "Guadalajara",
    estado: "Jalisco",
    cp: "44100",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 75,
    tamanoTerreno: 0,
    antiguedad: "3",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "PQR345",
    direccion: "Calle Revolución 10 Colonia Centro Toluca",
    calle: "Calle Revolución",
    noExt: "10",
    noInt: "3",
    colonia: "Centro",
    municipio: "Toluca",
    estado: "Estado de México",
    cp: "50000",
    tipo: "Casa",
    sola: true,
    noRecamaras: "3",
    noBanos: "2",
    noMediosBanos: "1",
    noEstacionamientos: "2",
    tamanoConstruccion: 150,
    tamanoTerreno: 200,
    antiguedad: "6",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: true,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "STU678",
    direccion: "Avenida Hidalgo 35 Colonia Centro Guadalajara",
    calle: "Avenida Hidalgo",
    noExt: "35",
    noInt: "2",
    colonia: "Centro",
    municipio: "Guadalajara",
    estado: "Jalisco",
    cp: "44100",
    tipo: "Departamento",
    sola: false,
    noRecamaras: "2",
    noBanos: "2",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 90,
    tamanoTerreno: 0,
    antiguedad: "5",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: false,
      gimnasio: true,
      terraza: false,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "VWX012",
    direccion: "Calle Juárez 30 Colonia Centro Mérida",
    calle: "Calle Juárez",
    noExt: "30",
    noInt: "3",
    colonia: "Centro",
    municipio: "Mérida",
    estado: "Yucatán",
    cp: "97000",
    tipo: "Casa",
    sola: true,
    noRecamaras: "2",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 85,
    tamanoTerreno: 0,
    antiguedad: "4",
    nueva: false,
    amenidades: {
      aireAcondicionado: true,
      alberca: false,
      amueblado: false,
      cocinaIntegral: true,
      cuartoLavado: true,
      estudio: false,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
  {
    id: "YZA234",
    direccion: "Avenida Madero 20 Colonia Centro Querétaro",
    calle: "Avenida Madero",
    noExt: "20",
    noInt: "2",
    colonia: "Centro",
    municipio: "Querétaro",
    estado: "Querétaro",
    cp: "76000",
    tipo: "Departamento",
    sola: true,
    noRecamaras: "1",
    noBanos: "1",
    noMediosBanos: "0",
    noEstacionamientos: "1",
    tamanoConstruccion: 75,
    tamanoTerreno: 0,
    antiguedad: "3",
    nueva: true,
    amenidades: {
      aireAcondicionado: false,
      alberca: false,
      amueblado: true,
      cocinaIntegral: false,
      cuartoLavado: false,
      estudio: true,
      gimnasio: false,
      terraza: true,
      jacuzzi: false,
      seguridad: true,
    },
  },
];

// Lista de direcciones
var direcciones = [
  "Calle 1",
  "Calle 2",
  "Calle 3",
  "Avenida 1",
  "Avenida 2",
  "Avenida 3",
];

// Valida los campos de busqueda
function validateInputField(event, f) {
  let campo = event.target;
  let valor = campo.value;

  clearErrorMessage(campo);

  // Verificar que el campo no este vacio
  if (valor == "") {
    f(campo, "Campo obligatorio");
    botonSigInicio.disabled = true;
    return;
  }
}

// Añade los datos ingresados en el input al array busquedaData
function addInicioInput(e) {
  let inputValue = e.target.value;
  let campo = e.target.id;
  busquedaData[campo] = inputValue;
}

// Valida todos los campos
function validateAllFieldsUbicacion() {
  for (let i = 0; i < inputsList.length; i++) {
    const input = inputsList[i];
    if (input.value == "") {
      botonSigInicio.disabled = true;
      return false;
    }
  }
  botonSigInicio.disabled = false;
  return true;
}

// Mostrar mensaje error en los inputs de texto
function showMessageError(elem, msg) {
  // Agrega el mensaje de error pòr encima del campo
  let errorMsg = document.createElement("div");
  errorMsg.className = "error-message";
  errorMsg.innerText = msg;
  elem.parentNode.insertBefore(errorMsg, elem);
  elem.className = "error-input";
}

// Limpia el mensaje de error del dom
function clearErrorMessage(campo) {
  // Eliminar mensajes de error si los hay
  let msgError = campo.previousElementSibling;
  if (msgError && msgError.classList.contains("error-message")) {
    msgError.parentNode.removeChild(msgError);
    // Restaurar el estilo del campo
    campo.className = "";
  }
}

// Funcion de autocompletado
function autoComplete(event) {
  var text = event.target.value;
  var sugerencias = [];

  if (text.length > 0) {
    sugerencias = direcciones.filter((direccion) =>
      direccion.toLowerCase().startsWith(text.toLowerCase())
    );
  }

  // Mostrar o ocultar el dropdown si es que hay sugerencias o no
  if (sugerencias.length > 0) {
    showSuggestions(sugerencias);
  } else {
    listaAutoComp.style.display = "none";
  }
}

// Almacena datos de busqueda en ls
function storageSearchData(event, lista, button) {
  event.preventDefault();

  // Almacena en localstorage
  localStorage.setItem("busqueda", JSON.stringify(busquedaData));

  // Resetea los inputs del form
  lista.forEach((input) => (input.value = ""));

  button.disabled = true;

  // Envia un alert para notficar ls datos fueron guardados
  alert("Datos ingresados correctamente");

  let paginaActual = window.location.href;
  let urlObj = new URL(paginaActual);
  // Obtener la parte de la URL deseada
  var nombrePagina = urlObj.pathname;

  if (nombrePagina == "/index.html" || nombrePagina == "/") {
    window.location.href = "/detalles.html";
  } else if (nombrePagina == "/detalles.html") {
    window.location.href = "/resultados.html";
  }
}

// Mostrar dropdown de sugerencia de direcciones
function showSuggestions(suggestions) {
  // Limpar el dropdown antes de mostrar nuevas sugerencias
  listaAutoComp.innerHTML = "";

  suggestions.forEach((sugerencia) => {
    let listItem = document.createElement("li");
    listItem.textContent = sugerencia;

    listItem.addEventListener("click", () => {
      ubiDireccion.value = sugerencia;
      listaAutoComp.style.display = "none";
    });

    listaAutoComp.appendChild(listItem);
  });
  listaAutoComp.style.display = "block";
  listaAutoComp.style.width = ubiDireccion.offsetWidth + "px";
}

///// CODIGO PARA PAGINA DETALLES /////

// Selectores para form detalles
const buttonsDetalle = document.querySelectorAll(".button--outlined");
const checkBoxesDetalle = document.querySelectorAll("[type='checkbox']");

const inputConstruccion = document.querySelector("#tamanoConstruccion");
const inputTerreno = document.querySelector("#tamanoTerreno");
const inputAntiguedad = document.querySelector("#antiguedad");
const containerButtons = document.querySelectorAll(".row-buttons");
const containerCheckboxes = document.querySelector("#amenidades");
const botonSigDetalle = document.querySelector(".btn-sig-detalle");

const detInputList = [inputConstruccion, inputTerreno, inputAntiguedad];

// Estilos para botones
// Determina el estado del boton y ejecuta funcion para cambiar color
function getStateButton(e) {
  let evento = e.target;
  const parent = evento.parentElement;

  for (const child of parent.children) {
    if (child.classList.contains("toggled")) {
      changeBackground(child, "#fff", "1px solid #8f8f8f", "#555555");
      child.classList.remove("toggled");
    }
    changeBackground(evento, "#ff6d60", "1px solid #ff6d60", "#fff");
    evento.classList.add("toggled");
  }
}

// Efectua el cambio de fondo en boton
function changeBackground(evento, bgColor, border, color) {
  evento.style.backgroundColor = bgColor;
  evento.style.border = border;
  evento.style.color = color;
}

// Añade datos de botones
function addDetalleButton(e) {
  let buttonValue = e.target.dataset.value;
  let campo = e.target.parentElement.id;
  busquedaData[campo] = buttonValue;
}

// Añade datos de inputs
function addDetalleInput(e) {
  let inputValue = e.target.value;
  let campo = e.target.id;
  busquedaData[campo] = inputValue;
}

// Añade datos de checkboxes
function addDetalleCheckbox(e) {
  let inputValue = e.target.checked;
  let campo = e.target.parentElement.parentElement.id;
  let campoAmenidad = e.target.id;
  busquedaData[campo][campoAmenidad] = inputValue;
}

function validateButtonsDetalle() {
  for (let i = 0; i < containerButtons.length; i++) {
    let container = containerButtons[i];
    // Verificar si es un div con la clase "toggled" que representan los buttons
    if (!container.querySelector(".toggled")) {
      return false;
    }
  }
  return true;
}

function validateCheckBoxesDetalle() {
  const containerList = Array.from(containerCheckboxes.children);
  for (let i = 0; i < containerList.length; i++) {
    let checkbox = containerList[i].querySelector("[type='checkbox']");
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
}

function validateInputsDetalle() {
  for (let i = 0; i < detInputList.length; i++) {
    let input = detInputList[i];
    if (input.value == "") {
      return false;
    }
  }
  return true;
}

// Evalua si todos los campos de detalle son validos
function validateAllFieldsDetalle() {
  if (
    validateButtonsDetalle() &&
    validateCheckBoxesDetalle() &&
    validateInputsDetalle()
  ) {
    botonSigDetalle.disabled = false;
  } else {
    botonSigDetalle.disabled = true;
  }
}

////// CODIGO PARA PAGINA RESULTADOS //////
const containerResultados = document.querySelector(".resultados");
const buttonNewBusqueda = document.querySelector("#nuevaBusqueda");

// Filtra datos de lista de propiedades a partir de los datos de busqueda del ls
function filterPropiedades(listaProps) {
  let filteredLista = listaProps
    .filter((prop) => prop.estado === busquedaData.estado)
    .filter((prop) => prop.tipo === busquedaData.tipo)
    .filter(
      (prop) =>
        +busquedaData.tamanoConstruccion <= +prop.tamanoConstruccion + 50 ||
        +busquedaData.tamanoConstruccion >= +prop.tamanoConstruccion + 50
    );

  return filteredLista;
}

// Muestra las cards
function showResults(lista) {
  // Itera cada prop
  let listaCards = lista.map((prop) => {
    // Extrae los valores de amenidades para generar sus iconos
    // let iconosAmenidades = assignIcon(prop.amenidades);
    // iconosAmenidades = iconosAmenidades.map((icon) => {
    //   return `<div class="card-info__amenidades--item tooltip">
    //     ${icon}
    //     <span class="tooltiptext">icon.textContent</span>
    //   </div>`;
    // });

    let card = document.createElement("div");
    card.className = "card-info";
    card.innerHTML = `
      <div class="card-info__image">
        <img src="./build/img/propiedad-1.jpg" alt="${prop.tipo}" />
        <div class="card__info__image badge">${prop.tipo}</div>
      </div>
      <div class="card-info__content">
        <div class="card-info__title">
          <h5>${prop.tipo} en colonia ${prop.colonia}</h5>
        </div>
        <div class="card-info__icon-details">
          <div class="tooltip">
            <span class="material-symbols-outlined">house</span>
            ${prop.tamanoConstruccion}m&sup2;
            <span class="tooltiptext">Tamaño de la construcción</span>
          </div>
          <div class="tooltip">
            <span class="material-symbols-outlined">crop_square</span>
            ${prop.tamanoTerreno}m&sup2;
            <span class="tooltiptext">Tamaño del terreno</span>
          </div>
          <div class="tooltip">
            <span class="material-symbols-outlined">hourglass_empty</span>${
              prop.antiguedad
            } años
            <span class="tooltiptext">
              Tiempo pasado desde que la propiedad fue construida
            </span>
          </div>
        </div>
        <div class="card-info__direccion">
          <p>
            ${prop.direccion}
          </p>
        </div>
        <div class="card-info__list">
          <ul>
            <li>- ${prop.noRecamaras} Recámaras</li>
            <li>- ${prop.noBanos} Baños</li>
            <li>- ${prop.noMediosBanos} Medios baños</li>
            <li>- ${prop.noEstacionamientos} Estacionamientos</li>
            <li>${prop.sola ? "- Casa sola" : ""}</li>
          </ul>
        </div>
        <div class="card-info__footer">
          <div class="card-info__amenidades">

          </div>
          <div class="button button--primary button--small full-width">
            Ver propiedad
          </div>
        </div>
      </div>
`;

    // Muestra la propiedad en el DOM
    containerResultados.appendChild(card);
  });
}

// Asigna un icono para cada amenidad
// function assignIcon(obj) {
//   const iconList = [
//     "location_on",
//     "pool",
//     "dresser",
//     "countertops",
//     "local_la",
//     "chair_alt",
//     "fitness_center",
//     "yard",
//     "roofing",
//     "hot_tub",
//     "zone_person_urgent",
//   ];

//   const listaSpans = [];

//   for (let prop in obj) {
//     if (obj[prop] && obj.hasOwnProperty(prop)) {
//       const spanValue = iconList[prop];
//       if (spanValue) {
//         const span = document.createElement("span");
//         span.classList.add("material-symbols-outlined");
//         span.textContent = spanValue;
//         listaSpans.push(span);
//       }
//     }
//   }
//   return listaSpans;
// }

// Nueva busqueda
function newBusqueda() {
  localStorage.removeItem("busqueda");
}

///// LISTENERS /////

// Agrega listeners al cargar dom
document.addEventListener("DOMContentLoaded", () => {
  // Llenar objeto con datos guardados en ls
  if (localStorage.getItem("busqueda")) {
    busquedaData = JSON.parse(localStorage.getItem("busqueda"));
  }

  ///// LISTENERS PARA PAGINA INICIO /////
  // Listeners para inputs
  if (!inputsList.includes(null)) {
    inputsList.forEach((item) => {
      item.addEventListener("input", function (e) {
        validateInputField(e, showMessageError);
        addInicioInput(e);
        validateAllFieldsUbicacion();
      });
    });
  }

  // Listener para autocompletado
  if (ubiDireccion) ubiDireccion.addEventListener("input", autoComplete);

  // Listener para boton "Siguiente"
  if (botonSigInicio)
    botonSigInicio.addEventListener("click", (e) =>
      storageSearchData(e, inputsList, this)
    );

  ///// LISTENERS PARA PAGINA DETALLES /////

  // Listener para boton "Siguiente"
  if (botonSigDetalle)
    botonSigDetalle.addEventListener("click", (e) =>
      storageSearchData(e, detInputList, this)
    );

  // Listeners para botones detalles
  if (buttonsDetalle) {
    buttonsDetalle.forEach((item) => {
      item.addEventListener("click", function (e) {
        getStateButton(e);
        addDetalleButton(e);
        validateAllFieldsDetalle();
      });
    });
  }
  // Listeners para checkbox
  if (checkBoxesDetalle) {
    checkBoxesDetalle.forEach((item) => {
      item.addEventListener("change", function (e) {
        addDetalleCheckbox(e);
        validateAllFieldsDetalle();
      });
    });
  }

  // Listeners para inputs detalles
  if (!detInputList.includes(null)) {
    detInputList.forEach((item) => {
      item.addEventListener("input", function (e) {
        addDetalleInput(e);
        validateInputField(e, showMessageError);
        validateAllFieldsDetalle();
      });
    });
  }

  ////// LISTENERS PARA RESULTADOS //////
  let url = window.location.href;
  let pagina = url.substring(url.lastIndexOf("/") + 1);
  if (pagina === "resultados.html") {
    let propiedades = filterPropiedades(propiedadesData);
    showResults(propiedades);
    buttonNewBusqueda.addEventListener("click", function () {
      newBusqueda();
      alert("Datos de busqueda reiniciados, redirigiendo al inicio");
      window.location.href = "/";
    });
  }
});

// Ocultar el GIF de carga después de 2 segundos
setTimeout(function () {
  let loadingElement = document.getElementById("loading"); //Gif de carga
  let allContent = document.querySelector(".all-content"); //Resto del contenido de la pagina
  loadingElement.style.display = "none";
  allContent.style.display = "block";
}, 2000);

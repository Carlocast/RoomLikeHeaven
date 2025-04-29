// utils/dataCase.ts

export interface Casa {
  id: string;
  nome: string;
  descrizione: string;
  prezzo: number;
  immagini: string[];
  città: string;
}

export const caseDati: Casa[] = [
  {
    id: "casa-roma",
    nome: "Splendida casa a Roma",
    descrizione: "Bellissimo appartamento vicino al Colosseo.",
    prezzo: 120,
    immagini: ["/immagini/casa-roma.jpg"],
    città: "Roma",
  },
  {
    id: "casa-firenze",
    nome: "Appartamento nel centro di Firenze",
    descrizione: "Accogliente casa nel cuore storico.",
    prezzo: 150,
    immagini: ["/immagini/casa-firenze.jpg"],
    città: "Firenze",
  },
  {
    id: "casa-venezia",
    nome: "Villa romantica a Venezia",
    descrizione: "Villa con vista sui canali veneziani.",
    prezzo: 200,
    immagini: ["/immagini/casa-venezia.jpg"],
    città: "Venezia",
  },
];
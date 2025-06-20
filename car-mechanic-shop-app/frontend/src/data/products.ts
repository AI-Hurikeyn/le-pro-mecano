export interface Product {
  nom: string;
  image: string;
  prix: string;
  specifications: Record<string, string>;
}

export const products: Product[] = [
  {
    nom: "Filtre à air haute performance",
    image: "https://mon-site.com/img/filtre-air.jpg",
    prix: "19,90 €",
    specifications: {
      dimensions: "20×20×5 cm",
      compatibilité: "Tous modèles essence",
      matériau: "Mousse synthétique"
    }
  },
  {
    nom: "Filtre à huile premium",
    image: "https://mon-site.com/img/filtre-huile.jpg",
    prix: "9,50 €",
    specifications: {
      dimensions: "7×7×10 cm",
      compatibilité: "Moteurs diesel et essence",
      matériau: "Acier et fibre synthétique"
    }
  },
  {
    nom: "Huile moteur semi-synthétique 5W-40",
    image: "https://mon-site.com/img/huile-5w40.jpg",
    prix: "24,90 €",
    specifications: {
      viscosité: "5W-40",
      volume: "5 L",
      compatibilité: "Tous moteurs modernes",
      normes: "API SN, ACEA A3/B4"
    }
  },
  {
    nom: "Coussinets de bielle standard",
    image: "https://mon-site.com/img/coussinets-bielle.jpg",
    prix: "39,90 €",
    specifications: {
      taille: "0,25 mm",
      compatibilité: "Moteurs 4-cylindres",
      matériau: "Cuivre-aluminium"
    }
  },
  {
    nom: "Fusible automobile standard",
    image: "https://mon-site.com/img/fusible.jpg",
    prix: "1,20 €",
    specifications: {
      ampérage: "10 A",
      type: "Mini lame",
      compatibilité: "Boîtiers standard"
    }
  },
  {
    nom: "Lampe H7 halogène",
    image: "https://mon-site.com/img/lampe-h7.jpg",
    prix: "7,90 €",
    specifications: {
      puissance: "55 W",
      température: "3200 K",
      compatibilité: "Phares avant H7"
    }
  },
  {
    nom: "Relais électrique 12 V",
    image: "https://mon-site.com/img/relais-12v.jpg",
    prix: "4,50 €",
    specifications: {
      tension: "12 V",
      capacité: "30 A",
      broches: "5 broches standard"
    }
  }
];

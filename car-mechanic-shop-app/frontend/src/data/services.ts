export interface Service {
  key: string;
  title: string;
  price: string;
  steps: string[];
}

export const services: Service[] = [
  {
    key: 'diagnostic',
    title: 'Diagnostic complet',
    price: '29,90 €',
    steps: [
      'Analyse du moteur avec outil OBD-II',
      'Contrôle visuel des systèmes d’allumage et d’injection',
      'Test de compression et pression',
      'Rapport complet et recommandations'
    ]
  },
  {
    key: 'vidange',
    title: 'Vidange complète',
    price: '39,90 €',
    steps: [
      'Vidange de l’huile usagée',
      'Remplacement du filtre à huile',
      'Contrôle et réglage des niveaux',
      'Test routier de vérification'
    ]
  },
  {
    key: 'lavage',
    title: 'Lavage intérieur et extérieur',
    price: '19,90 €',
    steps: [
      'Nettoyage haute pression de la carrosserie',
      'Aspiration complète de l’habitacle',
      'Shampoing des tapis et sièges',
      'Traitement anti-taches et désodorisation'
    ]
  },
  {
    key: 'suspension',
    title: 'Réparation suspension',
    price: '79,90 €',
    steps: [
      'Diagnostic des amortisseurs et ressorts',
      'Remplacement des pièces usées',
      'Alignement des trains roulants',
      'Test dynamique sur route'
    ]
  },
  {
    key: 'transmission',
    title: 'Réparation transmission',
    price: '99,90 €',
    steps: [
      'Diagnostic boîte de vitesses et embrayage',
      'Vidange/contrôle du fluide de transmission',
      'Réglage ou remplacement de l’embrayage',
      'Essai et test de passage des vitesses'
    ]
  },
  {
    key: 'freinage',
    title: 'Réparation système de freinage',
    price: '69,90 €',
    steps: [
      'Contrôle des plaquettes et disques',
      'Remplacement des plaquettes si nécessaire',
      'Purge et renouvellement du liquide de frein',
      'Test d’efficacité au freinage'
    ]
  }
];

db = db.getSiblingDB("BookymeStores");

db.createCollection("stores");

let data = 
db.stores.insertMany([{
  "_id": {
    "$oid": "5fcbe79eacd2bb2326ca7a19"
  },
  "verified": false,
  "hasPlant": false,
  "latitude": 41.5547235,
  "longitude": -8.4276264,
  "rating": 0,
  "name": "Armazém Viegas (Novidadextra LDA)",
  "category": "Comércio Tradicional",
  "description": "A Loja Armazém Viegas é das mais antigas lojas da cidade de Braga a vender variadíssimos tipos de produtos, entre sacos pláticos, círios, roupas interiores, texteis para lar, retrosaria, papelaria, destacando-se dos demais por ser um comércio de atendimento tipico tradicional.",
  "address": "Praça do Comércio, nº 83, 4700-370 Braga",
  "schedule": [],
  "photos": [],
  "phone": 253277185
},{
  "_id": {
    "$oid": "5fcbe818acd2bb2326ca7a1a"
  },
  "verified": false,
  "hasPlant": false,
  "latitude": 41.4071301,
  "longitude": -8.5218362,
  "rating": 0,
  "name": "Salão 2000",
  "category": "Barbeiro",
  "description": "A empresa Salão 2000 Cabeleireiro tem a sua sede localizada na freguesia de União das Freguesias de Vila Nova de Famalicão e Calendário , concelho de Vila Nova de Famalicão, distrito de Braga. Para correspondência postal deverá utilizar a morada Rua Barão Trovisqueira C.C. - Lj. 21, Vila Nova de Famalicão, 4760-126 VILA NOVA DE FAMALICÃO.",
  "address": "Rua Barão Trovisqueira C.C. - Lj. 21, 4760-126 Vila Nova de Famalicão",
  "schedule": [],
  "photos": [],
  "phone": 252374876
},{
  "_id": {
    "$oid": "5fcbfbddacd2bb2326ca7a1b"
  },
  "verified": false,
  "hasPlant": false,
  "latitude": 41.5027587,
  "longitude": -8.4344443,
  "rating": 0,
  "name": "Casa Livita",
  "category": "Restauração",
  "description": "",
  "address": "Rua de Sandins 6 Perto Da Moto Veiga, Braga 4705-480 Portugal",
  "schedule": [],
  "photos": [],
  "logo": {
    "_id": {
      "$oid": "5fd652456c110bb40443a61b"
    },
    "url": "/public/logos/5fcbfbddacd2bb2326ca7a1bddf092ff-6bd5-4f07-8880-b040de124a52.png"
  },
  "phone": 253681714
},{
  "_id": {
    "$oid": "5fcbfd3cacd2bb2326ca7a1c"
  },
  "verified": false,
  "hasPlant": false,
  "latitude": 41.5631348,
  "longitude": -8.4203976,
  "rating": 0,
  "name": "Taberna Belga",
  "category": "Restauração",
  "description": "A francesinha, a famosa sandes regada com um delicioso molho, até pode ter origem no Porto, mas no resto do país já há locais que a confecionam de forma divinal. Um deles está, sem dúvida, em Braga, na Taberna Belga, um restaurante que é já conhecido pelas francesinhas que saem da sua cozinha. \n\n Neste estabelecimento, a grande estrela do menu é obviamente o prato portuense. Todos os dias, a diferentes horas, há uma fila interminável de pessoas que se deslocam até à Taberna Belga para provar ou comer pela milésima vez a famosa francesinha da casa. No entanto, há mais pratos deliciosos para provar neste restaurante, tais como pregos, cachorros, hambúrgueres e bifes confecionados de diferentes formas. E tudo isto pode ser regado com as melhores cervejas, cuja variedade vai tornar a sua escolha de bebida muito difícil. \n\n Os espaços da Taberna Belga são muito acolhedores e confortáveis e fazem sentir-nos à vontade, com uma esplanada perfeita para almoços e jantares de verão com os amigos. Pode contar com um ambiente sempre descontraído e um atendimento muito atencioso e simpático. \n\n Se é amante de francesinhas, este é um local de paragem obrigatória para si.",
  "address": "Rua Conego Luciano Afonso dos Santos Loja 1A 4700-371, Braga 4700-371 Portugal",
  "schedule": [],
  "photos": [],
  "logo": {
    "_id": {
      "$oid": "5fd64e7f6c110bb40443a60d"
    },
    "url": "/public/logos/5fcbfd3cacd2bb2326ca7a1cd0038593-b372-4032-8071-799cb2564135.jpg"
  },
  "phone": 253042708
},{
  "_id": {
    "$oid": "5fcbfdc1acd2bb2326ca7a1d"
  },
  "verified": false,
  "hasPlant": false,
  "latitude": 41.5278458,
  "longitude": -8.4497986,
  "rating": 0,
  "name": "Fogo de Chão ",
  "category": "Restauração",
  "description": "Rede brasileira de churrascarias com carne à vontade cortada à mesa, além de um grande buffet de saladas.",
  "address": "Rua Professor Henrique de Barros Centro Empresarial de Braga Ferreiros, Braga 4705-319 Portugal",
  "schedule": [],
  "photos": [],
  "logo": {
    "_id": {
      "$oid": "5fd651366c110bb40443a616"
    },
    "url": "/public/logos/5fcbfdc1acd2bb2326ca7a1d2c11b11f-9e1b-4557-8c7c-33174f267974.png"
  },
  "phone": 253670900
},{
  "_id": {
    "$oid": "5fd651f16c110bb40443a619"
  },
  "verified": false,
  "hasPlant": false,
  "latitude": 41.5584321,
  "longitude": -8.4062177,
  "rating": 0,
  "name": "Boutique Nespresso",
  "category": "Café",
  "description": "Nespresso é uma marca da Nestlé Nespresso S. A., uma unidade operacional do Grupo Nestlé, com sede em Lausanne, Suíça. As máquinas da Nespresso preparam café espresso em cápsulas de café, ou pods em máquinas de bar, um tipo de recipiente de uso único contendo grãos de café moídos pré-porcionados com adição de aromas.",
  "address": "Braga Parque, loja 139, Quinta dos Congregados, 4710-427 Braga",
  "schedule": [],
  "photos": [],
  "logo": {
    "_id": {
      "$oid": "5fd652016c110bb40443a61a"
    },
    "url": "/public/logos/5fd651f16c110bb40443a619ea9c3090-f8e3-4e99-a590-e869214b4b53.jpg"
  }
},{
  "_id": {
    "$oid": "5fd652a16c110bb40443a620"
  },
  "verified": false,
  "hasPlant": false,
  "latitude": 41.1417399,
  "longitude": -8.6151203,
  "rating": 0,
  "name": "Hard Club",
  "category": "Sala de Espetáculo",
  "description": "Hard Club - Centro de Animação Cultural, é um centro cultural de Portugal, inaugurado a 18 de Dezembro de 1997, no Porto. Durante nove anos fez história com uma sala de concertos, recebendo entre 1997 e 2006 mais de 500 mil espectadores em 1300 espectáculos, num total de mais de 5 mil artistas vindos de 34 países.",
  "address": "Mercado Ferreira Borges, 4050-252 Porto",
  "schedule": [],
  "photos": [],
  "logo": {
    "_id": {
      "$oid": "5fd652de6c110bb40443a621"
    },
    "url": "/public/logos/5fd652a16c110bb40443a6200eeb00b3-f700-41a7-82d6-7ae326549b65.png"
  },
  "phone": 220101194
},{
  "_id": {
    "$oid": "5fd653226c110bb40443a622"
  },
  "verified": false,
  "hasPlant": false,
  "latitude": 41.4109266,
  "longitude": -8.5193095,
  "rating": 0,
  "name": "Faminho - Instrumentos Musicais, Lda",
  "category": "Instrumentos Musicais",
  "description": "Loja de Instrumentos Musicais, equipamentos de som e luz profissional.",
  "address": "R. Conselheiro Santos Viegas 48, 4760-129 Vila Nova de Famalicão",
  "schedule": [],
  "photos": [],
  "logo": {
    "_id": {
      "$oid": "5fd6544c6c110bb40443a636"
    },
    "url": "/public/logos/5fd653226c110bb40443a6221ee2a1a3-40d9-44e2-8fca-0f8f4059a10c.jpg"
  },
  "phone": 252375482
},{
  "_id": {
    "$oid": "5fd653de6c110bb40443a624"
  },
  "verified": false,
  "hasPlant": false,
  "latitude": 41.3820431,
  "longitude": -8.7418796,
  "rating": 0,
  "name": "Timberland Outlet",
  "category": "Vestuário e Calçado",
  "description": "Na Timberland temos uma enorme variedade de Calado, Vesturio e Roupa para Homem, Mulher e Criana. Entrega e devoluo gratuita.",
  "address": "Avenida Fonte Cova 400, 4485-592 Vila do Conde",
  "schedule": [],
  "photos": [],
  "logo": {
    "_id": {
      "$oid": "5fd654026c110bb40443a62f"
    },
    "url": "/public/logos/5fd653de6c110bb40443a624f7d91fba-027f-4c8a-a3e2-8e84165a7ecf.png"
  },
  "phone": 220028093
},{
  "_id": {
    "$oid": "5fd654a86c110bb40443a637"
  },
  "verified": false,
  "hasPlant": false,
  "latitude": 41.5447936,
  "longitude": -8.4188293,
  "rating": 0,
  "name": "Salão Mozart",
  "category": "Instrumentos Musicais",
  "description": "Quando queres comprar um Instrumento Musical e aparece esta página! :) Temos o que precisas.",
  "address": "Avenida da Liberdade, 72 4710-250 Braga, Portugal",
  "schedule": [],
  "photos": [],
  "logo": {
    "_id": {
      "$oid": "5fd654d06c110bb40443a638"
    },
    "url": "/public/logos/5fd654a86c110bb40443a63779b6a549-35a3-43c1-9fce-3cd4d4765a00.jpg"
  },
  "phone": 253273547
},{
  "_id": {
    "$oid": "5fd65b0a6c110bb40443a6e9"
  },
  "verified": false,
  "hasPlant": false,
  "latitude": 41.4854364,
  "longitude": -8.4759697,
  "rating": 0,
  "name": "Clínica Veterinária Tebosa",
  "category": "Clínica Veterinária",
  "description": "Consultas | Cirurgia geral | Domicílios | Pet shop | Banhos e tosquias | Escola canina | Hotel canino | Urgências 24h - 960367985",
  "address": "Rua Santo António Nº47 4705-630 Tebosa, Portugal",
  "schedule": [],
  "photos": [],
  "logo": {
    "_id": {
      "$oid": "5fd65b2d6c110bb40443a6ea"
    },
    "url": "/public/logos/5fd65b0a6c110bb40443a6e99953b002-d830-44a2-b22f-6f783d66a3a4.png"
  },
  "phone": 960367985
},{
  "_id": {
    "$oid": "5fd65cb96c110bb40443a6f4"
  },
  "verified": false,
  "hasPlant": false,
  "latitude": 41.552441,
  "longitude": -8.4237196,
  "rating": 0,
  "name": "Clinibraga - Clínica Dentária",
  "category": "Clínica Dentária",
  "description": "A Clinibraga tem uma equipa de profissionais especializados nas mais diversas áreas da Dentária, com procedimentos inovadores e materiais de qualidade para cuidar do seu sorriso.",
  "address": "R. dos Chãos 23 4º andar, 4710-230 Braga",
  "schedule": [],
  "photos": [],
  "phone": 253220230
}]);
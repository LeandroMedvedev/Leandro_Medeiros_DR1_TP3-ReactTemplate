import institutoInfnet from '../assets/jpgs/instituto-infnet.jpg';
import amigoUm from '../assets/photos/amigo-01.jpg';
import amigoDois from '../assets/photos/amigo-02.jpg';
import amigoTres from '../assets/photos/amigo-03.jpg';
import postagemUm from '../assets/photos/postagem-01.jpg';
import postagemDois from '../assets/photos/postagem-02.jpg';
import postagemTres from '../assets/photos/postagem-03.jpg';
import sugestaoUm from '../assets/photos/sugestao-amizade-01.jpg';
import sugestaoDois from '../assets/photos/sugestao-amizade-02.jpg';
import sugestaoTres from '../assets/photos/sugestao-amizade-03.jpg';

const DADOS_CARTAO = [
  {
    imagem: institutoInfnet,
    textoAlternativo: 'Sala de aula do Instituto Infnet',
    titulo: 'Instituto Infnet',
    descricao:
      'A Faculdade Infnet é uma instituição brasileira de ensino superior focada em tecnologia. Sediada no Rio de Janeiro, oferta cursos de graduação presenciais e a distância e pós-graduação a distância.',
    rodape: 'Rua São José, 90 - Centro, Rio de Janeiro - RJ, 20010-020',
  },
];

const POSTAGENS = [
  {
    imagem: postagemUm,
    titulo: 'Aventura em Waha, Indonésia',
    texto: 'Vista de um fim de tarde incrível!',
    data: '2024-09-15',
    autor: 'João Silva',
    curtidas: 45,
    compartilhamentos: 10,
    comentarios: ['Adorei!', 'Que legal!', 'Espetacular!'],
  },
  {
    imagem: postagemDois,
    titulo: 'De volta às ruas',
    texto: 'Finalmente livres de novo.',
    data: '2024-09-18',
    autor: 'Maria Souza',
    curtidas: 80,
    compartilhamentos: 15,
    comentarios: [
      'Preciso dessa sensação novamente também!',
      'Uau, que inveja!',
      'Voltando a vider!',
    ],
  },
  {
    imagem: postagemTres,
    titulo: 'Viagem à Indonésia',
    texto: 'A praia escondida mais bela do local. A vista é incrível!',
    data: '2024-09-20',
    autor: 'Lucas Pereira',
    curtidas: 120,
    compartilhamentos: 25,
    comentarios: ['Que praia!', 'Incrível!', 'Um dia visitarei o local!'],
  },
];

const AMIGOS = [
  {
    foto: amigoUm,
    nome: 'Pedro Salub',
    amigosEmComum: 12,
  },
  {
    foto: amigoDois,
    nome: 'Ana Clara',
    amigosEmComum: 8,
  },
  {
    foto: amigoTres,
    nome: 'João Paulo',
    amigosEmComum: 5,
  },
];

const SUGESTOES = [
  {
    foto: sugestaoUm,
    nome: 'Rafaela Lima',
    amigoEmComum: 'Carla Mendes',
  },
  {
    foto: sugestaoDois,
    nome: 'Melissa Oliveira',
    amigoEmComum: 'Pedro Henrique',
  },
  {
    foto: sugestaoTres,
    nome: 'Isabela Costa',
    amigoEmComum: 'Ana Clara',
  },
];

export { AMIGOS, DADOS_CARTAO, POSTAGENS, SUGESTOES };

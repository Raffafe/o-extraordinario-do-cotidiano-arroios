export type Month = {
  slug: string;
  month: string;
  title: string;
  text: string;
  image: string;
};

export const months: Month[] = [
  {
    slug: "janeiro",
    month: "Janeiro",
    title: "Quem somos nós no mundo?",
    text: "As crianças constroem o Atelier de Bolso e criam capas e autorretratos simbólicos. A exposição apresenta as primeiras marcas de cada percurso.",
    image: "/janeiro.png",
  },
  {
    slug: "fevereiro",
    month: "Fevereiro",
    title: "Mundos que ainda não existiam",
    text: "Portas, máscaras e personagens tornam-se passagens para a imaginação. A exposição revela os mundos inventados pelas crianças.",
    image: "/fevereiro.png",
  },
  {
    slug: "marco",
    month: "Março",
    title: "As raízes de Arroios",
    text: "Natureza, crescimento e comunidade encontram-se em pigmentos e pinturas. A Árvore de Djuntamon reúne as marcas de cada criança.",
    image: "/marco.png",
  },
  {
    slug: "abril",
    month: "Abril",
    title: "Palavras que abrem caminhos",
    text: "Palavras transformam-se em imagens, cuidado e liberdade de expressão. A exposição reúne cartas ilustradas e frases do livro coletivo.",
    image: "/abril.png",
  },
  {
    slug: "maio",
    month: "Maio",
    title: "Coisas que guardam afeto",
    text: "Cada criança cria um amuleto para alguém que cuida de si. A exposição apresenta os objetos e as intenções guardadas neles.",
    image: "/maio.png",
  },
  {
    slug: "junho",
    month: "Junho",
    title: "O jardim que construímos juntos",
    text: "Folhas, flores e respirações deixam marcas únicas. Impressões da natureza reúnem-se num jardim coletivo para encerrar o percurso.",
    image: "/junho.png",
  },
];

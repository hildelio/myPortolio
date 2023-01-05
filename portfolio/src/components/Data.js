import lessonslearned from "../assets/lessonslearned.png"
import playgroundfunctions from "../assets/playgroundfunctions.png"
import pixelart from "../assets/pixelart.png"
import trybewarts from "../assets/trybewarts.png"
import unittests from "../assets/unittests.png"
import zoofunctions from "../assets/zoofunctions.png"
import shoppingCart from "../assets/shoppingCart.gif";
import solarsystem from "../assets/solarSystem.gif"
import tryunfo from "../assets/tryunfo.png"
import trybetunes from "../assets/trybetunes.gif"
import hzc from "../assets/hzc.gif"
import frontendOnlineStore from "../assets/frontendOnlineStore.gif"
import rtl from "../assets/rtl.png"
import trybewallet from "../assets/trybewallet.gif"

const contents = [
  {
    id: 14,
    title: "Project Trybewallet",
    image: trybewallet,
    description: "O objetivo deste projeto foi desenvolver uma carteira de controle de gastos com conversor de moedas. Ao utilizar essa aplicação um usuário deverá ser capaz de: Adicionar, remover e editar um gasto, Visualizar uma tabelas com seus gastos, Visualizar o total de gastos convertidos para uma moeda de escolha.",
    githubLink: "https://github.com/hildelio/myTrybewallet",
    projectLink: "https://hildelio.github.io/myTrybewallet/",
  },
  {
    id: 13,
    title: "Project Testes em React",
    image: rtl,
    description: "O objetivo deste projeto foi escrever testes para uma aplicação React que já está criada e configurada, utilizando Jest e a biblioteca React Testing Library. A aplicação contém uma implementação completa de todos os requisitos da Pokédex do desenho Pokemón. Para cada requisito listado, foram escritos testes para garantir sua corretude.",
    githubLink: "https://github.com/hildelio/myReactTestingLibrary",
  },
  {
    id: 12,
    title: "Project FrontEnd Online Store",
    image: frontendOnlineStore,
    description: "O objetivo deste projeto foi criar uma versão simplificada, sem persistência no banco de dados, de uma loja online, desenvolvendo em grupo as funcionalidades de acordo com demandas definidas em um quadro Kanban, em um cenário próximo ao do mercado de trabalho. A partir dessas demandas, tivemos uma aplicação em que pessoas usuárias podem: Buscar produtos por termos e categorias a partir da API do Mercado Livre, Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades, Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações e Simular a finalização da compra dos itens selecionados.",
    githubLink: "https://github.com/hildelio/myFrontendOnlineStore",
    projectLink: "https://hildelio.github.io/myFrontendOnlineStore/",
    
  },
  {
    id: 11,
    title: "Project HZC",
    image: hzc,
    description: "O objetivo deste projeto foi aprofundar os conceitos de CSS trabalhando em um projeto em HTML e CSS utilizando a metodologia mobile first, respeitando conceitos de acessibilidade, responsividade e código limpo.",
    githubLink: "https://github.com/hildelio/HZC",
    projectLink: "https://hzc-sooty.vercel.app/",
  },
  {
    id: 10,
    title: "Project TrybeTunes",
    image: trybetunes,
    description: "O objetivo deste projeto foi criar o TrybeTunes, uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Essa aplicação capaz de: Fazer login; Pesquisar por uma banda ou artista; Listar os álbuns disponíveis dessa banda ou artista; Visualizar as músicas de um álbum selecionado; Reproduzir uma prévia das músicas deste álbum; Favoritar e desfavoritar músicas; Ver a lista de músicas favoritas; Ver o perfil da pessoa logada; Editar o perfil da pessoa logada;",
    githubLink: "https://github.com/hildelio/myTrybetunes",
    projectLink: "https://hildelio.github.io/myTrybetunes/",
  },
  {
    id: 9,
    title: "Project Tryunfo",
    image: tryunfo,
    description: "O objetivo deste projeto foi desenvolver um jogo no estilo Super Trunfo! Ao utilizar essa aplicação uma pessoa usuária deverá ser capaz de: Criar um baralho com o tema livre; Adicionar e remover uma carta do baralho; Visualizar todas as cartas que foram adicionadas ao baralho; Jogar com o baralho criado.",
    githubLink: "https://github.com/hildelio/myTryunfo",
    projectLink: "https://hildelio.github.io/myTryunfo/",
  },
  {
    id: 8,
    title: "Project Solar System",
    image: solarsystem,
    description: "O objetivo deste projeto foi verificar a capacidade de: Utilizar JSX no React; Utilizar corretamente o método render() para renderizar seus componentes; Utilizar import para trazer componentes em diferentes arquivos; Criar componentes de classe em React; Criar múltiplos componentes a partir de um array; Fazer uso de props corretamente; Fazer uso de PropTypes para validar as props de um componente",
    githubLink: "https://github.com/hildelio/mySolarSystem",
    projectLink: "https://hildelio.github.io/mySolarSystem/",
  },
  {
    id: 7,
    title: "Project Shopping Cart",
    image: shoppingCart,
    description: "O objetivo deste projeto foi desenvolver um carrinho de compras totalmente dinâmico! Para isso, consumir dados diretamente da API do Mercado Livre para buscar produtos à venda. Após aprender sobre a importância de ter uma mentalidade orientada a testes, e também já saber como a implementação de testes contribui para a escrita de códigos mais confiáveis e com boa performance. Este projeto traz a experiência de pôr em prática o desenvolvimento orientado a testes, o famoso TDD (Test Driven Development)! Que ajuda a garantir um código de qualidade, percebendo os casos de uso da sua aplicação e garantindo que ela está funcionando da maneira correta!",
    githubLink: "https://github.com/hildelio/myShoppingCart",
    projectLink: "https://hildelio.github.io/myShoppingCart/",
  },
  {
    id: 6,
    title: "Project Zoo Functions",
    image: zoofunctions,
    description: "O objetivo deste projeto foi testar as habilidades com ES6, Higher Order Functions e testes. A missão foi de organizar as informações de um zoológico, sendo responsável por desenvolver funções que buscam informações sobre os animais do zoológico como: espécie e local de origem. Além disso, buscar dados sobre as pessoas que colaboram com a manutenção e cuidado do zoológico. Aprender sobre a importância de ter uma mentalidade orientada a testes, com a implementação de testes que contribui para a escrita de códigos mais confiáveis e com boa performance. A sequência dos requisitos desse projeto foi disposta de forma a proporcionar a experiência de entender na prática como o desenvolvimento orientado a testes ajuda a garantir um código de qualidade. Para isso, foi necessário implementar testes para funções já existentes, percebendo os casos de uso da sua aplicação e garantindo que ela está funcionando da maneira correta.",
    githubLink: "https://github.com/hildelio/myZooFunctions",
  },
  {
    id: 5,
    title: "Project Unit Tests",
    image: unittests,
    description: "O objetivo deste projeto foi implementar várias funções na resolução dos requisitos propostos e/ou testes unitários para garantir que as implementações das funções estivessem corretas, de acordo com o que foi solicitado em cada enunciado. Habilidades trabalhadas neste projeto: Escrever testes unitários utilizando o módulo Jest do NodeJS para verificar o correto funcionamento das funções; Escrever funções de forma que elas atendam a testes já implementados; Escrever funções de forma que elas atendam a testes já implementados;",
    githubLink: "https://github.com/hildelio/myUnitTests",
  },
  {
    id: 4,
    title: "Project TrybeWarts",
    image: trybewarts,
    description: "O objetivo deste projeto foi desenvolver uma página de formulário da Escola de Magia de Trybewarts, em que as pessoas estudantes podem enviar seus feedbacks sobre ela. O tema desse projeto é baseado na obra 'Harry Potter', de J. K. Rowling, já que programar é o mais próximo que podemos chegar de algo verdadeiramente mágico!",
    githubLink: "https://github.com/hildelio/myTrybewarts",
    projectLink: "https://hildelio.github.io/myTrybewarts/",
  },
  {
    id: 3,
    title: "Project Pixel Art",
    image: pixelart,
    description: "O objetivo deste projeto foi implementar um editor de arte com pixels em que a pessoa usuária pode escolher uma cor em uma paleta de cores e pode pintar o que quiser em um quadro branco.",
    githubLink: "https://github.com/hildelio/myPixelsArt",
    projectLink: "https://hildelio.github.io/myPixelsArt/",
  },
  {
    id: 2,
    title: "Project Playground Functions",
    image: playgroundfunctions,
    description: " O objetivo deste projeto foi implementar o código de funções que resolvem problemas com respostas pré-determinadas, podendo utilizar a lógica de programação para ajudar na análise de cada problema e resposta esperada, facilitando a implementação do código de cada uma das funções.",
    githubLink: "https://github.com/hildelio/myPlaygroundFunctions",
  },
  {
    id: 1,
    title: "Project Lessons Learned",
    image: lessonslearned,
    description: "O objetivo deste projeto foi desenvolver um site com uma série de informações sobre o que foi aprendido na Trybe ao longo dos primeiros três blocos. O site deve estar com elementos posicionados e estilizados e, além disso, deve conter semântica apropriada para que seja acessível e melhor ranqueado.",
    githubLink: "https://github.com/hildelio/myLessonsLearned",
    projectLink: "https://hildelio.github.io/myLessonsLearned/",
  },
]
export default contents;

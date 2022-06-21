# FLIPERAMA 🎮
Testando aprendizados da Semana 9 a 13 (CRUD, API e MongoDB) de Todas em Tech {**Reprograma**}. Projeto CRUD com MongoDB com um banco de dados de consoles e jogos. 

<p align="center">
  <img src="https://shiggyisntcrustysmh.carrd.co/assets/images/image01.gif?v=2610a86f" width= "599" height="336"/>
</p>

<br>

## 🏳️‍🌈Sobre mim:

Olá, meu nome é Gaia Maria. Sou uma travesti graduada em História Licenciatura (UNESP), estudante de Back-end (Reprograma) e graduanda em Analise e Desenvolvimento de Sistema (Faculdade Descomplica). Estou em transição de carreira e aqui, em meu perfil do GitHub ou em meu LinkedIn, você podera acompanhar meu desenvolvimento. 

Agradeço desde ja a sua atenção.  

Seja muito bem-vinde ✨
<br>


## 👩‍💻 Sobre o Projeto: 
Um **fliperama**, tambem conhecido como *Salão de Jogos*, é um estabelcimento comercial destinado ao uso de maquinas ou consoles de jogos com o intuito de criar um ambiente voltado exclusivamente para jogos. O projeto objetiva uma criação de uma base onde se possa cadastrar novos consoles e os games/jogos atribuidos a eles.
<br>
<br>

## 🛠️Tecnologias utilizadas:

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass ou Mongo Atlas` | Interface gráfica para verificar se os dados foram persistidos|
 `Thunder Client ou Postman` | Interface gráfica para realizar os testes|
 <br>

 ## 🗂️ Arquitetura  
 ````  
   📁 jogos-API-DB  
   |  
   |-  📁 src    
   |    |- 📄 app.js
   | 
   |    |- 📁 database  
   |         |- 📄 moogoseConnect.js  
   |
   |    |- 📁 controllers  
   |         |- 📄 consolesController.js  
   |         |- 📄 gamesController.js  
   |  
   |    |- 📁 models  
   |         |- 📄 consolesModel.js  
   |         |- 📄 gamesModel.js  
   |  
   |    |- 📁 routes  
   |         |- 📄 consolesRoutes.js   
   |         |- 📄 gamesRoutes.js     
   |  
   |- 📄 .gitignore  
   |- 📄 package-lock.json  
   |- 📄 pakage.json  
   |- 📄 README.md  
   |- 📄 server.js  
````

<br>

## 🌐Dados para Collection Consoles

- **_id**: autogerado e obrigatório
- **name**: texto e obrigatório (*unico*)
- **developer**: texto e obrigatorio
- **releaseData**: number e obrigatorio
- **display**: array, texto e obrigatorio
- **storageCapacities**: array, texto e obrigatorio
- **numberOfPlayers**: array numerico e obrigatorio
- **available**: boolean e obrigatorio
- **description**: texto e opcional
  
 <br>

### 🖨️ API deve retornar seguinte JSON:
```javascript
[
  {
    "_id":new ObjectId("62b0c3860a5912f473d73c0f"),
    "name":"PlayStation 4",
    "developer":"Sony Computer Entertainment",
    "releaseData":{"2013"},
    "display":["480p","720p","1080p","4K"],
    "storageCapacities":["500GB","1TB","2TB"],
    "numberOfPlayers":[{"1","2","3","4"}],
    "available":true,
    "description":"The PlayStation 4 (PS4) is a home video game console developed by Sony Computer..."
     __v: 0
},

{
    "_id":new ObjectId("62b0c4860a5912f473d73c11"),
    "name":"Xbox One",
    "developer":"Microsoft",
    "releaseData":{"2013"},
    "display":["720p","1080p","1440p","4K"],
    "storageCapacities":["500GB","1TB"],
    "numberOfPlayers":["1","2","3","4"],
    "available":true,
    "description":"The Xbox One is a home video game console developed by Microsoft..."
     __v: 0
},
{
    "_id":new ObjectId("62b0c6110a5912f473d73c13"),
    "name":"Nintendo Switch",
    "developer":"Nintendo PTD",
    "releaseData":{"2017"},
    "display":["480p","720p","1080p"],
    "storageCapacities":["34GB","64TB"],
    "numberOfPlayers":["1","2"],
    "available":false,
    "description":"The Nintendo Switch is a video game console developed by Nintendo..."
     __v: 0
  }
]
```
<br>
<br>


## 🌐 Dados para Collection Games
- **_id**: autogerado e obrigatório
- **name**: texto e obrigatório (*unico*)
- **developer**: texto e obrigatorio
- **releaseData**: number e obrigatorio
- **genre**: array, texto e obrigatorio
- **mode**: array, texto e obrigatorio
- **available**: boolean e obrigatorio
- **description**: texto e opcional
- **idConsole**: id do console e obrigatorio
  
<br>

### 🖨️ API deve retornar seguinte JSON:
```javascript
[
  {
    "_id": new ObjectId( "62b0df5fa494af18319efae7"),
    "name": "God of War",
    "developer": "Santa Monica Studio",
    "releaseData": 2018,
    "genre": ["Action-adventure","hack and slash"],
    "mode": ["Single-player"],
    "available": true,
    "description": "While the first seven games were loosely based on Greek mythology...",
    "console": new ObjectId(62b0c3860a5912f473d73c0f)"
     __v: 0
  },
  {
    "_id:" new ObjectId("62b0e168a494af18319efaea"),
    "name": "Halo: The Master Chief Collection",
    "developer": "343 Industries",
    "releaseData": 2014,
    "genre": ["First-person","shooter"],
    "mode": ["Single-player","multiplayer"],
    "available": true,
    "description": "Is a compilation of first-person shooter video games...",
    "console": new ObjectId("62b0c4860a5912f473d73c11"),
  },
  {
    "_id:" new ObjectId("62b0e20da494af18319efaed"),
    "name": "Pokémon Legends: Arceus",
    "developer": "Game Freak",
    "releaseData": 2022,
    "genre": ["Action role-playing"],
    "mode": ["Single-player"],
    "available": true,
    "description": "Arceus is a 2022 action role-playing game developed by Game Freak...",
    "console": new ObjectId("62b0c6110a5912f473d73c13"),
  }
]
````
<br>
<br>

<p align="center"> 👾 FIM DO ALGORITMO 👾  </p>


<p align="center">
  <img src="https://media3.giphy.com/media/JUSwkiO1Eh5K43ruN0/giphy.gif" width= "400" height="200"/>
</p>

<br>

 <p align="center"> Para recomeçar clique em 'START'<div id="voltarTopo"><a href="#" id="subir"> <p align="center"> <img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/26b0d9a666ff2f4.png" width= "150" height="100" /></a>
</div> 







# Marvel Collection

![Marvel](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1x7zurbps6occ.cloudfront.net%2Fproduct%2Fxlarge%2F587591-166585.jpg&f=1&nofb=1&ipt=f98b65794380b1744b125853c9e52a673a3a903b741ba3acbfe5bf699da3cf93&ipo=images)

MarvelCollection é um repositório colaborativo dedicado a reunir uma coleção diversificada dos heróis e vilões mais emblemáticos do universo Marvel. Os entusiastas da Marvel são convidados a fazer um fork deste repositório, adicionar seu herói ou vilão favorito e contribuir para esta crescente galeria de personagens. Desde os lendários Vingadores até os astutos vilões, este repositório é o lar para todas as figuras que moldaram o emocionante mundo dos quadrinhos da Marvel. Junte-se a nós e deixe sua marca no universo Marvel!

# Conteúdo do site

1. index.html - Contém o conteúdo da página inicial.
2. power-ratings.html - Contém algumas informações sobre a classificação dos poderes.

# O que posso contribuir?

Sempre há algo para contribuir em um projeto, seja você um novato ou um veterano. Neste projeto, você pode adicionar seu Héroi ou Vilão favorito como um card ao site! Ou abrir Issues sugerindo ideias e novas funcionalidades para o site. Você também pode adicionar este Readme.md no seu idioma.

# Como posso contribuir?

Por favor, consulte o arquivo [contributing_pt-BR](https://github.com/lucasnumeriano/MarvelCollection/master/contributing_pt-BR.md) para aprender como contribuir!

E é isso!
Siga esses passos para fazer sua primeira solicitação de pull.

# Mas e se eu não souber como adicionar cards? :(

Não é todo mundo que está ciente de todas as ferramentas presentes no mundo, não importa o quão fácil ou complexa seja. Também não é necessário conhecer todas as ferramentas lá fora. Para adicionar o seu personagem basta seguir este método.

## via html

Use o exemplo de código abaixo para adicionar seu próprio card. Basta colar dentro da `section` com um id de `galery`

```html
<div class="card">
    <img class="card-img" src="[ Link para a imagem do personagem ]" alt="[ Texto Alternativo ]"/>
    <div class="card-body">
        <h5 class="card-title">[ Nome do seu personagem favorito ]</h5>
        <p class="card-text">[ Breve descrição do seu personagem ]</p>
        <a href="[ Link para seu Github]" class="card-link" target="_blank">Contributed by [ Seu nome de usuário/nome do perfil do github ]</a>
    </div>
    <div class="info">
        <h5 class="info-title">[ Nome do seu personagem favorito ]</h5>
        <div class="character">
            <div class="status">
                <p class="status-text">Intelligence: [ Nível de inteligência do seu personagem ]</p>
                <p class="status-text">Strength: [ Nível de força do seu personagem ]</p>
                <p class="status-text">Speed: [ Nível de velocidade do seu personagem ]</p>
                <p class="status-text">Endurance: [ Nível de resistência do seu personagem ]</p>
                <p class="status-text">Energy Projection: [ Nível de projeção de energia do seu personagem ]</p>
                <p class="status-text">Combat Skills: [ Nível de habilidades de luta mano a mano do seu personagem ]</p>
            </div>
            <img class="img-info" src="[ Link para a imagem do seu personagem ]" alt="[ Texto alternativo ]"/>
        </div>
        <a href="[ Link para seu Github ]" class="info-link" target="_blank">Contributed by [ Seu nome de usuário/nome do perfil do github]</a>
    </div>
</div>
```

Para saber precisamente o nível dos poderes do seu personagem você pode consultar no site da ![Marvel](https://www.marvel.com) e ver em qual ![nível de poder](https://lucasnumeriano.github.io/MarvelCollection/power-ratings.html) ele se encaixa.

![](https://github.com/lucasnumeriano/MarvelCollection/blob/main/assets/images/marvel-stats.png)
![](https://github.com/lucasnumeriano/MarvelCollection/blob/main/assets/images/power-rating.png)

Copie este código e cole no arquivo index.html para fazer suas alterações. Teste-o em seu próprio sistema e depois crie uma solicitação de pull.

Se mais de 100 personagens forem adicionados a este arquivo, podemos expandir este projeto para incluir funcionalidades como pesquisa e filtragem.

# Parabéns!

Parabéns! Você acabou de fazer sua primeira solicitação de pull e se ela for mesclada, você poderá ver as alterações que fez ao vivo usando o link fornecido acima!

# Marvel Collection

![Marvel](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1x7zurbps6occ.cloudfront.net%2Fproduct%2Fxlarge%2F587591-166585.jpg&f=1&nofb=1&ipt=f98b65794380b1744b125853c9e52a673a3a903b741ba3acbfe5bf699da3cf93&ipo=images)

MarvelCollection is a collaborative repository dedicated to gathering a diverse collection of the most iconic heroes and villains from the Marvel universe. Marvel enthusiasts are invited to fork this repository, add their favorite hero or villain, and contribute to this growing gallery of characters. From the legendary Avengers to the cunning villains, this repository is home to all the figures that have shaped the exciting world of Marvel comics. Join us and leave your mark on the Marvel universe!

# Website Content

1. index.html - Contains the content of the homepage.
2. power-ratings.html - Contains some information about power ratings.

# What Can I Contribute?

There is always something to contribute to a project, whether you're a novice or a veteran. In this project, you can add your favorite Hero or Villain as a card to the website! Or open Issues suggesting ideas and new features for the site. You can also add this Readme.md in your language.

# How Can I Contribute?

Please refer to the file [contributing_pt-BR](https://github.com/lucasnumeriano/MarvelCollection/master/contributing_pt-BR.md) to learn how to contribute!

And that's it!
Follow these steps to make your first pull request.

# But what if I don't know how to add cards? :(

Not everyone is aware of all the tools out there, no matter how easy or complex they are. It's also not necessary to know all the tools out there. To add your character, just follow this method.

## via html

Use the code example below to add your own card. Just paste it inside the `section` with an id of `galery`

```html
<div class="card">
    <img class="card-img" src="[Link to the character's image]" alt="[Alternative Text]"/>
    <div class="card-body">
        <h5 class="card-title">[Name of your favorite character]</h5>
        <p class="card-text">[Brief description of your character]</p>
        <a href="[Link to your Github]" class="card-link" target="_blank">Contributed by [Your username/Github profile name]</a>
    </div>
    <div class="info">
        <h5 class="info-title">[Name of your favorite character]</h5>
        <div class="character">
            <div class="status">
                <p class="status-text">Intelligence: [Your character's intelligence level]</p>
                <p class="status-text">Strength: [Your character's strength level]</p>
                <p class="status-text">Speed: [Your character's speed level]</p>
                <p class="status-text">Endurance: [Your character's endurance level]</p>
                <p class="status-text">Energy Projection: [Your character's energy projection level]</p>
                <p class="status-text">Combat Skills: [Your character's hand-to-hand combat skills level]</p>
            </div>
            <img class="img-info" src="[Link to your character's image]" alt="[Alternative Text]"/>
        </div>
        <a href="[Link to your Github]" class="info-link" target="_blank">Contributed by [Your username/Github profile name]</a>
    </div>
</div>
```

To precisely know the level of powers of your character you can check on the [Marvel website](https://www.marvel.com) and see in which [power level](https://lucasnumeriano.github.io/MarvelCollection/power-ratings.html) they fit.

![](https://github.com/lucasnumeriano/MarvelCollection/blob/main/assets/images/marvel-stats.png)
![](https://github.com/lucasnumeriano/MarvelCollection/blob/main/assets/images/power-rating.png)

Copy this code and paste it into the index.html file to make your changes. Test it on your own system and then create a pull request.

If more than 100 characters are added to this file, we can expand this project to include features like searching and filtering.

# Congratulations!

Congratulations! You have just made your first pull request and if it gets merged, you'll be able to see the changes you made live using the link provided above!

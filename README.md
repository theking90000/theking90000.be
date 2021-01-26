# theking90000.be
Page d'accueil de theking90000.be

# Utiliser le site pour soi même
Voici un tutoriel des chose a changer pour utiliser le site

premierement cloner le site
```bash
git clone https://github.com/theking90000/theking90000.be.git
```


## Etape 1 (titre)

#### index.html
- ligne 14 :
```html
<title>theking90000</title>
```  
Remplacer 'theking90000' par votre pseudo

- ligne 25:
```html
<h1 class="title_anim" >t</h1>
```
Remplacer 't' par la premiere lettre de votre pseudo

#### assets/js/index.js
- ligne 56-57
```js
anim_title = [...'theking90000.be']
anim_title2 = [...'theking90000_#0239']
``` 
Remplacer 'theking90000.be' et 'theking90000_#0239' par votre pseudo ou votre site 
(les animations s'alternent)

## Etape 2 (discord)
la page discord commence avec les balise `<!-- SERVEUR DISCORD-->`
```html
<!-- BLOCK SERVEUR DISCORD -->
           <div class="li">
                <div class="presentation">
                <img src="url_img" >
                <h3>NOM SERVEUR</h3>
                </div>
                <a class="button_join_discord" href="url_pour_rejoindre" target="blank">
                    <button style="background-color: #000;">
                        REJOINDRE
                    </button>
                </a>
            </div>
<!-- FIN DU BLOCK -->
```
Chaque Block situé entre `<!-- BLOCK SERVEUR DISCORD -->` et `<!-- FIN DU BLOCK -->` sont considérer comme des serveurs dans la liste
Vous pouvez modifier , supprimer ou rajouter des blocks
Pour personnaliser le block :
- Mettez dans le src="" de `<img src="url_img" >` l'image représentant votre serveur discord (url directe ou mettez vos images dans le dossier assets/)
- Dans la balise `<h3></h3>` le nom du serveur
- et dans `<a class="button_join_discord" href="url_pour_rejoindre" target="blank">` mettez dans href="" l'url pour rejoindre le serveur 

## Etape 3 (Youtube)
la page youtube commence avec les balise `<!-- YOUTUBE -->`

dans cette partie ci `<div class="page__youtube" youtube-channel-id="UC_K2Nc53dMNjz91FyL9aStQ" youtube-api-key-V3='AIzaSyCCYDgFoIe8TXMNk5mHvtwALSunYKo1jrM'>`
remplacer `youtube-channel-id` par votre id de chaine youtube et `youtube-api-key-V3` par votre token public pour l'api youtubeV3 (https://console.developers.google.com/) si vous n'en avez pas modifiez manuellement les valeurs en fonction de votre chaine

```html
<div class="youtube-embed-video">
  
</div>
```
Ici vous pouvez rajouter votre embed de video

## Etape 3 (Github)
la page discord commence avec les balise `<!-- PARTIE GITHUB -->`
remplacer juste dans  `<div class="page__github" github-username="theking90000" >` github-username="" votre par votre pseudo github

## Etape 4 (Twitter)

Note: cette partie n'est pas encore finie

mais remplacer les valeur par votre pseudo ^^

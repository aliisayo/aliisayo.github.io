# aliisayo.github.io

Portfolio d'Ali Sayo Gambo, analyste SOC à Niamey (Niger).

En ligne : https://aliisayo.github.io

## Mettre à jour le contenu

Le site existe en deux langues : français (https://aliisayo.github.io) et anglais (https://aliisayo.github.io/en/), avec un bouton FR / EN en haut de page.

- Contenu en français : **[`_data/portfolio.yml`](_data/portfolio.yml)**
- Contenu en anglais : **[`_data/portfolio_en.yml`](_data/portfolio_en.yml)** (même structure)
- Dictionnaire des textes fixes (titres de sections, boutons) : [`_data/i18n.yml`](_data/i18n.yml)

Quand vous ajoutez un élément dans `portfolio.yml`, ajoutez sa traduction au même endroit dans `portfolio_en.yml`.

1. Ouvrir `_data/portfolio.yml` sur GitHub et cliquer sur le crayon ✏️.
2. Pour ajouter un élément, copier un bloc qui commence par `- `, le coller juste en dessous et changer le texte. Garder les espaces en début de ligne et les guillemets.
3. Cliquer sur **Commit changes**. Le site se met à jour en 1 à 2 minutes (onglet **Actions** pour suivre la publication).

Exemple : ajouter une certification

```yaml
  - nom: "Security+"
    organisme: "CompTIA"
    date: "Mars 2027"
    statut: ""
```

Si la publication échoue (croix rouge dans **Actions**), c'est presque toujours un guillemet oublié ou un décalage d'espaces dans le fichier : l'ancienne version du site reste en ligne en attendant.

## Organisation

- `_data/portfolio.yml` / `_data/portfolio_en.yml` : le contenu (fr / en).
- `_data/i18n.yml` : le dictionnaire de l'interface.
- `_layouts/portfolio.html` : le design, commun aux deux langues.
- `index.html` et `en/index.html` : les deux pages (ne contiennent que la langue).
- Statistiques de visite : GoatCounter, https://aliisayo.goatcounter.com (sans cookies).

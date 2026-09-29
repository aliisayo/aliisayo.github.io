# aliisayo.github.io

Portfolio d'Ali Sayo Gambo, analyste SOC à Niamey (Niger).

En ligne : https://aliisayo.github.io

## Mettre à jour le contenu

Tout le contenu (profil, compétences, expérience, projets, certifications, formation, langues, CV) est dans **[`_data/portfolio.yml`](_data/portfolio.yml)**. C'est le seul fichier à modifier.

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

- `_data/portfolio.yml` : le contenu.
- `index.html` : le design (généré par Jekyll, intégré à GitHub Pages).
- Statistiques de visite : GoatCounter, https://aliisayo.goatcounter.com (sans cookies).

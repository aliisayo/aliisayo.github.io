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
- `assets/style.css` : la feuille de style ; `assets/lang.js` et `assets/stats.js` : les scripts.
- `mentions-legales.md`, `confidentialite.md` (et `en/legal-notice.md`, `en/privacy.md`) : pages légales.
- `assets/fonts/` : polices hébergées avec le site (aucune requête vers Google).
- `assets/apercu.png` : image affichée quand le lien du site est partagé ; `favicon.svg` : icône d'onglet.
- `robots.txt`, `sitemap.xml` (généré automatiquement), `404.html` (page d'erreur).

## Sécurité

`_includes/csp.html` contient la politique de sécurité du contenu (CSP) : le site n'accepte que ses
propres fichiers et GoatCounter. Conséquence : **pas de script ni de style écrit directement dans
une page**, et tout nouveau service externe (vidéo, police, script) doit y être ajouté, sinon le
navigateur le bloque. GitHub Pages ne permet pas les en-têtes HTTP : `X-Frame-Options` et
`X-Content-Type-Options` ne peuvent pas être définis.

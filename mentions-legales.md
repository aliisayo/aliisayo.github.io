---
layout: page
lang: fr
title: Mentions légales
description: Éditeur, hébergeur et propriété intellectuelle du portfolio d'Ali Sayo Gambo.
permalink: /mentions-legales/
---
{% assign id = site.data.portfolio.identite %}
## Éditeur du site

Ce site est le portfolio personnel de **{{ id.nom }}**, publié à titre individuel et non commercial.

- Responsable de la publication : {{ id.nom }}
- Localisation : {{ id.adresse }}
- Contact : [{{ id.email }}](mailto:{{ id.email }})

## Hébergement

Le site est hébergé par **GitHub Pages**, un service de GitHub, Inc.,
88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis —
[github.com](https://github.com).

## Propriété intellectuelle

Les textes et la mise en page de ce site sont la propriété de {{ id.nom }}, sauf mention contraire.
Les marques et logos cités appartiennent à leurs détenteurs respectifs.
Les polices de caractères (Sora, IBM Plex Sans, JetBrains Mono) sont distribuées sous la
licence libre SIL Open Font License et hébergées avec le site.

## Données personnelles

Voir la [politique de confidentialité]({{ "/confidentialite/" | relative_url }}).

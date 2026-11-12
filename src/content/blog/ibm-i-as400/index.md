---
title: "IBM i (AS/400) : le serveur que tout le monde oublie en pentest"
description: "Toujours au cœur des banques, assurances et logisticiens, l'IBM i reste un angle mort des tests d'intrusion. Petit tour de la bête avant d'aller plus loin."
date: 2026-11-12
category: IBM i
team: offensif
tags: [ibm-i, as400, pentest, legacy]
cover: ./ibm-system-i5-515.jpg
coverAlt: "Un serveur IBM System i5 515 (tour noire) à côté d'un terminal IBM à écran vert et de son clavier, affichant l'écran de connexion 5250"
coverCredit: '<a href="https://commons.wikimedia.org/wiki/File:IBM_System_i5_515_(Type_9407-515)_(3296197292).jpg" rel="noopener" target="_blank">Christine und Hagen Graf</a> from Fitou, France, <a href="https://creativecommons.org/licenses/by/2.0" rel="noopener" target="_blank">CC BY 2.0</a>, via Wikimedia Commons (redimensionnée)'
draft: false
---

Sur la photo, on voit un **IBM System i5 515** et, à côté, un terminal à écran vert qui affiche l'écran de connexion **5250**. Ce matériel a l'air sorti d'un musée, et pourtant l'héritier de cette machine fait encore tourner une bonne partie de l'économie : paie, stocks, comptes clients, flux bancaires.

## Une machine, quatre noms

L'**AS/400** sort en 1988. IBM le renomme ensuite **iSeries**, puis **System i**, et son système d'exploitation, OS/400, devient **i5/OS**. Le système s'appelle aujourd'hui **IBM i** et tourne sur les serveurs **IBM Power**. Sur le terrain, presque tout le monde continue de dire « l'AS/400 ».

Trois particularités changent la façon de l'aborder :

- **Tout est objet.** Il n'y a pas de fichiers au sens Unix : on manipule des *objets* typés (`*PGM`, `*FILE`, `*USRPRF`…) rangés dans des *bibliothèques*, `QSYS` en tête.
- **La base de données est intégrée au système.** Db2 for i n'est pas un produit à part, elle fait partie de l'OS.
- **La sécurité repose sur les profils et les autorités.** Les droits passent par des profils utilisateurs, des *autorités spéciales* (`*ALLOBJ`, `*SECADM`…) et un niveau de sécurité global, la valeur système `QSECURITY`.

## Pourquoi c'est intéressant en pentest

Ces serveurs sont souvent :

1. **Critiques** : ils hébergent les données qui comptent vraiment.
2. **Anciens dans leur configuration** : on n'y touche pas « tant que ça marche ».
3. **Hors du radar** : ni l'EDR, ni le SOC, ni le scanner habituel ne savent vraiment quoi en faire.

La surface ne se limite pas à l'écran vert. Telnet 5250, FTP, les *host servers* utilisés par ODBC/JDBC et par IBM i Access, DDM/DRDA, les interfaces web d'administration : ce sont autant de portes d'entrée, chacune avec son propre modèle d'autorisation.

> L'écran vert n'est que la partie visible. Le vrai sujet, ce sont les services réseau et les autorités des objets qu'ils exposent.

## La suite

Premier volet : [comment faire passer un leurre pour un vrai OS/400 aux yeux de nmap et de Shodan](../spoofing-fingerprint-os400/). Dans les prochains articles :

- monter un **lab IBM i** pour s'entraîner sans toucher à la production ;
- **énumérer** un IBM i depuis Linux : ports, services, profils ;
- les **erreurs de configuration** classiques et la façon de les prouver proprement.

---

*Comme toujours sur ce blog : tests uniquement dans un cadre autorisé.*

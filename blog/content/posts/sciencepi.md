---
title: "Le raspberry PI en serveur de calcul"
date: 2019-03-25T12:11:22+01:00
draft: true
---

#Qu'appelle t'on un serveur de calcul ?
Ici on entend par serveur de calcul, un serveur REST pour déporter du terminal de l'utilisateur certains calculs
jugés trop lourds pour l'appareil supportant l'interface. L'interet est par exemple de pouvoir proposer du calcul intensif
piloté depuis un téléphone. 

#Pourquoi ARM ?
Bien que les processeurs ARM ne soient pas fait pour le calcul intensif, il peut y avoir un interet à les
utiliser comme plate forme de développement pour un projet scientifique.

Dés lors qu'on utilise un langage de haut niveau comme python, on peut considérer que dans la majorité des cas, un
serveur ARM peut proposer une configuration proche d'un serveur x86. Ainsi le raspberry (ou équivalent) peut constituer
une parfaite plateforme de dévéloppement à cout très réduit.

#La configuration
##Sur le plan matériel
L'offre de serveur ARM est large. Le plus connu est bien évidemment le Raspberry. Personnellement j'utilise une solution moins cher mais
parfaitement calibrée pour fonctionner en serveur (notamment pas de sortie écran) : L'orange PI zéro (disponible [ici](https://fr.aliexpress.com/item/New-Orange-Pi-Zero-H2-Quad-Core-Open-source-512MB-development-board-beyond-Raspberry-Pi/32761500374.html?spm=a2g0w.search0104.3.1.5a29476cWXagmz&ws_ab_test=searchweb0_0,searchweb201602_7_10065_10068_319_10892_317_10696_10084_453_454_10083_10618_10304_10307_10820_10821_537_10302_536_10902_10843_10059_10884_10887_321_322_10103,searchweb201603_58,ppcSwitch_0&algo_expid=5e8d4bde-f409-48cb-a015-6564cf987fc4-0&algo_pvid=5e8d4bde-f409-48cb-a015-6564cf987fc4&transAbTest=ae803_3) 
par exemple).

##Sur le plan de l'OS
Le principe est d'utiliser une distribution légère pouvant héberger des containers docker. Raspbian fait parfaitement l'affaire. Un adaptation
dédiée à l'orange PI est disponible sur [Armbian](https://www.armbian.com/orange-pi-one/).

    
#Démarage rapide
##Installation d'un serveur
L'installation de SciencePI va se limiter à l'installation de Docker qui peut être simplement réalisée par
 
    curl -fsSL https://get.docker.com | sh
    
Puis au téléchargement de l'image SciencePI :

    docker pull f80hub/scientistpi:latest
    
Plusieurs commandes peuvent être lancées suivant l'usage qu'on fait de SciencePI :

+ Etre dans l'environnement Python, en ligne de commande :

    docker run --name scientistpi -t f80hub/scientistpi:latest
    
+ Executer les fonctions placées dans le fichier test.py

    docker run --name scientistpi -t f80hub/scientistpi:latest

+ Exécuter le serveur de calcul (par exemple sur le port 6271):

    docker run --restart=always --name scientistpi -p 6271:6271 -d f80hub/scientistpi:latest server.py 6271

pour appeler le serveur, il suffit d'ouvrir depuis un navigateur : http://<adresse_du_serveur>:6271/


     
#Remarques complémentaires
##Port utilisé par le serveur
 
##Usage du cache Docker pour l'installation
La décomposition de l'intégration des librairies (la succession de 'pip install') peut sembler un peu étange 
plutôt que la simple commande "RUN pip3 install -r /server/requirements.txt" avec l'ensemble des librairies dans le requirements.
Cela s'explique par le fait que l'installation de chaque librairie est assez longue et que seul la décomposition sur plusieurs lignes
permet de bénéficier du cache Docker lorsqu'on ajoute des libraries. L'usage unique du "requirements" relance à chaque modification du
fichier l'ensemble des installations.


  

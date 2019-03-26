---
title: "Suite CRM"
date: 2019-03-21T16:13:23+01:00
draft: true
---
#Objet
Aujourd'hui il existe de nombreuses solutions de gestion des ventes. La plus célèbre est certainement
SalesForce. Mais comme ses concurrents directs issue de Microsoft ou SAP, cette solution reste chere à l'achat.

Pourtant il existe de nombreuses alternatives gratuite et open-source. Plusieurs comparatif sont
disponibles sur internet :

L'objet de cet article est d'illustrer l'installation de Suite CRM sur un serveur x86 en HTTPS. Cette installation repose sur 4 images
docker réunies par Docker-Compose :
* Une image pour SuiteCRM (code PHP du CRM)
* Une image pour le serveur web (NGINX)
* Une image pour la base de données du CRM (MARIADB)
* Une image pour la gestion du certificat pour l'accès HTTPS (LetsEncrypt)

#Procédure
La procédure est relativement élémentaire. Les fichiers sont disponibles sur [GitHub](https://github.com/f80dev/SuiteCRM_install.git)


1. Connectez vous sur votre serveur en mode "root"
2. [Installer docker](https://github.com/docker/docker-install)
3. Installer docker-compose :
 
    sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

4. Télécharger le script de [préparation des répertoires](https://raw.githubusercontent.com/f80dev/SuiteCRM_install/master/suitesrc_setup_1.sh)
puis executer le sur le serveur.
Il déclenche le téléchargement du script docker-compose qui doit être personnalisé.

5. Personnaliser le fichier docker_compose en remplacant par vos propres paramètres, les variables commençant par "_" :
* _yourdomain : désigne le domaine d'accès a SuiteCRM
* _suitecrm_username & _suitecrm_password : pour l'acces à suiteCRM
* _suitecrm_lastname : désigne le nom de l'adminstrateur
* _youremail : désigne votre mail (dans le cadre de l'attribution d'un certificat par letsencrypt)

6. Une fois votre fichier docker-compose.yml personnalisé, télécharger le script  https://raw.githubusercontent.com/f80dev/SuiteCRM_install/master/suitesrc_setup_2.sh
puis exécuter le avec la commande :  
    sh suitesrc_setup_2.sh _yourdomain

fdsfdsfds



---
title: "Zulip, le Slack gratuit"
date: 2019-03-26T14:14:17+01:00
draft: false
---
#Introduction
Slack c'est très bien. En tout cas, pour travailler sur un petit projet à plusieurs c'est beaucoup mieux que le mail. Mais c'est pas gratuit.
Enfin forcément il y a des limitations. Alors, comme d'habitude dans l'informatique, en cherchant un peu, on trouve des alternatives gratuites.

#Zulip
Au moins 3 ont un peu de notoriété. Rocket.Team, 

##Installation
Considérons le serveur utilisé comme vierge. Après l'installation de Docker, 

    curl -fsSL https://get.docker.com | sh
    systemctl start docker && systemctl start enable 
    

Docker-compose et Git, il suffit de récupérer le dépôt Zulip : 
    
    git clone https://github.com/zulip/docker-zulip.git
    cd docker-zulip

Installer le processus docker et lancer la fabrication

    docker-compose up
    

    
Suivi 

la procédure est simple et détaillée sur [https://github.com/zulip/docker-zulip](https://github.com/zulip/docker-zulip)

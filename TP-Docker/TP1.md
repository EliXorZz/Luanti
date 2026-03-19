# Découverte de Docker (TP1)

### Que se passe-t-il ? Quelles étapes se produisent en arrière-plan ?
`docker run hello-world` permet de lancer un container avec l'image `hello-world` qui affiche un **hello-world**.

```bash
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

En arrière plan, **Docker** a été chercher l'image dans le registry par default `docker.io` comment l'image n'avait jamais été pull sur mon ordinateur.

Une fois l'image récupéré, **Docker** lance le container avec cette image.

### Lancer un container `nginx`
```bash
❯ docker run --name web -p 8080:80 nginx
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2026/01/12 08:33:14 [notice] 1#1: using the "epoll" event method
2026/01/12 08:33:14 [notice] 1#1: nginx/1.27.3
2026/01/12 08:33:14 [notice] 1#1: built by gcc 12.2.0 (Debian 12.2.0-14)
2026/01/12 08:33:14 [notice] 1#1: OS: Linux 6.17.4-orbstack-00308-g195e9689a04f
2026/01/12 08:33:14 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 20480:1048576
2026/01/12 08:33:14 [notice] 1#1: start worker processes
2026/01/12 08:33:14 [notice] 1#1: start worker process 29
2026/01/12 08:33:14 [notice] 1#1: start worker process 30
2026/01/12 08:33:14 [notice] 1#1: start worker process 31
2026/01/12 08:33:14 [notice] 1#1: start worker process 32
2026/01/12 08:33:14 [notice] 1#1: start worker process 33
2026/01/12 08:33:14 [notice] 1#1: start worker process 34
2026/01/12 08:33:14 [notice] 1#1: start worker process 35
2026/01/12 08:33:14 [notice] 1#1: start worker process 36
```

# Questions
### Quelle est la différence entre un conteneur et une machine virtuelle ?
Un conteneur partage le noyau du système hôte, une VM a son propre système complet.

### À quoi sert la commande `docker run` ?
Elle crée et lance un conteneur à partir d’une image. (voir. plus de détails haut dessus.)

### Quel est l’avantage principal de la conteneurisation pour le déploiement d’applications ?
Rapide, léger et facile à déployer sur n’importe quel système.
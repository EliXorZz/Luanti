# Focus : Architecture et isolation (TP2)

### Lancer un conteneur Nginx qui s'appelle "monsite" et voir les logs
```bash
❯ docker logs monsite
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2026/01/12 08:38:42 [notice] 1#1: using the "epoll" event method
2026/01/12 08:38:42 [notice] 1#1: nginx/1.29.4
2026/01/12 08:38:42 [notice] 1#1: built by gcc 15.2.0 (Alpine 15.2.0)
2026/01/12 08:38:42 [notice] 1#1: OS: Linux 6.17.4-orbstack-00308-g195e9689a04f
2026/01/12 08:38:42 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 20480:1048576
2026/01/12 08:38:42 [notice] 1#1: start worker processes
2026/01/12 08:38:42 [notice] 1#1: start worker process 30
2026/01/12 08:38:42 [notice] 1#1: start worker process 31
2026/01/12 08:38:42 [notice] 1#1: start worker process 32
2026/01/12 08:38:42 [notice] 1#1: start worker process 33
2026/01/12 08:38:42 [notice] 1#1: start worker process 34
2026/01/12 08:38:42 [notice] 1#1: start worker process 35
2026/01/12 08:38:42 [notice] 1#1: start worker process 36
2026/01/12 08:38:42 [notice] 1#1: start worker process 37
```

| Commande              | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| docker build          | Construit une image Docker depuis un Dockerfile.                    |
| docker run            | Lance un conteneur depuis une image.                                |
| docker search         | Recherche des images sur Docker Hub.                                |
| docker images         | Liste les images locales.                                           |
| docker info           | Affiche les informations sur le daemon Docker.                      |
| docker logs           | Affiche les logs d’un conteneur.                                    |
| docker container ls   | Liste les conteneurs (actif ou non avec -a).                        |
| docker ps             | Alias de `docker container ls`.                                     |
| docker stop / kill    | Arrête / tue un conteneur.                                          |
| docker rm             | Supprime un conteneur.                                              |
| docker rmi            | Supprime une image locale.                                          |
| docker prune          | Nettoie les ressources (conteneurs, volumes, images) non utilisées. |


### Trouver combien coûte un conteneur de type `f1-micro` sur GCP par jour.
`0,0076 $US / h - 5,472 $US /mois`

### Trouver combien coûte un conteneur de type `t2.micro` sur AWS par jour.
`0,0116 $US /h - 8,352 $US /mois`

### Comparer les deux prix par rapport à une offre dédiée ou un VPS.
`~5–15€ / mois`

### Quels sont les avantages et inconvénients de chaque solution ?
- Cloud (GCP/AWS) : flexible et facile à augmenter, mais plus cher et facturation complexe.
- VPS ou serveur dédié : prix fixe et simple, mais moins flexible et difficile à faire évoluer.

# Exercice layers

Seulement la couche `COPY myfile /tmp` est rebuild, le reste était cache.
```bash
❯ docker build -t monimage:v1 .
[+] Building 0.2s (9/9) FINISHED                                                     docker:orbstack
 => [internal] load build definition from Dockerfile                                            0.0s
 => => transferring dockerfile: 137B                                                            0.0s
 => [internal] load metadata for docker.io/library/ubuntu:latest                                0.0s
 => [internal] load .dockerignore                                                               0.0s
 => => transferring context: 2B                                                                 0.0s
 => [1/4] FROM docker.io/library/ubuntu:latest                                                  0.0s
 => [internal] load build context                                                               0.0s
 => => transferring context: 38B                                                                0.0s
 => CACHED [2/4] RUN apt-get update && apt-get install -y curl                                  0.0s
 => CACHED [3/4] RUN echo "Hello" > myfile                                                      0.0s
 => [4/4] COPY myfile /tmp                                                                      0.0s
 => exporting to image                                                                          0.0s
 => => exporting layers                                                                         0.0s
 => => writing image sha256:bf9b53e1da5784a3a63d4ddfc1f3181104888441e5d594cf4e37739660e5b164    0.0s
 => => naming to docker.io/library/monimage:v1
```

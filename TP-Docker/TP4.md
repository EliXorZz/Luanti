# Volumes Docker (TP4)

| Action               | Commande                           |
|----------------------|------------------------------------|
| Créer un volume      | docker volume create monvolume     |
| Lister les volumes   | docker volume ls                   |
| Inspecter un volume  | docker volume inspect monvolume    |
| Utiliser un volume   | docker run -v monvolume:/data ...  |
| Supprimer un volume  | docker volume rm monvolume         |

# Mise en pratique
## Exercice 1

```bash
❯ docker run -d \
 --name volumetest \
 -p 8000:80 \
 -v myhtml:/usr/share/nginx/html \
 nginx:alpine
cb10a23f1cc89f07387317fd7da037ac67fd224d3cc67955d13519bf19e3e513
~/MyDigitalSchool/DevSecOps
❯ docker cp index.html volumetest:/usr/share/nginx/html
Successfully copied 2.05kB to volumetest:/usr/share/nginx/html
```

En modifier le fichier `index.html`, et en le recopiant dans le volume, la page change.

La page est maintenant persister si je supprime et recréer mon container avec le même volume.

## Exercice 2

```bash
❯ docker run -d \
 --name bindtest \
 -p 8000:80 \
 -v $(pwd)/webcontent:/usr/share/nginx/html \
 nginx:alpine
7346a5b27fa818b2a548f43346e3f01e63f9dcd80dde298214b9f7d13a6ab96a
```

## Exercice 4
```bash
❯ docker network create ghost-net
c98294af9c58759f149dc7c099024afa744f744e5838cb469ed6a59d2856501e
~/MyDigitalSchool/DevSecOps
❯ docker run -d \
  --name ghostdb \
  --network ghost-net \
  -e MYSQL_ROOT_PASSWORD=changeme \
  -e MYSQL_DATABASE=ghost \
  -e MYSQL_USER=ghost \
  -e MYSQL_PASSWORD=changeme \
  -v ghost_db:/var/lib/mysql \
  mariadb
d8b63deb1c282409889439299d31b83c5018772994f9015fea6738350ce44c59
~/MyDigitalSchool/DevSecOps
❯ docker run -d \
  --name ghostcms \
  --network ghost-net \
  -p 2368:2368 \
  -e url=http://localhost:2368 \
  -e database__client=mysql \
  -e database__connection__host=ghostdb \
  -e database__connection__user=ghost \
  -e database__connection__password=changeme \
  -e database__connection__database=ghost \
  -v ghost_content:/var/lib/ghost/content \
  ghost
Unable to find image 'ghost:latest' locally
latest: Pulling from library/ghost
b1efea88fbf7: Pull complete
9c3990fb3db1: Pull complete
0b102b78a03c: Pull complete
43d3db290443: Pull complete
2af109a50eb7: Pull complete
6ff1661c637b: Pull complete
7a3f2dc690ae: Pull complete
567b05086349: Pull complete
4f4fb700ef54: Pull complete
37f276c33f62: Pull complete
Digest: sha256:4776e968427b33614f8b8c9e760f68bbffc86394775a9cffa9775cfcb039a417
Status: Downloaded newer image for ghost:latest
f6cdd2c6ad3aa4447a6e3a9741ee14e38d5df712ce5dc72c248d9c9c463551de
```

# NGINX et page HTML (TP3)

### Exercice - Logs
```bash
❯ docker logs mysite
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2026/01/12 09:39:57 [notice] 1#1: using the "epoll" event method
2026/01/12 09:39:57 [notice] 1#1: nginx/1.29.4
2026/01/12 09:39:57 [notice] 1#1: built by gcc 15.2.0 (Alpine 15.2.0)
2026/01/12 09:39:57 [notice] 1#1: OS: Linux 6.17.4-orbstack-00308-g195e9689a04f
2026/01/12 09:39:57 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 20480:1048576
2026/01/12 09:39:57 [notice] 1#1: start worker processes
2026/01/12 09:39:57 [notice] 1#1: start worker process 30
2026/01/12 09:39:57 [notice] 1#1: start worker process 31
2026/01/12 09:39:57 [notice] 1#1: start worker process 32
2026/01/12 09:39:57 [notice] 1#1: start worker process 33
2026/01/12 09:39:57 [notice] 1#1: start worker process 34
2026/01/12 09:39:57 [notice] 1#1: start worker process 35
2026/01/12 09:39:57 [notice] 1#1: start worker process 36
2026/01/12 09:39:57 [notice] 1#1: start worker process 37
192.168.215.1 - - [12/Jan/2026:09:40:01 +0000] "GET / HTTP/1.1" 200 168 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:146.0) Gecko/20100101 Firefox/146.0" "-"
2026/01/12 09:40:01 [error] 30#30: *1 open() "/usr/share/nginx/html/favicon.ico" failed (2: No such file or directory), client: 192.168.215.1, server: localhost, request: "GET /favicon.ico HTTP/1.1", host: "localhost:8000", referrer: "http://localhost:8000/"
192.168.215.1 - - [12/Jan/2026:09:40:01 +0000] "GET /favicon.ico HTTP/1.1" 404 153 "http://localhost:8000/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:146.0) Gecko/20100101 Firefox/146.0" "-"
```

### Registry privé Docker
```bash
❯ docker pull localhost:5000/webserver-image:v1
v1: Pulling from webserver-image
Digest: sha256:0eb58e98c1f9749bea01936a0758cc0a23518d9c598c46c44873f1c1408f35ed
Status: Downloaded newer image for localhost:5000/webserver-image:v1
localhost:5000/webserver-image:v1
```

```bash
❯ docker run -d --name mysite -p 8000:80 localhost:5000/webserver-image:v1
bb0e6b6b9e0b7a2a3772e18974cec62df2021ed6dc4f22f6623692d77d29444e
```
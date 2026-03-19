# Docker compose (TP6)

```bash
❯ docker compose logs -f
WARN[0000] /Users/dylan/MyDigitalSchool/DevSecOps/TP6/docker-compose.yaml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion
proxy  | /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
proxy  | /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
proxy  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
proxy  | 10-listen-on-ipv6-by-default.sh: info: can not modify /etc/nginx/conf.d/default.conf (read-only file system?)
proxy  | /docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
proxy  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
proxy  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
proxy  | /docker-entrypoint.sh: Configuration complete; ready for start up
proxy  | 2026/03/19 08:00:28 [notice] 1#1: using the "epoll" event method
proxy  | 2026/03/19 08:00:28 [notice] 1#1: nginx/1.29.4
proxy  | 2026/03/19 08:00:28 [notice] 1#1: built by gcc 15.2.0 (Alpine 15.2.0)
proxy  | 2026/03/19 08:00:28 [notice] 1#1: OS: Linux 6.17.4-orbstack-00308-g195e9689a04f
proxy  | 2026/03/19 08:00:28 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 20480:1048576
proxy  | 2026/03/19 08:00:28 [notice] 1#1: start worker processes
proxy  | 2026/03/19 08:00:28 [notice] 1#1: start worker process 21
proxy  | 2026/03/19 08:00:28 [notice] 1#1: start worker process 22
proxy  | 2026/03/19 08:00:28 [notice] 1#1: start worker process 23
proxy  | 2026/03/19 08:00:28 [notice] 1#1: start worker process 24
proxy  | 2026/03/19 08:00:28 [notice] 1#1: start worker process 25
proxy  | 2026/03/19 08:00:28 [notice] 1#1: start worker process 26
proxy  | 2026/03/19 08:00:28 [notice] 1#1: start worker process 27
proxy  | 2026/03/19 08:00:28 [notice] 1#1: start worker process 28
app    | Server running on port 3000
proxy  | 192.168.148.1 - - [19/Mar/2026:08:00:50 +0000] "GET / HTTP/1.1" 200 30 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:148.0) Gecko/20100101 Firefox/148.0" "-"
proxy  | 192.168.148.1 - - [19/Mar/2026:08:00:50 +0000] "GET /favicon.ico HTTP/1.1" 200 30 "http://localhost/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:148.0) Gecko/20100101 Firefox/148.0" "-"
```
# Network Docker (TP5)

### Quand faut-il publier un port (-p) et quand ce n’est pas nécessaire ?

Il est nécéssaire de publier un port lorsque l'on veut l'exposer en dehors du réseau Docker pour l'exposer.

### Comment un conteneur “trouve” l’autre par son nom, sans connaître son IP ?

Docker intègre un serveur DNS interne qui permet de résoudre les noms de container pour obtenir leurs adressse IPs.

```bash
~/MyDigitalSchool/DevSecOps
❯ docker network inspect monreseau
[
    {
        "Name": "monreseau",
        "Id": "bc314ef38f0bd93f875cc9689e917c1771f74e5ebf86d347c67d7b2d5dafff7f",
        "Created": "2026-03-19T08:40:18.099239443+01:00",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv4": true,
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "192.168.147.0/24",
                    "Gateway": "192.168.147.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {},
        "Options": {},
        "Labels": {}
    }
]
```

```bash
/ # curl myserver:8000
<html>
<head><title>Docker Network</title></head>
<body>

<h1>Communication entre conteneurs</h1>

<p>Bienvenue sur le serveur Python dans Docker !</p>
</body>
</html>
```

On constate qu'on ne peut pas communiquer depuis notre machine hôte car nous n'avons pas publier un port.
Comme le container client et serveur sont sur le même réseau, ils peuvent communiqués entre eux.
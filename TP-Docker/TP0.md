# 1. Information système et repères

### À quoi correspond chaque mot affiché ? Que signifie l’option -a ?

```bash
uname -a
Linux e4b62f7a8c56 6.17.4-orbstack-00308-g195e9689a04f #1 SMP PREEMPT Fri Oct 24 07:22:34 UTC 2025 aarch64 aarch64 aarch64 GNU/Linux
```
- Linux : nom du noyau
- e4b62f7a8c56 : nom de la machine (hostname)
- 6.17.4-orbstack-00308-g195e9689a04f : version du noyau Linux
- #1 : numéro de compilation du noyau
- SMP : support du multi-processeur (plusieurs cœurs CPU)
- PREEMPT : noyau préemptif, améliore la réactivité
- Fri Oct 24 07:22:34 UTC 2025 : date et heure de compilation du noyau
- aarch64 : architecture matérielle (ARM 64 bits)
- aarch64 : architecture du processeur
- aarch64 : architecture de la plateforme
- GNU/Linux : système d’exploitation (outils GNU + noyau Linux)

L'option `-a` permet d'afficher la totalité des informations, sans ça, seulement le système d'exploitation est affiché.

`uname` = Unix Name

### Définissez chaque terme, dites qui y accède, à quoi ça sert, lesquels sont relatifs/absolus.

**Root directory (/)** : répertoire racine du système, point de départ de tous les chemins.
Sert à contenir toute l’arborescence.
Chemin absolu.

**Home directory (~)** : répertoire personnel de l’utilisateur.
Sert à stocker fichiers et configurations personnelles. ~ est un raccourci vers un chemin absolu.

**Parent directory (..)** : répertoire au niveau au-dessus du répertoire courant.
Sert à remonter dans l’arborescence.
Chemin relatif.

**Working directory (.)** : répertoire courant.
Sert de référence pour les commandes exécutées.
Chemin relatif.

### Allez dans /var, créez un dossier learning, puis entrez dedans. Notez les commandes.

```bash
cd /var
mkdir learning
cd learning
```

# 2. Écrire et manipuler des fichiers

```bash
nano COURT-1
mv COURT-1 COURS-1
cd
cp -r /var/learning ~/cours
rm -r /var/learning
```

# 3. Navigation et chemins relatifs

### Recréez l’architecture
```bash
mkdir -p a/b/1
mkdir -p a/b/2
mkdir -p a/a
mkdir -p a/c
```

### Chemin relatif : vous êtes dans `/a/b/2`.
`/a/b/1`

# 4. Variables d’environnement

### Qu’est-ce qu’une variable d’environnement ?
Une variable d’environnement est une valeur stockée par le système et transmise aux programmes lors de leur exécution.

### `printenv`
Toutes les variables d'environnements de mon système s'affichent.

### Puis printenv à nouveau. Qu’est-ce qui change ?
La variable d'environnement `EDITOR=nano` a été rajouté.

### À quoi sert `export` ? Et `unset` ?
`export` = permet d'exporter une variable d'environnement sur mon shell actuel.
`unset` = permet de supprimer une variable d'environnement sur le shell actuel.

# 5. Premier script bash

### Pourquoi ça peut ne pas fonctionner directement ?
Par défaut, le fichier `exercice1.sh` n'a aucune permissions permettant l'execution.

### À quoi sert `chmod` ? Que signifient les chiffres ?
- 4 = lecture (r)
- 2 = écriture (w)
- 1 = exécution (x)

```
777 = 4+2+1 pour chaque catégorie (ugo = user - group - owner).

777 = donne absolument tous les droits.
```

# 6. Plusieurs commandes en une ligne
```bash
echo -e "J'aime\nles\ncours\nd'administration\nsystème"
```

# 7. Tests sur des fichiers

```bash
#!/bin/bash

read -p "Entrez le nom d'un fichier ou d'un dossier : " target

if [[ -f "$target" ]]; then
    echo "$target est un fichier."
elif [[ -d "$target" ]]; then
    echo "$target est un repertoire."
else
    echo "$target n'existe pas."
    exit 1
fi

ls -l "$target"
```
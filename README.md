# webpage

## Local deployment

### Clone repository

```
git clone -b development https://github.com/visiti-tourism/webpage $$ cd webpage
```

### Install additional modules

```
sudo apt-get install libmysqlclient-dev
```

### Create virtual environment

```
python3 -m venv venv && source venv/bin/activate
```

### Install dependencies

```
pip3 install -r requirements.txt
```

### Place **settings.py** file into `webpage/website/settings.py`

```
Ask server administrator for this file.
```

### Create separate database using MySQL

```
mysql -u <username> -p 
```

Inside of MySQL execute:

```
CREATE DATABASE database-name;
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON database-name.* TO 'user'@'localhost';
```

Note: replace *database-name*, *user* and *password* wtth your own ones.

### Create config file for **mysql** in `/var/mysqlconfig/settings.conf`

```
[client]
database = <db-name>
user = <username>
password = <db-password>
default-character-set = utf8
```

Note: replace <...> with respective values.

### Create config file with SECRET_KEY

```
python3 -c 'import random; print("{\"SECRET_KEY\": " + "\"" + "".join([random.choice("abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)") for i in range(50)]) + "\"}")' > /etc/config.json
```

### Perform initial migrations

```
python3 manage.py migrate
```

### Launch server

```
python3 manage.py runserver
```

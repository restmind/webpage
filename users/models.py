
from django.db import models

from django.db import models
from datetime import datetime
from excursions.models import City, Country, Excursion 
class Role(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class User(models.Model):
    
    username = models.CharField(max_length=100, default="username")
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=128)
    city = models.ForeignKey(City, on_delete=models.CASCADE,default="city")
    country = models.ForeignKey(Country, on_delete=models.CASCADE, default= "country")
    role = models.ForeignKey(Role,on_delete=models.CASCADE, default="non-user")

    def __str__(self):
        return self.username

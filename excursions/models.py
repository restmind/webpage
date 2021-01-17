from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from django.urls import reverse

class Country(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class City(models.Model):
    name = models.CharField(max_length=30)
    country = models.ForeignKey(Country, on_delete = models.CASCADE) 

    def __str__(self):
        return self.name

class Excursion(models.Model):

    name = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    country = models.ForeignKey(Country, on_delete = models.CASCADE)
    city = models.ForeignKey(City, on_delete = models.CASCADE)
    start_time = models.DateTimeField(auto_now=False, auto_now_add=False)
    end_time = models.DateTimeField(auto_now=False, auto_now_add=False)
    image_title = models.ImageField(upload_to = "static/images/excursions/",default = "none")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('excursion-detail', kwargs={'pk': self.pk})


"""website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from myapi import views as myapiviews
from excursions import views as excurionviews
from users import views as usersviews
from django.conf.urls import include
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'users', myapiviews.UserViewSet)
router.register(r'groups', myapiviews.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('home/', views.index, name='index'),
    #path('uploadtour/', views.uploadtour, name='uploadtour'),
    path('uploadtour/', excurionviews.register, name='register'),
    path('home#app/', views.app, name='app'),
    path('signin/', views.signin, name='signin'),
    path('register/', usersviews.register, name='user_registration'),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

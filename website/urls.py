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

from excursions.views import (
    ExcursionListView,
    ExcursionDetailView,
    ExcursionCreateView,
    ExcursionApiView
)
from . import views
from myapi import views as myapiviews
from rest_framework.authtoken.views import obtain_auth_token
from users import views as usersviews
from django.conf.urls import url, include
from rest_framework import routers


router = routers.DefaultRouter()
#router.register(r'users', myapiviews.UserViewSet)
#router.register(r'groups', myapiviews.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('app/', views.app, name='app'),
    path('profile/', usersviews.profile, name='profile'),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('accounts/', include('allauth.urls')),
    path('excursions/', ExcursionListView.as_view(), name='excursions-list'),
    path('excursion/<int:pk>/', ExcursionDetailView.as_view(), name='excursion-detail'),
    path('excursion/new/', ExcursionCreateView.as_view(), name='excursion-create'),
    path('api/excursions/', ExcursionApiView.excursion_list, name='excursions-api-list'),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    #path('api/excursion/(<int:pk>', ExcursionApiView)
]

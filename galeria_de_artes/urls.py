"""galeria_de_artes URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Import the include() function: from django.conf.urls import url, include
    3. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import url
from django.views.generic import TemplateView
from django.contrib import admin
from django.conf import settings

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT, 'show_indexes':True}),
    url(r'^/?$','obras.views.index'),
    url(r'^artistas/?$','autores.views.autores'),
    url(r'^artista/(?P<slug>[^\/]+)/?$','autores.views.autor'),
    url(r'^artista/(?P<slug>[^\/]+)/(?P<id_obra>\d*)$','autores.views.autor'),
    url(r'^anos/?$','obras.views.anos'),
    url(r'^ano/(?P<ano>\d*)$','obras.views.ano'),
    url(r'^ano/(?P<ano>\d*)/(?P<numero_pagina>\d*)$','obras.views.ano'),
    url(r'^tecnicas/?$','obras.views.tecnicas'),
    url(r'^tecnica/(?P<slug>[^\/]+)$','obras.views.tecnica'),
    url(r'^tecnica/(?P<slug>[^\/]+)/(?P<numero_pagina>\d*)$','obras.views.tecnica'),
    url(r'^busca/?$','obras.views.busca'),
    url(r'^busca/(?P<busca>[^\/]+)/(?P<numero_pagina>\d*)$', 'obras.views.busca')
    ]




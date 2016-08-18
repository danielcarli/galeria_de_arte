# coding: utf-8
from django.contrib import admin
from django.conf import settings
from models import Obra, Fotografia, Tecnica
from easy_thumbnails.files import get_thumbnailer

class FotografiaTab(admin.TabularInline):
    model = Fotografia
    list_display = ['foto','_thumb']

    def _thumb(self, obj):
        thumbnailer = get_thumbnailer(obj.foto)
        thumbnailer_options = {'crop':True,'size':(400,200), 'detail':True, 'upscale':True}
        thumbnail = thumbnailer.get_thumbnailer(thumbnailer_options)       
        media_url = settings.MEDIA_URL
        thumb_url = u"%s%s"%(media_url,thumbnail)
        resultado = u"<img src='%s'>"%(thumb_url)

    _thumb.allow_tags = True

class ObraAdmin(admin.ModelAdmin):
    model = Obra
    #list_display = ['titulo','autor','dada_execucao', 'altura', 'largura'] 

    search_fields = ['titulo','descricao','autor__nome']
    order_by = ['autor__nome','titulo']
    inlines = [FotografiaTab,]

admin.site.register(Obra, ObraAdmin)
admin.site.register(Tecnica)
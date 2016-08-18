# coding: utf-8
from django.contrib import admin
from django.conf import settings
from models import Autor
from easy_thumbnails.files import get_thumbnailer

class AutorAdmin(admin.ModelAdmin):
    model = Autor

    list_display = ['nome','descricao','_imagem'] 
    search_fields = ['nome','descricao']

    def _imagem(self, obj):
        try:
            thumbnailer = get_thumbnailer(obj.imagem)
            thumbnail_option = {'crop':True, 'size': (150,150), 'detail':True, 'upscale':True}
            thumbnail = thumbnailer.get_thumbnail(thumbnail_option)
            media_url = settings.MEDIA_URL
            thumb_url = u"%s%s"%(media_url,thumbnail)
            return "<img src='%s'>"%(thumb_url)

        except Exception, e:
            pass
        else:
            pass
        finally:
            pass
    
    _imagem.allow_tags = True

admin.site.register(Autor, AutorAdmin)


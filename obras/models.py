# conding: utf-8
from __future__ import unicode_literals

from django.db import models
from autoslug import AutoSlugField
from autores.models import Autor

def pasta_obra(instance, filename):
    obra_id = instance.obra.id
    return "obra/{0}/{1}".format(instance.obra.id, filename)

class Tecnica(models.Model):
    nome = models.CharField(max_length=128, unique=True)

    def __unicode__(self):
        return self.nome

class Obra(models.Model):
    UNIDADES_DE_MEDIDA = (
            ("m","Metro"),
            ("cm","Centimetro"),
            ("mm","Milimetro")
            )

    titulo = models.CharField(max_length=128)
    descricao = models.TextField(null=True, blank=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)
    autor = models.ForeignKey(Autor)
    
    data_execucao = models.IntegerField(null=True, blank=True)
    largura = models.IntegerField(null=True, blank=True)
    comprimento = models.IntegerField(null=True, blank=True)
    altura = models.IntegerField(null=True, blank=True)
    

    unidade_de_medida = models.CharField(max_length=2, 
                            choices=UNIDADES_DE_MEDIDA,
                            default="cm")
    tecnicas = models.ManyToManyField(Tecnica)

    #slug = AutoSlugField(populate_from="titulo", always_update=True)

    def __unicode__(self):
        return self.titulo


class Fotografia(models.Model):
    obra = models.ForeignKey(Obra)
    foto = models.ImageField(upload_to=pasta_obra)
    

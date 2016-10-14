# conding: utf-8
from __future__ import unicode_literals
from random import randint
from django.db.models.aggregates import Count
from django.db import models
from autoslug import AutoSlugField
from autores.models import Autor

def pasta_obra(instance, filename):
    obra_id = instance.obra.id
    return "obra/{0}/{1}".format(instance.obra.id, filename)

class UtilsManager(models.Manager):
    def random(self,quantity=1):
        count = self.aggregate(count=Count('id'))['count']
        rand_indexes = []
        itens = []
        count_quantity = 0


        while count_quantity != quantity: 
            random_index = randint(0, count - 1)
            if not random_index in rand_indexes:
                count_quantity += 1
                rand_indexes.append(random_index)
                itens.append( self.all()[random_index] )

        return itens

    

class Tecnica(models.Model):
    nome = models.CharField(max_length=128, unique=True)
    slug = AutoSlugField(populate_from='nome', always_update=True, default="")

    def __unicode__(self):
        return self.nome

    def populate_auto_slug(self):
        self.slug = self.nome.encode("ASCII",'ignore').replace(' ','-')
        self.save()

    def count(self):
        return self.obra_set.count()

class Tipo(models.Model):
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
    tipo = models.ForeignKey(Tipo, null=True, blank=True)
    tecnicas = models.ManyToManyField(Tecnica)
    
    objects = UtilsManager()

    #slug = AutoSlugField(populate_from="titulo", always_update=True)

    def __unicode__(self):
        return self.titulo

    def get_foto(self):
        if not self.fotografia_set.all():
            return None
        else:
            return self.fotografia_set.all()[0]

class Fotografia(models.Model):
    obra = models.ForeignKey(Obra)
    foto = models.ImageField(upload_to=pasta_obra)
    
    objects = UtilsManager()

    def __unicode__(self):
        return self.obra.titulo
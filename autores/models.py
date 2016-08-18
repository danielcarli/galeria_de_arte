from __future__ import unicode_literals

from django.db import models
from autoslug import AutoSlugField

class Autor(models.Model):
    nome = models.CharField(max_length=128)
    descricao = models.TextField(blank=True, null=True)
    imagem = models.ImageField(blank=False, null=False, upload_to='autores/%Y/%m/%d')
    ativo = models.BooleanField(default=True)
    slug = AutoSlugField(populate_from='nome', always_update=True)

    def __unicode__(self):
        return self.nome
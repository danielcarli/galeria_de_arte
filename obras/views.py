from random import randint
from django.shortcuts import render
from models import Obra, Fotografia, Tecnica


def index(request):
    items = Fotografia.objects.random(quantity=10)

    foto_destaque = items[0]
    destaques = items[1:]

    return render(request, 'index.html',
        {
            'destaque':foto_destaque,
            'destaques':destaques,
            'menu':'INICIAL'

        })



def tecnicas(request):
    tecnicas = Tecnica.objects.all().order_by('nome')
    return render(request, 'tecnicas.html',{

            'menu':'TECNICAS',
            'tecnicas': tecnicas
        })

def ano(request):
    return render(request, 'autores.html',{

            'menu':'ANO'
        })



def busca(request):
    return render(request, 'autores.html',{

            'menu':'BUSCA'
        })
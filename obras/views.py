from random import randint
from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator
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

def tecnica(request, slug, numero_pagina=1):
    ITES_PER_PAGE = 9

    tecnica = get_object_or_404(Tecnica, slug=slug)
    queryset = tecnica.obra_set.all()

    paginador = Paginator(queryset, ITES_PER_PAGE)
    pagina = paginador.page(numero_pagina)

    return render(request, 'tecnica.html',{
            'pagina':pagina,
            'menu':'TECNICAS',
            'tecnica':tecnica,
        })

def ano(request):
    return render(request, 'autores.html',{

            'menu':'ANO'
        })



def busca(request):
    return render(request, 'autores.html',{

            'menu':'BUSCA'
        })
from random import randint
from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from django.utils.datastructures import MultiValueDictKeyError
from django.core.paginator import Paginator
from models import Obra, Fotografia, Tecnica

ITES_PER_PAGE = 9

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
    

    tecnica = get_object_or_404(Tecnica, slug=slug)
    queryset = tecnica.obra_set.all()

    paginador = Paginator(queryset, ITES_PER_PAGE)
    pagina = paginador.page(numero_pagina)

    return render(request, 'tecnica.html',{
            'pagina':pagina,
            'menu':'TECNICAS',
            'tecnica':tecnica,
        })

def anos(request):
    anos = []
    obras = Obra.objects.all().order_by('data_execucao')

    for obra in obras:
        if not obra.data_execucao in anos:
            anos.append(obra.data_execucao)


    return render(request, 'anos.html',{
            'menu':'ANOS',
            'anos':anos,
        })

def ano(request, ano, numero_pagina=1):
    if ano == "":
        obras = Obra.objects.filter(data_execucao=None)
    else:
        obras = Obra.objects.filter(data_execucao=ano)
    
    paginador = Paginator(obras, ITES_PER_PAGE)
    pagina = paginador.page(numero_pagina)

    return render(request, 'ano.html',{
        'ano':ano,
        'menu':'ANOS',
        'pagina':pagina,
    })


def busca(request, busca=None,  numero_pagina=1):
    buscar_por = None
   
    try:
        buscar_por = request.GET['buscar']
    except MultiValueDictKeyError:
        buscar_por = busca

    try: 
        ano = int(buscar_por)
    except:
        ano = None    

    tecnicas = Tecnica.objects.filter(nome__icontains=buscar_por)

    if ano:
        obras = Obra.objects.filter(
                                Q(autor__nome__icontains=buscar_por) | 
                                Q(titulo__icontains=buscar_por) |
                                Q(descricao__icontains=buscar_por) |
                                Q(tecnicas__in=tecnicas) |
                                Q(data_execucao=ano) ) 
    else:
        obras = Obra.objects.filter(
                                Q(autor__nome__icontains=buscar_por) | 
                                Q(titulo__icontains=buscar_por) |
                                Q(descricao__icontains=buscar_por) |
                                Q(tecnicas__in=tecnicas) )

    paginador = Paginator(obras, ITES_PER_PAGE)
    pagina = paginador.page(numero_pagina)
    resultados= obras.count()

    return render(request, 'busca.html',{
            'pagina':pagina,
            'menu':'BUSCA',
            'busca':buscar_por,
            'resultados':resultados,
        })
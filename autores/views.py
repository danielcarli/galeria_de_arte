from django.shortcuts import render, get_object_or_404
from models import Autor
from obras.models import Obra

def autores(request):
    autores = Autor.objects.filter(ativo=True).order_by('nome')

    return render(request, 'autores.html',{
            'autores':autores,
            'menu':'AUTORES'
        })


def autor(request, slug, id_obra=None):
    autor = get_object_or_404(Autor,slug=slug)
    obra = None

    if id_obra:
        obra = get_object_or_404(Obra, id=id_obra)

    return render(request, 'autor.html',{
            'autor':autor,
            'obra':obra,
            'menu':'AUTORES'
        })
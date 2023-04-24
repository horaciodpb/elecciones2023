from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import Candidatos, Mesas, Escrutinio
@csrf_exempt

def carga_datos(request):
    
    if request.method == 'POST':
        mesa_id = request.POST.get('mesa')
        mesa_a_cargar = Mesas.objects.get(mesa=mesa_id)
        for i in range(1,30):
            candidato = i
            inst_cand = Candidatos.objects.get(id_cand = candidato)
            cant_votos = request.POST.get(f"votos_{candidato}")
            Escrutinio.objects.create(mesa = mesa_a_cargar, id_cand = inst_cand, votos = cant_votos)
    else:
        pass
    return render(request, 'carga_datos.html')

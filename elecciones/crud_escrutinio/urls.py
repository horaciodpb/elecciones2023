from django.urls import path
from . import views

urlpatterns = [
    #path('crud_escrutinio/', views.crud_escrutinio, name='crud_escrutinio'),
    path('', views.crud_escrutinio, name='crud_escrutinio'),
    path('crearRegistro/', views.crearRegistro, name='crearRegistro'),
    path('buscar_mesa/', views.buscar_mesa, name='buscar_mesa'),
    path('eliminarRegistro/<id_registro_votos>', views.eliminarRegistro, name='eliminarRegistro'),
]

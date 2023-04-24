from django.db import models

class Candidatos(models.Model):
    id_cand = models.IntegerField(primary_key=True)
    candidato_nombre = models.CharField(max_length=255)
    lista_nombre = models.CharField(max_length=255)
    partido = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'candidatos'

class Mesas(models.Model):
    mesa = models.IntegerField(primary_key=True)
    circuito = models.CharField(max_length=255)
    distrito = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'mesas'

class Escrutinio(models.Model):
    #id_registro_votos = models.IntegerField(primary_key=True)
    mesa = models.ForeignKey(Mesas, on_delete=models.CASCADE, db_column='mesa')
    id_cand = models.ForeignKey(Candidatos, on_delete=models.CASCADE, db_column='id_cand')
    votos = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'escrutinio'

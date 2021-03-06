# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-08-15 20:06
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import obras.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('autores', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fotografia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('foto', models.ImageField(upload_to=obras.models.pasta_obra)),
            ],
        ),
        migrations.CreateModel(
            name='Obra',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=128)),
                ('descricao', models.TextField(blank=True, null=True)),
                ('data_cadastro', models.DateTimeField(auto_now_add=True)),
                ('ano', models.IntegerField(blank=True, null=True)),
                ('autor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='autores.Autor')),
            ],
        ),
        migrations.AddField(
            model_name='fotografia',
            name='obra',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='obras.Obra'),
        ),
    ]

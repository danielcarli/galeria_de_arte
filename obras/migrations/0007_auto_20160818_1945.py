# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-08-18 22:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('obras', '0006_remove_obra_ops'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tecnica',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=128, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='obra',
            name='tecnicas',
            field=models.ManyToManyField(to='obras.Tecnica'),
        ),
    ]

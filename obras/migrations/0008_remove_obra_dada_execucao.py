# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-08-19 18:34
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('obras', '0007_auto_20160818_1945'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='obra',
            name='dada_execucao',
        ),
    ]

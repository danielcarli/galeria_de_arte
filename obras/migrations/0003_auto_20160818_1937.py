# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-08-18 22:37
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('obras', '0002_auto_20160818_1930'),
    ]

    operations = [
        migrations.RenameField(
            model_name='obra',
            old_name='lagura',
            new_name='largura',
        ),
    ]

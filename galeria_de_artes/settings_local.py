import os
from os.path import join, normpath

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'galeria_de_arte',
        'USER':'root',
        'PASSWORD':'$Ervico$2013'
    }
}

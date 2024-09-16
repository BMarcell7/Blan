from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return HttpResponse("Hello, world!")

def stickers(request):
    return HttpResponse("Ez a matricák oldala")
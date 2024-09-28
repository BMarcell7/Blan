from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return render(request, 'home.html')

def stickers(request):
    return render(request, 'stickers.html')

def test(request):
    return render(request, 'test.html')
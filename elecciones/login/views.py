# elecciones/login/views.py
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse

def login_view(request):
    """Log in view."""
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect(reverse('elecciones:index'))
        else:
            return render(request, 'login/login.html', {'error_message': 'Invalid login'})
    else:
        return render(request, 'login/login.html')

def logout_view(request):
    """Log out view."""
    logout(request)
    return redirect(reverse('login'))

def carga_datos(request):
    return render(request, 'elecciones/carga_datos.html')
from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages

from .forms import RegisterForm


# Home Page
def home(request):
    return render(request, 'home.html')


# Register
def register_view(request):

    if request.method == "POST":

        form = RegisterForm(request.POST)

        if form.is_valid():

            user = form.save()

            login(request, user)

            messages.success(request, "Registration Successful!")

            return redirect('dashboard')

    else:

        form = RegisterForm()

    return render(request, 'registration/register.html', {
        'form': form
    })


# Dashboard
from exams.models import Exam, Attempt
from django.contrib.auth.decorators import login_required

@login_required
def dashboard(request):

    exams = Exam.objects.all()

    attempts = Attempt.objects.filter(student=request.user)

    completed = attempts.count()

    average = 0

    if completed > 0:
        average = round(
            sum(a.percentage for a in attempts) / completed,
            2
        )

    context = {
        "exams": exams,
        "available": exams.count(),
        "completed": completed,
        "average": average,
    }

    return render(request, "student/dashboard.html", context)

from django.contrib.auth import logout
from django.shortcuts import redirect

def logout_view(request):
    logout(request)
    return redirect("home")


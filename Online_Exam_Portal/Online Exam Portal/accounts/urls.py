from django.urls import path
from django.contrib.auth.views import LoginView
from . import views

urlpatterns = [
    path("", views.home, name="home"),

    path("register/", views.register_view, name="register"),

    path(
        "login/",
        LoginView.as_view(template_name="registration/login.html"),
        name="login",
    ),

    path("dashboard/", views.dashboard, name="dashboard"),

    path("logout/", views.logout_view, name="logout"),
]
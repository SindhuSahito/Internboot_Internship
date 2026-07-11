from django.urls import path
from . import views

urlpatterns = [

    path(
        "",
        views.exam_list,
        name="exam_list"
    ),

    path(
        "<int:exam_id>/",
        views.start_exam,
        name="start_exam"
    ),

    path(
        "result/<int:attempt_id>/",
        views.result,
        name="result"
    ),

]
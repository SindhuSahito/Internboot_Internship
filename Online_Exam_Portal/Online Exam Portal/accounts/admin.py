from django.contrib import admin
from .models import StudentProfile


@admin.register(StudentProfile)
class StudentProfileAdmin(admin.ModelAdmin):

    list_display = (
        'user',
        'department',
        'semester',
        'phone'
    )

    search_fields = (
        'user__username',
        'department',
    )
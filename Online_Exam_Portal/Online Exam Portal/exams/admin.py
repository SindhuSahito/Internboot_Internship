from django.contrib import admin
from .models import Exam, Question, Option, Attempt


@admin.register(Exam)
class ExamAdmin(admin.ModelAdmin):

    list_display = (
        'title',
        'duration_minutes',
        'passing_score',
        'created_at'
    )

    search_fields = ('title',)

    list_filter = ('created_at',)


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):

    list_display = (
        'question_text',
        'exam',
        'marks'
    )

    search_fields = (
        'question_text',
    )

    list_filter = (
        'exam',
    )


@admin.register(Option)
class OptionAdmin(admin.ModelAdmin):

    list_display = (
        'option_text',
        'question',
        'is_correct'
    )

    list_filter = (
        'is_correct',
    )

    search_fields = (
        'option_text',
    )


@admin.register(Attempt)
class AttemptAdmin(admin.ModelAdmin):

    list_display = (
        'student',
        'exam',
        'score',
        'percentage',
        'is_passed',
        'start_time'
    )

    list_filter = (
        'exam',
        'is_passed',
    )

    search_fields = (
        'student__username',
    )
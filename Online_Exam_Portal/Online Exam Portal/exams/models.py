from django.db import models
from django.contrib.auth.models import User


class Exam(models.Model):

    title = models.CharField(max_length=200)

    description = models.TextField()

    duration_minutes = models.PositiveIntegerField()

    passing_score = models.PositiveIntegerField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Question(models.Model):

    exam = models.ForeignKey(
        Exam,
        on_delete=models.CASCADE,
        related_name='questions'
    )

    question_text = models.TextField()

    marks = models.PositiveIntegerField(default=1)

    def __str__(self):
        return self.question_text


class Option(models.Model):

    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE,
        related_name='options'
    )

    option_text = models.CharField(max_length=300)

    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.option_text


class Attempt(models.Model):

    student = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    exam = models.ForeignKey(
        Exam,
        on_delete=models.CASCADE
    )

    score = models.IntegerField(default=0)

    percentage = models.FloatField(default=0)

    is_passed = models.BooleanField(default=False)

    start_time = models.DateTimeField(auto_now_add=True)

    end_time = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.student.username} - {self.exam.title}"
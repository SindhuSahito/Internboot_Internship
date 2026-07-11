from django.shortcuts import render, get_object_or_404
from .models import Exam, Attempt


def exam_list(request):
    exams = Exam.objects.all()
    return render(request, "student/exam_list.html", {"exams": exams})


from django.shortcuts import render, get_object_or_404
from .models import Exam, Attempt


def exam_list(request):
    exams = Exam.objects.all()
    return render(request, "student/exam_list.html", {"exams": exams})


from django.utils import timezone
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from .models import Exam, Question, Option, Attempt

@login_required
def start_exam(request, exam_id):

    exam = get_object_or_404(Exam, id=exam_id)

    questions = exam.questions.all()

    if request.method == "POST":

        total_marks = 0
        obtained_marks = 0

        for question in questions:

            total_marks += question.marks

            selected_option = request.POST.get(
                f"question_{question.id}"
            )

            if selected_option:

                option = Option.objects.get(
                    id=selected_option
                )

                if option.is_correct:

                    obtained_marks += question.marks

        percentage = round(
            (obtained_marks / total_marks) * 100,
            2
        )

        passed = percentage >= exam.passing_score

        attempt = Attempt.objects.create(

            student=request.user,

            exam=exam,

            start_time=timezone.now(),

            end_time=timezone.now(),

            score=obtained_marks,

            percentage=percentage,

            is_passed=passed

        )

        return redirect("result", attempt.id)

    return render(
        request,
        "student/start_exam.html",
        {
            "exam": exam,
            "questions": questions
        }
    )

@login_required
def result(request, attempt_id):

    attempt = get_object_or_404(
        Attempt,
        id=attempt_id
    )

    return render(
        request,
        "student/result.html",
        {
            "attempt": attempt
        }
    )

def result(request, attempt_id):
    attempt = get_object_or_404(Attempt, id=attempt_id)

    return render(request, "student/result.html", {
        "attempt": attempt
    })

from exams.models import Exam, Attempt
from django.contrib.auth.decorators import login_required

@login_required
def dashboard(request):

    # All exams
    all_exams = Exam.objects.all()

    # Student attempts
    attempts = Attempt.objects.filter(student=request.user)

    # IDs of attempted exams
    attempted_exam_ids = attempts.values_list("exam_id", flat=True)

    # Exams not attempted yet
    available_exams = all_exams.exclude(id__in=attempted_exam_ids)

    # Statistics
    available_count = available_exams.count()

    completed_count = attempts.count()

    average_score = 0

    if completed_count > 0:

        average_score = round(
            sum(a.percentage for a in attempts) / completed_count,
            2
        )

    context = {

        "exams": available_exams,

        "available": available_count,

        "completed": completed_count,

        "average": average_score,

        "attempts": attempts,

    }

    return render(
        request,
        "student/dashboard.html",
        context,
    )
# api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('industries/', views.get_industries),
    path('industry/<str:industry>/<str:category>/', views.get_category),
    path('save_selection/', views.save_selection),
    path('focus-options/', views.get_focus_options),  # NEW ENDPOINT
]

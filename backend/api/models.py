# models.py
from django.db import models
from django.utils import timezone


class main_industry(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        db_table = 'main_industry'  # use existing table name

class industry_mapping(models.Model):
    industry_name = models.CharField(max_length=100, primary_key=True)
    table_name = models.CharField(max_length=100)

    class Meta:
        db_table = 'industry_mapping'

class user_selection(models.Model):
    focus = models.CharField(max_length=100)
    main_industry = models.CharField(max_length=100)
    subdomain = models.CharField(max_length=100)
    technologies = models.CharField(max_length=100)
    business_model = models.CharField(max_length=100)
    target_audience = models.CharField(max_length=100)
    market_segment = models.CharField(max_length=100)
    created_at = models.DateTimeField( default=timezone.now)

    class Meta:
        db_table = 'user_selection'

    
class IdeaLog(models.Model):
    focus = models.CharField(max_length=100)
    main_industry = models.CharField(max_length=100)
    subdomain = models.CharField(max_length=100)
    technologies = models.CharField(max_length=100)
    business_model = models.CharField(max_length=100)
    target_audience = models.CharField(max_length=100)
    market_segment = models.CharField(max_length=100)

    generated_ideas = models.TextField()  # Save raw text or JSON string of ideas
    selected_problem = models.TextField(blank=True, null=True)
    solution = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField( default=timezone.now)

    class Meta:
        db_table = 'idea_log'


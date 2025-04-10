# models.py
from django.db import models

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

    class Meta:
        db_table = 'user_selection'

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import industry_mapping, user_selection, main_industry
from django.db import connection


@api_view(['GET'])
def get_industries(request):
    industries = list(main_industry.objects.values_list('name', flat=True))
    return Response({"industries": industries})


@api_view(['GET'])
def get_category(request, industry, category):
    valid_categories = [
        "subdomain", "technologies", "business_model", 
        "target_audience", "market_segment"
    ]
    
    # Make category lowercase and validate
    category = category.lower()
    if category not in valid_categories:
        return Response(
            {"detail": f"Invalid category '{category}'"}, 
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        # Normalize industry name to lowercase for consistency
        mapping = industry_mapping.objects.get(industry_name__iexact=industry)
        table_name = mapping.table_name.lower()
    except industry_mapping.DoesNotExist:
        return Response(
            {"detail": f"No table found for industry '{industry}'"}, 
            status=status.HTTP_404_NOT_FOUND
        )

    try:
        with connection.cursor() as cursor:
            query = f"SELECT DISTINCT {category} FROM {table_name}"
            print("Executing query:", query)  # 🔍 Optional log
            cursor.execute(query)
            rows = [row[0] for row in cursor.fetchall() if row[0] is not None]
    except Exception as e:
        return Response(
            {"detail": f"Database error: {str(e)}"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

    if not rows:
        return Response(
            {"detail": f"No data found for {category} in {industry}"}, 
            status=status.HTTP_404_NOT_FOUND
        )

    return Response({category: rows})


@api_view(['GET'])
def get_focus_options(request):
    return Response({
        "focus_options": [
            'I am trying to solve a problem','I want to create a new product','I want to improve an existing service','I want to disrupt an industry'
        ]
    })


@api_view(['POST'])
def save_selection(request):
    required_fields = [
        "focus", "main_industry", "subdomain", "technologies",
        "business_model", "target_audience", "market_segment"
    ]

    for field in required_fields:
        if field not in request.data:
            return Response({"detail": f"Missing field: {field}"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user_selection.objects.create(**{field: request.data[field] for field in required_fields})
    except Exception as e:
        return Response({"detail": f"Error saving selection: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response({"message": "Selection saved successfully"})

from .models import Cocktail
from rest_framework import viewsets, permissions
from .serializers import CocktailSerializer


class CocktailsViewSet(viewsets.ModelViewSet):
    queryset = Cocktail.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CocktailSerializer

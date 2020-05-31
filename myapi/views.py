from rest_framework import viewsets

from .serializers import CocktailSerializer
from .serializers import CafeIngredientSerializer
from .serializers import IngredientSerializer
from .serializers import OrderSerializer
from .serializers import CafeSerializer
from .serializers import CocktailIngredientSerializer
from .serializers import MenuSerializer
from .serializers import OrderCocktailSerializer
from .models import Cocktail
from .models import CafeIngredient
from .models import Ingredient
from .models import Order
from .models import Cafe
from .models import Menu
from .models import CocktailIngredient
from .models import OrderCocktail
from rest_framework import viewsets, permissions

# Create your views here.


class CafeViewSet(viewsets.ModelViewSet):
    queryset = Cafe.objects.all().order_by('name')
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CafeSerializer


class CocktailViewSet(viewsets.ModelViewSet):
    queryset = Cocktail.objects.all().order_by('name')
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CocktailSerializer


class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all().order_by('name')
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = MenuSerializer


class CafeIngredientViewSet(viewsets.ModelViewSet):
    queryset = CafeIngredient.objects.all().order_by('quantity')
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CafeIngredientSerializer


class OrderCocktailViewSet(viewsets.ModelViewSet):
    queryset = OrderCocktail.objects.all().order_by('quantity')
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OrderCocktailSerializer


class CocktailIngredientViewSet(viewsets.ModelViewSet):
    queryset = CocktailIngredient.objects.all().order_by('amount_of_ingredient')
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CocktailIngredientSerializer


class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all().order_by('name')
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = IngredientSerializer


class OrderViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = OrderSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        return self.request.user.orders.all()

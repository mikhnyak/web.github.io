from rest_framework import serializers

from .models import Cocktail
from .models import CafeIngredient
from .models import Ingredient
from .models import Order
from .models import Cafe
from .models import CocktailIngredient
from .models import Menu


class CafeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cafe
        fields = '__all__'


class MenuSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'


class CafeIngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CafeIngredient
        fields = '__all__'


class CocktailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cocktail
        fields = '__all__'


class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'


class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class CocktailIngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CocktailIngredient
        fields = '__all__'

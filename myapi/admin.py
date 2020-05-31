from django.contrib import admin
from .models import Cocktail
from .models import CafeIngredient
from .models import Ingredient
from .models import Order
from .models import Cafe
from .models import CocktailIngredient
from .models import Menu

# Register your models here.


admin.site.register(Cocktail)
admin.site.register(CocktailIngredient)
admin.site.register(CafeIngredient)
admin.site.register(Ingredient)
admin.site.register(Order)
admin.site.register(Cafe)
admin.site.register(Menu)

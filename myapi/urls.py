from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'cafes', views.CafeViewSet)
router.register(r'cocktails', views.CocktailViewSet)
router.register(r'menu', views.MenuViewSet)
router.register(r'cafe_ingredient', views.CafeIngredientViewSet)
router.register(r'cocktail_ingredient', views.CocktailIngredientViewSet)
router.register(r'ingredients', views.IngredientViewSet)
router.register(r'orders', views.OrderViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

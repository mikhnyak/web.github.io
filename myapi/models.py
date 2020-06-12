from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from model_utils import Choices


class Ingredient(models.Model):
    name = models.CharField(max_length=60)
    quantity_mu = models.CharField(max_length=20)
    price_per_unit = models.FloatField(max_length=60)

    def __str__(self):
        return self.name


class CocktailIngredient(models.Model):
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    amount_of_ingredient = models.FloatField()

    def __str__(self):
        return "%s %s" % (self.ingredient, self.amount_of_ingredient)


class Cocktail(models.Model):
    name = models.CharField(max_length=60)
    ingredients = models.ManyToManyField(CocktailIngredient)
    price = models.FloatField(max_length=60)
    image = models.ImageField(null=True)
    volume = models.IntegerField()
    alcohol = models.BooleanField()
    custom = models.BooleanField(default=True)
    time = models.IntegerField()

    def __str__(self):
        return self.name


class CafeIngredient(models.Model):
    ingredient = models.OneToOneField(Ingredient, on_delete=models.CASCADE)
    quantity = models.CharField(max_length=40)

    def __str__(self):
        return "%s %s" % (self.ingredient, self.quantity)


class Cafe(models.Model):
    name = models.CharField(max_length=60)
    address = models.CharField(max_length=60)
    email = models.EmailField()
    phone_number = models.IntegerField()
    ingredient = models.ManyToManyField(CafeIngredient)
    cocktails = models.ManyToManyField(Cocktail)

    def __str__(self):
        return self.name


class Menu(models.Model):
    name = models.CharField(max_length=60)
    cocktails = models.ManyToManyField(Cocktail)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class OrderCocktail(models.Model):
    cocktail = models.ManyToManyField(Cocktail)
    quantity = models.CharField(max_length=40)

    def __str__(self):
        return "%s %s" % (self.cocktail, self.quantity)


class Order(models.Model):
    STATUS = Choices(
        ('pending', 'Purchase order'),
        ('closed', 'Closed'),
        ('waiting', 'Will be done in a few minutes'),
    )

    cafe = models.ForeignKey(Cafe, on_delete=models.CASCADE)
    price = models.FloatField(max_length=60)
    status = models.CharField(
        max_length=32,
        choices=STATUS,
        default=STATUS.closed,
    )
    cocktails = models.ManyToManyField(OrderCocktail)
    user = models.ForeignKey(
        User, related_name="orders", on_delete=models.CASCADE, null=True)
    date = models.DateTimeField(auto_now_add=True)

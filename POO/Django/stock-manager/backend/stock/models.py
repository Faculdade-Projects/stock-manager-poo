from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50 ,null=False, blank=False)

    def __str__(self):
        return self.name
    
class Product(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField()
    price = models.DecimalField(max_digits=10 ,decimal_places=2, null=False, blank=False)
    quantity = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
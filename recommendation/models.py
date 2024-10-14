from django.db import models
from django.contrib.auth.models import User

class Genre(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Item(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    genre = models.ManyToManyField(Genre)
    item_type = models.CharField(max_length=10, choices=[('movie', 'Movie'), ('book', 'Book')])

    def __str__(self):
        return self.title

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    rating = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'item')  # Ensures one rating per user-item pair

    def __str__(self):
        return f'{self.user.username} - {self.item.title} - {self.rating}'

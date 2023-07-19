from django.db import models

class User(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    birthday = models.DateField()
    email = models.EmailField()
    isSubscribed = models.BooleanField(default=False)

    def __str__(self):
        return self.firstName

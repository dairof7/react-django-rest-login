import uuid
from django.db import models

class Profile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    first_name = models.CharField(max_length=30, blank=False)
    last_name = models.CharField(max_length=30, blank=False)
    email = models.EmailField(max_length=30, blank=False, unique=True)
    city = models.CharField(max_length=30, blank=True)
    age = models.IntegerField(blank=False)
    status = models.BooleanField(default=True)
    phone = models.CharField(max_length=30, blank=True, null=True)
    create = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Method to return string representation of a model instance.

        Returns:
            [str]: teacher first name.
        """
        return self.first_name + ' ' + self.last_name
        
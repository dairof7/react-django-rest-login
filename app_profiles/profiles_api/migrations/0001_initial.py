# Generated by Django 3.1.2 on 2020-11-13 00:29

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=30, unique=True)),
                ('city', models.CharField(blank=True, max_length=30)),
                ('age', models.IntegerField()),
                ('status', models.BooleanField(default=True)),
                ('phone', models.CharField(blank=True, max_length=30, null=True)),
                ('create', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]

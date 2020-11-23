from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    """Profile model serializer for all fields"""
    class Meta:
        """Meta information about Profile model"""
        model = Profile
        fields = '__all__'
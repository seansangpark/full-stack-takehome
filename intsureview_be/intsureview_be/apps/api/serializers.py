from rest_framework import serializers
from intsureview_be.apps.api.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


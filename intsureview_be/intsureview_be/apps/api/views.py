from rest_framework import viewsets
from intsureview_be.apps.api.models import User
from intsureview_be.apps.api.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

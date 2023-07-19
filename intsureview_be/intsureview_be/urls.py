"""intsureview_be URL Configuration"""

from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from intsureview_be.apps.api.views import UserViewSet

urlpatterns = [
    path("admin/", admin.site.urls),
]

router = routers.DefaultRouter()
router.register(r"users", UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]

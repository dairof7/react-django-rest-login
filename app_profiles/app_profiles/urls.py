
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from profiles_api import views
from rest_framework import routers

router = routers.DefaultRouter()
# Register all viewsets
router.register(r'profiles', views.ProfilesView, basename='profile')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', views.HelloView.as_view(), name='hello'),
    path('api/', include(router.urls))
]


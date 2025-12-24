from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainSerializer

class LoginView(TokenObtainPairView):
    serializer_class = CustomTokenObtainSerializer
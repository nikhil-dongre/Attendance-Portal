
from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView
urlpatterns = [
    path('',views.home,name='user'),
    path('login/',TokenObtainPairView.as_view(),name='login')

]
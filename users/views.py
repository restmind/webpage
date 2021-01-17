from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .serializers import userProfileSerializer
from .permissions import IsOwnerProfileOrReadOnly
from rest_framework.permissions import IsAuthenticated
from .models import User
from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView,)


@login_required()
def profile(request):
    return render(request, 'profile.html')

class UserProfileListCreateView(ListCreateAPIView):
    queryset=User.objects.all()
    serializer_class=userProfileSerializer
    permission_classes=[IsAuthenticated]

    def perform_create(self, serializer):
        user=self.request.user
        serializer.save(user=user)


class userProfileDetailView(RetrieveUpdateDestroyAPIView):
    queryset=User.objects.all()
    serializer_class=userProfileSerializer
    permission_classes=[IsOwnerProfileOrReadOnly,IsAuthenticated]
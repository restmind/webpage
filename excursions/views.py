from datetime import datetime
from django.views.generic import (
    ListView,
    DetailView,
    CreateView
)
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from rest_framework.decorators import api_view, permission_classes
from .models import Excursion
from rest_framework.views import APIView
from django.http.response import JsonResponse
from rest_framework.permissions import IsAuthenticated
from .serializers import ExcursionSerializer


def superuser_or_agency(user):
    return user.is_superuser or user.groups.filter(name='agencies').exists()


class ExcursionApiView(APIView):
    #permission_classes = (IsAuthenticated,)

    @staticmethod
    @api_view(['GET'])
    @permission_classes([IsAuthenticated,])
    def excursion_list(request):
        if request.method == 'GET':
            excursions = Excursion.objects.all()

            title = request.GET.get('title', None)
            if title is not None:
                excursions = excursions.filter(title__icontains=title)

            excursions_serializer = ExcursionSerializer(excursions, many=True)
            return JsonResponse(excursions_serializer.data, safe=False)


class ExcursionListView(ListView):
    model = Excursion
    template_name = 'excursions/excursions.html'
    context_object_name = 'excursions'
    ordering = ['-created']


class ExcursionDetailView(DetailView):
    model = Excursion


class ExcursionCreateView(LoginRequiredMixin, UserPassesTestMixin, CreateView):
    model = Excursion
    fields = ['name', 'places', 'price', 'duration', 'comment']
    success_url = '/'

    def test_func(self):
        return superuser_or_agency(self.request.user)

    def get_login_url(self):
        if not self.request.user.is_authenticated:
            return super(ExcursionCreateView, self).get_login_url()
        else:
            return '/accounts/login/'

    def form_valid(self, form):
        form.instance.agent = self.request.user
        form.instance.created = datetime.now()
        return super(ExcursionCreateView, self).form_valid(form)

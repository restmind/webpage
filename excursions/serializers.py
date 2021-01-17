from rest_framework import serializers
from excursions.models import Excursion


class ExcursionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Excursion
        fields = ('id',
                  'name',
                  'places',
                  'price',
                  'duration',
                  'comment')

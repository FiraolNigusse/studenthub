from rest_framework import serializers
from .models import Resume


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = ('id', 'title', 'data', 'template', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')

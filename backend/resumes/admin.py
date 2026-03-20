from django.contrib import admin
from .models import Resume


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'user', 'template', 'created_at', 'updated_at')
    list_filter = ('template', 'created_at')
    search_fields = ('title', 'user__email')
    readonly_fields = ('created_at', 'updated_at')
    ordering = ('-updated_at',)

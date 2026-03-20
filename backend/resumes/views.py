from rest_framework import generics, permissions
from .models import Resume
from .serializers import ResumeSerializer


class ResumeListCreateView(generics.ListCreateAPIView):
    """
    GET  /api/resumes/      - List all resumes for the authenticated user
    POST /api/resumes/      - Create a new resume for the authenticated user
    """
    serializer_class = ResumeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Resume.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ResumeDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET    /api/resumes/:id/  - Retrieve a specific resume
    PUT    /api/resumes/:id/  - Full update a resume
    PATCH  /api/resumes/:id/  - Partial update a resume
    DELETE /api/resumes/:id/  - Delete a resume
    """
    serializer_class = ResumeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Resume.objects.filter(user=self.request.user)

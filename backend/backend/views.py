from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

@api_view(['GET'])
@permission_classes([AllowAny])
def health_check(request):
    """
    Simple API health check endpoint that returns 'ok'.
    Accessible without authentication.
    """
    return Response({"status": "ok"})

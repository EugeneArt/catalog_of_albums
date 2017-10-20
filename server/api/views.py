from rest_framework import generics
from .serializers import AlbumSerializer
from .models import Album

class AlbumCreateView(generics.ListCreateAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

    def perform_create(self, serializer):
        serializer.save()

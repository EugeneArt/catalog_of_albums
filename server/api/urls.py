from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from .views import AlbumCreateView, AlbumDetailsView

urlpatterns = {
    url(r'^albums/$', AlbumCreateView.as_view(), name="album_create"),
    url(r'^albums/(?P<pk>[0-9]+)/$', AlbumDetailsView.as_view(), name="album_details"),
}

urlpatterns = format_suffix_patterns(urlpatterns)
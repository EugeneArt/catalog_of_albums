from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from .views import AlbumCreateView

urlpatterns = {
    url(r'^albumlist/$', AlbumCreateView.as_view(), name="create_album"),
}

urlpatterns = format_suffix_patterns(urlpatterns)
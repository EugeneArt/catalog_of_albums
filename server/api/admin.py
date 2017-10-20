from django.contrib import admin
from .models import Album, Track

class TrackInline(admin.TabularInline):
    model = Track
    extra = 0

@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    list_display = ['album_name', 'year']
    inlines = [TrackInline]

@admin.register(Track)
class TrackAdmin(admin.ModelAdmin):
    list_display = ['track_name', 'singer', 'album']
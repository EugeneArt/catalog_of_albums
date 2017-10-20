from django.test import TestCase
from .models import Album, Track

class ModelAlbumTestCase(TestCase):

    def setUp(self):
        self.album_name = "Blackout"
        self.year = "1982"
        self.album = Album(album_name=self.album_name, year=self.year)

    def test_model_can_create_a_album(self):
        old_count = Album.objects.count()
        self.album.save()
        new_count = Album.objects.count()
        self.assertNotEqual(old_count, new_count)

class ModelTrackTestCase(TestCase):

    def setUp(self):
        self.track_name = "You Give Me All I Need"
        self.singer = "Scorpions"
        self.duration = "03:37"
        self.album = Album.objects.create(album_name='Blackout', year='1982')
        self.track = Track(track_name=self.track_name, singer=self.singer, duration=self.duration, album=self.album)

    def test_model_can_create_a_track(self):
        old_count = Track.objects.count()
        self.track.save()
        new_count = Track.objects.count()
        self.assertNotEqual(old_count, new_count)
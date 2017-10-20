from django.test import TestCase
from .models import Album, Track
from rest_framework.test import APIClient
from rest_framework import status
from django.core.urlresolvers import reverse

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

class ViewAlbumTestCase(TestCase):

    def setUp(self):
        self.client = APIClient()
        self.album = {
            'album_name': 'Crazy Worldr',
            'year': '1990'
        }
        self.response = self.client.post(
            reverse('album_create'),
            self.album,
            format="json")

    def test_api_can_create_a_album(self):
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    def test_api_can_get_a_album(self):
        response = self.client.get(
            reverse('album_details', kwargs={'pk': self.album.id}),
            format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, self.album)

    def test_api_can_update_album(self):
        change_album = {
            'album_name': 'Acoustica',
            'year': '2001'
        }
        res = self.client.put(
            reverse('album_details', kwargs={'pk': self.album.id}),
            change_album, format='json'
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_api_can_delete_album(self):
        response = self.client.delete(
            reverse('album_details', kwargs={'pk': self.album.id}),
            format='json',
            follow=True)

        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)
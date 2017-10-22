from django.db import models

class Album(models.Model):
    album_name = models.CharField(max_length=200)
    year = models.CharField(max_length=4)

    def __str__(self):
        return "{}".format(self.album_name)

class Track(models.Model):
    track_name = models.CharField(max_length=200)
    singer = models.CharField(max_length=200)
    duration = models.CharField(max_length=8)
    album = models.ForeignKey(Album, related_name='tracks', blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.track_name)

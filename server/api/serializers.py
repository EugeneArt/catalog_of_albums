from rest_framework import serializers
from .models import Album, Track

class TrackSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Track
        fields = ('__all__')

class AlbumSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True)

    class Meta:
        model = Album
        fields = ('id', 'album_name', 'year', 'tracks')

    def create(self, validated_data):
        tracks_data = validated_data.pop('tracks')
        album = Album.objects.create(**validated_data)
        for track_data in tracks_data:
            Track.objects.create(album=album.id, **track_data)
        return album

    def update(self, instance, validated_data):
        tracks_data = validated_data.pop('tracks')
        tracks = (instance.tracks).all()
        tracks = list(tracks)

        instance.album_name = validated_data.get('album_name',instance.album_name)
        instance.year = validated_data.get('year', instance.year)
        instance.save()

        for track_data in tracks_data:
            if(track_data.get('id')):
                for track in tracks:
                    if(track.id == track_data.get('id')):
                        track.track_name = track_data.get('track_name', track.track_name)
                        track.singer = track_data.get('singer', track.singer)
                        track.duration = track_data.get('duration', track.duration)
                        track.album = track_data.get('album', track.album)
                        track.save()
            else:
                Track.objects.create(**track_data)

        return instance

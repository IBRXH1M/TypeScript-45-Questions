// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function makeAlbum(artist, title, numTracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (numTracks) {
        album.numTracks = numTracks;
    }
    return album;
}
var album1 = makeAlbum("Artist1", "Album1");
var album2 = makeAlbum("Artist2", "Album2", 10);
var album3 = makeAlbum("Artist3", "Album3", 15);
console.log(album1);
console.log(album2);
console.log(album3);

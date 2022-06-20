let wallpaperButton = document.getElementById("setWallpaper");

wallpaperButton.addEventListener("click", async () => {
  chrome.wallpaper.setWallpaper(
      {
        'url': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Late_model_Ford_Model_T.jpg',
        'layout': 'CENTER',
        'filename': 'test_wallpaper'
      },
      function() {}
      );
});

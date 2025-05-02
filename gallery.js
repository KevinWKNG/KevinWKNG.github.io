const images = [
    "Photo1.JPEG",
    "Photo2.JPEG",
    "Photo3.JPEG",
    "Photo4.JPEG",
    "Photo5.JPEG",
    "Photo6.JPEG",
    "Photo7.JPEG",
    "Photo8.JPEG",
    "Photo9.JPEG",
    "Photo10.JPEG"
  ];

  let currentIndex = 0;

  const mainPhoto = document.getElementById("main-photo");
  const filmStrip = document.getElementById("film-strip");

  images.forEach((img, index) => {
    const thumb = document.createElement("img");
    thumb.src = `images/${img}`;
    thumb.alt = `Thumbnail ${index + 1}`;
    thumb.onclick = () => showPhoto(index);
    thumb.classList.add("thumbnail");
    if (index === 0) thumb.classList.add("active-thumb");
    filmStrip.appendChild(thumb);
  });

  function showPhoto(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    currentIndex = index;
    mainPhoto.src = `images/${images[currentIndex]}`;
    document.querySelectorAll(".thumbnail").forEach((t, i) => {
      t.classList.toggle("active-thumb", i === currentIndex);
    });
  }

  function navigate(direction) {
    showPhoto(currentIndex + direction);
  }

document.addEventListener('DOMContentLoaded', () => {
  const popupMap = [
    { btn: 'ArtikelBtn', popup: 'ArtikelPopup', closeBtn: 'closeArtikelPopup', closeButton: 'closeArtikelBtn' },
    { btn: 'JurnalBtn', popup: 'JurnalPopup', closeBtn: 'closeJurnalPopup', closeButton: 'closeJurnalBtn' },
    { btn: 'MakalahBtn', popup: 'MakalahPopup', closeBtn: 'closeMakalahPopup', closeButton: 'closeMakalahBtn' },
    { btn: 'PPTBtn', popup: 'PPTPopup', closeBtn: 'closePPTPopup', closeButton: 'closePPTBtn' },
    { btn: 'EditingvideoBtn', popup: 'EditingvideoPopup', closeBtn: 'closeEditingvideoPopup', closeButton: 'closeEditingvideoBtn' },
    { btn: 'DesaingrafisBtn', popup: 'DesaingrafisPopup', closeBtn: 'closeDesaingrafisPopup', closeButton: 'closeDesaingrafisBtn' },
  ];

  // Fungsi buka dan tutup popup
  function openPopup(popup) {
    popup.style.display = 'flex';
  }

  function closePopup(popup) {
    popup.style.display = 'none';
  }

  // Pasang event listener untuk semua mapping tombol
  popupMap.forEach(({ btn, popup, closeBtn, closeButton }) => {
    const button = document.getElementById(btn);
    const popupEl = document.getElementById(popup);
    const spanClose = document.getElementById(closeBtn);
    const btnClose = document.getElementById(closeButton);

    if (button && popupEl) {
      button.addEventListener('click', () => openPopup(popupEl));
    }

    if (spanClose) {
      spanClose.addEventListener('click', () => closePopup(popupEl));
    }

    if (btnClose) {
      btnClose.addEventListener('click', () => closePopup(popupEl));
    }

    // Tutup saat klik area luar
    window.addEventListener('click', (event) => {
      if (event.target === popupEl) {
        closePopup(popupEl);
      }
    });
  });
});

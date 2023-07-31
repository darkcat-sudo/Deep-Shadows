function goBack() {
    if (window.history.length > 1) {
      window.history.pushState({}, '', document.referrer);
      window.location.replace(document.referrer);
    }
  }
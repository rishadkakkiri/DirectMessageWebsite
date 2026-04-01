/**
 * Shared config for this static site.
 * Set commonPlayStoreAppUrl to your live Google Play listing when ready
 * (package id in the URL path).
 */
var commonPlayStoreAppUrl =
  "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_ID";

(function ApplyPlayStoreLinksWhenReady() {
  function runApplyPlayStoreLinks() {
    var placeholderPattern = /YOUR_PACKAGE_ID|REPLACE/i;
    var resolvedUrl =
      typeof commonPlayStoreAppUrl !== "undefined" ? commonPlayStoreAppUrl : "";
    var useRealLink = resolvedUrl && !placeholderPattern.test(resolvedUrl);
    var playStoreAnchors = document.querySelectorAll("a[data-play-store]");
    for (var index = 0; index < playStoreAnchors.length; index++) {
      var anchorElement = playStoreAnchors[index];
      if (useRealLink) {
        anchorElement.setAttribute("href", resolvedUrl);
        anchorElement.setAttribute("target", "_blank");
        anchorElement.setAttribute("rel", "noopener noreferrer");
      } else {
        anchorElement.setAttribute("href", "#download");
        anchorElement.removeAttribute("target");
        anchorElement.removeAttribute("rel");
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runApplyPlayStoreLinks);
  } else {
    runApplyPlayStoreLinks();
  }
})();

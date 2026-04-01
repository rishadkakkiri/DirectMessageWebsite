/**
 * Shared store URLs for this static site.
 * Android: data-play-store | iOS: data-app-store
 */
var commonPlayStoreAppUrl =
  "https://play.google.com/store/apps/details?id=com.washeyinfo.directmessage";

var commonAppStoreAppUrl = "https://apps.apple.com/app/id6761365894";

(function ApplyStoreLinksWhenReady() {
  function setExternalLink(anchorElement, resolvedUrl) {
    if (resolvedUrl) {
      anchorElement.setAttribute("href", resolvedUrl);
      anchorElement.setAttribute("target", "_blank");
      anchorElement.setAttribute("rel", "noopener noreferrer");
    } else {
      anchorElement.setAttribute("href", "#download");
      anchorElement.removeAttribute("target");
      anchorElement.removeAttribute("rel");
    }
  }

  function runApplyStoreLinks() {
    var playUrl =
      typeof commonPlayStoreAppUrl !== "undefined" ? commonPlayStoreAppUrl : "";
    var appStoreUrl =
      typeof commonAppStoreAppUrl !== "undefined" ? commonAppStoreAppUrl : "";

    var playAnchors = document.querySelectorAll("a[data-play-store]");
    for (var playIndex = 0; playIndex < playAnchors.length; playIndex++) {
      setExternalLink(playAnchors[playIndex], playUrl);
    }

    var appStoreAnchors = document.querySelectorAll("a[data-app-store]");
    for (var appIndex = 0; appIndex < appStoreAnchors.length; appIndex++) {
      setExternalLink(appStoreAnchors[appIndex], appStoreUrl);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runApplyStoreLinks);
  } else {
    runApplyStoreLinks();
  }
})();

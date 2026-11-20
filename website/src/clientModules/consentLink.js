import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// The consent script (shared/ConsentAnalytics) opens the preferences on a click
// of the `data-cc` links present when it starts, and prevents the default.
// Docusaurus changes pages without reloading, so a footer drawn after the script
// started holds a link the script never saw. This listener opens the preferences
// itself for such a link, unless the script already handled the click. Without
// the script, the link does nothing.
if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || !(event.target instanceof Element)) return;
    const link = event.target.closest('a[data-cc="show-preferencesModal"]');
    if (!link) return;
    event.preventDefault();
    window.paAnalytics?.showPreferences?.();
  });
}

let installPrompt = null;
const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
	event.preventDefault();
	installPrompt = event;
	installButton.removeAttribute("hidden");
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});

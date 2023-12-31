let installPrompt = null;
const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
	event.preventDefault();
	installPrompt = event;
	installButton.removeAttribute("hidden");
});

// Click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
	if (!installPrompt) {
		return;
	}

	const result = await installPrompt.prompt();
	console.log(`Install prompt was: ${result.outcome}!`);
	installPrompt = null;
	installButton.setAttribute("hidden", "");
});

// Handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
	console.log("Thank you for installing my Text Editor app!");
});

document.addEventListener("DOMContentLoaded", async () => {
  const ipv4Span = document.getElementById("ipv4");
  const ipv6Span = document.getElementById("ipv6");

  // Fetch the IPv4 address
  try {
    const ipv4Response = await fetch("https://api.ipify.org?format=json");
    const ipv4Data = await ipv4Response.json();
    ipv4Span.textContent = ipv4Data.ip;
  } catch (error) {
    ipv4Span.textContent = "Unable to fetch IPv4 address";
    console.error("Error fetching IPv4 address:", error);
  }

  // Fetch the IPv6 address
  try {
    const ipv6Response = await fetch("https://api64.ipify.org?format=json");
    const ipv6Data = await ipv6Response.json();
    ipv6Span.textContent = ipv6Data.ip;
  } catch (error) {
    ipv6Span.textContent = "Unable to fetch IPv6 address";
    console.error("Error fetching IPv6 address:", error);
  }
});
// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied to clipboard");
    })
    .catch((err) => {
      alert("Failed to copy text: ", err);
    });
}

// Base64-encoded URLs (example: https://example.com)
const encodedLinks = [
  "aHR0cHM6Ly9leGFtcGxlLmNvbQ==",  // https://example.com
  "aHR0cHM6Ly9leGFtcGxlMi5jb20=", // https://example2.com
  "aHR0cHM6Ly95b3V0dWJlLmNvbS9Abm9kZQ==" // https://youtube.com/@node
];

function decodeBase64(str) {
  try {
    return atob(str);
  } catch (e) {
    return "#";
  }
}

function loadLinks() {
  const container = document.getElementById("link-container");
  container.innerHTML = ""; // Clear loading text

  encodedLinks.forEach((encoded, i) => {
    const btn = document.createElement("button");
    btn.textContent = `Link ${i + 1}`;
    btn.className = "link-button";
    btn.onclick = () => {
      const decoded = decodeBase64(encoded);
      window.open(decoded, "_blank");
    };
    container.appendChild(btn);
  });
}

window.onload = loadLinks;


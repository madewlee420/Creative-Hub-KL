function setProfile(profile) {
  const body = document.body;
  const text = document.getElementById("profileDescription");
  const image = document.getElementById("heroImage");
  const caption = document.getElementById("heroCaption");

  const data = {
    brand: ["images/hero-brand.jpg", "Portfolio view for Brand Designers", "Brand designers see portfolio content focused on colour palettes, typography, logo systems, and visual consistency."],
    motion: ["images/hero-motion.jpg", "Portfolio view for Motion Graphics Artists", "Motion graphics artists see portfolio content focused on animation flow, visual rhythm, video campaigns, and digital storytelling."],
    ux: ["images/hero-ux.jpg", "Portfolio view for UX Researchers", "UX researchers see portfolio content focused on user journeys, wireframes, testing results, and usability improvements."]
  };

  body.classList.remove("s2-profile-brand", "s2-profile-motion", "s2-profile-ux");
  body.classList.add("s2-profile-" + profile);

  if (image) image.src = data[profile][0];
  if (caption) caption.textContent = data[profile][1];
  if (text) text.textContent = data[profile][2];
}

function changeProfile(profile) {
  const display = document.getElementById("profileDisplay");

  if (!display) return;

  if (profile === "brand") {
    display.innerHTML = `
      <h3>Brand Designer</h3>
      <p>
        Discover branding workspaces, colour palette inspiration,
        typography showcases and creative campaign discussions.
      </p>
    `;
  }

  else if (profile === "motion") {
    display.innerHTML = `
      <h3>Motion Graphics Artist</h3>
      <p>
        Explore animation-friendly editing stations,
        motion design showcases and video production spaces.
      </p>
    `;
  }

  else if (profile === "ux") {
    display.innerHTML = `
      <h3>UX Researcher</h3>
      <p>
        Access collaborative meeting rooms, user testing environments
        and clean modern workspaces for digital product research.
      </p>
    `;
  }
}
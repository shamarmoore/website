// Page motion and the storm-radius explorer. Everything still reads with this file missing.

document.documentElement.classList.add("js");
requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.add("loaded")));

// Section entrances: each part rises in turn as its section comes into view.
const groups = document.querySelectorAll("[data-rise]");
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.querySelectorAll(".rise").forEach((el, i) => {
      el.style.setProperty("--d", `${Math.min(i, 6) * 80}ms`);
      el.classList.add("in");
    });
    io.unobserve(entry.target);
  }
}, { rootMargin: "0px 0px -12% 0px" });
groups.forEach((g) => {
  g.querySelectorAll(":scope > *, :scope .grid > *").forEach((el) => {
    if (!el.closest(".hero")) el.classList.add("rise");
  });
  io.observe(g);
});

// The ring: how many storms came within a given distance of Jamaica's coast.
const ring = document.querySelector("#ring");
if (ring) {
  const stats = JSON.parse(document.querySelector("#ring-data").textContent);
  const input = ring.querySelector("input");
  const out = (name) => ring.querySelector(`[data-out="${name}"]`);
  const zones = ring.querySelectorAll(".zone");
  const show = (i) => {
    const s = stats[i];
    out("r").textContent = s.r;
    out("n").textContent = s.n;
    out("hu").textContent = s.hu;
    out("maj").textContent = s.maj;
    out("top").textContent = s.top.join(", ");
    input.setAttribute("aria-valuetext", `${s.r} nautical miles: ${s.n} storms`);
    zones.forEach((z) => z.classList.toggle("on", z.dataset.r === String(s.r)));
  };
  input.addEventListener("input", () => show(Number(input.value)));
  show(Number(input.value));
}

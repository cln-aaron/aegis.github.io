(function () {
  "use strict";

  var nav = document.getElementById("nav");
  var onScroll = function () {
    nav.classList.toggle("scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // count-up numbers
  function countUp(el) {
    var target = parseFloat(el.dataset.count);
    var suffix = el.dataset.suffix || "";
    if (reduce) { el.textContent = target + suffix; return; }
    var start = performance.now(), dur = 1100;
    function step(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // reveal + triggers
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        e.target.querySelectorAll("[data-count]").forEach(countUp);
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
  }

  // hero KPIs
  function tick(id, to) {
    var el = document.getElementById(id);
    if (!el) return;
    if (reduce) { el.textContent = to.toLocaleString(); return; }
    var s = performance.now();
    (function r(n) {
      var p = Math.min((n - s) / 1400, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString();
      if (p < 1) requestAnimationFrame(r);
    })(s);
  }
  setTimeout(function () { tick("hModels", 412); tick("hAgents", 1284); tick("hThreats", 37); }, 400);

  // hero live feed
  var feed = document.getElementById("hFeed");
  if (feed) {
    var events = [
      ["ok", "agent svc-rag-07 verified · scoped token issued"],
      ["warn", "shadow MCP server discovered · notion-bridge"],
      ["bad", "prompt injection blocked · ticket #88213"],
      ["ok", "red-team run rt-0517 · 206 attacks · 1 finding"],
      ["ok", "model llama-fraud re-scanned · no new CVEs"],
      ["warn", "system-prompt drift detected · checkout-bot"],
      ["bad", "credential reuse blocked · agent identity"],
      ["ok", "incident #4471 contained · 1-click rollback"]
    ];
    var idx = 0;
    function clock() {
      var d = new Date();
      return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
    }
    function emit() {
      var ev = events[idx % events.length]; idx++;
      var row = document.createElement("div");
      row.innerHTML = '<span class="t">' + clock() + '</span><span class="' + ev[0] + '">' + ev[1] + "</span>";
      feed.appendChild(row);
      while (feed.children.length > 4) feed.removeChild(feed.firstChild);
    }
    emit(); emit(); emit();
    if (!reduce) setInterval(emit, 2600);
  }

  // product tabs
  var tabWrap = document.getElementById("prodTabs");
  if (tabWrap) {
    var tabs = tabWrap.querySelectorAll(".tab");
    var panes = document.querySelectorAll(".shot-pane");
    tabs.forEach(function (t) {
      t.addEventListener("click", function () {
        tabs.forEach(function (x) { x.classList.remove("active"); });
        panes.forEach(function (p) { p.classList.remove("active"); });
        t.classList.add("active");
        var pane = document.querySelector('[data-pane="' + t.dataset.tab + '"]');
        if (pane) pane.classList.add("active");
      });
    });
  }
})();

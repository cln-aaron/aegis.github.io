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

  // theme toggle
  var themeTg = document.getElementById("themeTg");
  if (themeTg) {
    themeTg.addEventListener("click", function () {
      var light = document.documentElement.dataset.theme === "light";
      var next = light ? "" : "light";
      if (next) document.documentElement.dataset.theme = next;
      else document.documentElement.removeAttribute("data-theme");
      try { localStorage.setItem("aegis_theme", next); } catch (e) {}
    });
  }

  // product tour — auto-playing, video-style
  var tabWrap = document.getElementById("prodTabs");
  if (tabWrap) {
    var tabs = Array.prototype.slice.call(tabWrap.querySelectorAll(".tab"));
    var panes = document.querySelectorAll(".shot-pane");
    var tour = document.getElementById("tour");
    var tourBtn = document.getElementById("tourBtn");
    var tourCap = document.getElementById("tourCap");
    var tourBar = document.getElementById("tourBar");
    var tourState = document.getElementById("tourState");
    var DUR = 5200;
    var caps = {
      overview: "A single posture view across all eight layers — assets, incidents, red-team coverage and shadow AI, live.",
      killchain: "Four low-signal events become one critical incident. Single-tool stacks never connect them.",
      redteam: "Continuous red team runs inside the data plane — every finding opens an incident in the same console.",
      assets: "Continuous discovery of every model, agent and MCP server — sanctioned or shadow."
    };
    var i = 0, timer = null, playing = false;

    function bar0() {
      if (!tourBar) return;
      tourBar.style.transition = "none";
      tourBar.style.width = "0%";
      void tourBar.offsetWidth;
    }
    function barRun() {
      if (!tourBar) return;
      tourBar.style.transition = "width " + DUR + "ms linear";
      tourBar.style.width = "100%";
    }
    function barFreeze() {
      if (!tourBar) return;
      var w = getComputedStyle(tourBar).width;
      tourBar.style.transition = "none";
      tourBar.style.width = w;
    }
    function select(idx, run) {
      i = (idx + tabs.length) % tabs.length;
      var key = tabs[i].dataset.tab;
      tabs.forEach(function (x) { x.classList.remove("active"); });
      panes.forEach(function (p) { p.classList.remove("active"); });
      tabs[i].classList.add("active");
      var pane = document.querySelector('[data-pane="' + key + '"]');
      if (pane) pane.classList.add("active");
      if (tourCap) tourCap.textContent = caps[key] || "";
      bar0();
      if (run) requestAnimationFrame(barRun);
    }
    function schedule() {
      clearTimeout(timer);
      if (!playing) return;
      timer = setTimeout(function () { select(i + 1, true); schedule(); }, DUR);
    }
    function play() {
      if (reduce) return;
      playing = true;
      tour.classList.remove("paused");
      if (tourState) tourState.textContent = "Pause tour";
      requestAnimationFrame(barRun);
      schedule();
    }
    function pause() {
      playing = false;
      clearTimeout(timer);
      barFreeze();
      tour.classList.add("paused");
      if (tourState) tourState.textContent = "Play tour";
    }

    tabs.forEach(function (t, idx) {
      t.addEventListener("click", function () { pause(); select(idx); });
    });
    if (tourBtn) tourBtn.addEventListener("click", function () { playing ? pause() : play(); });

    // start the tour only when it scrolls into view; pause when off-screen
    if ("IntersectionObserver" in window && !reduce) {
      var tObs = new IntersectionObserver(function (en) {
        en.forEach(function (e) {
          if (e.isIntersecting && !tour.dataset.started) { tour.dataset.started = "1"; play(); }
          else if (!e.isIntersecting && playing) { pause(); }
        });
      }, { threshold: 0.3 });
      tObs.observe(document.querySelector(".shot"));
    } else {
      select(0);
      pause();
    }
  }
})();

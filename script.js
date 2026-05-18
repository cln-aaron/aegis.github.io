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

  // product tour: auto-playing, video-style
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
      overview: "A single posture view across all eight layers: assets, incidents, red-team coverage and shadow AI, live.",
      killchain: "Four low-signal events become one critical incident. Single-tool stacks never connect them.",
      redteam: "Continuous red team runs inside the data plane, and every finding opens an incident in the same console.",
      agentic: "A full agentic kill chain against your real agents: goal, memory, tools and the agents they trust.",
      assets: "Continuous discovery of every model, agent and MCP server, sanctioned or shadow."
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

  // demo request form (Formspree)
  var demoForm = document.getElementById("demoForm");
  if (demoForm) {
    var dfMsg = document.getElementById("dfMsg");
    var zh = function () { return document.documentElement.lang === "zh-Hant"; };
    demoForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (demoForm.querySelector('[name="_gotcha"]').value) return; // bot
      var action = demoForm.getAttribute("action");
      dfMsg.className = "df-msg";
      if (action.indexOf("REPLACE_WITH_FORM_ID") > -1) {
        dfMsg.className = "df-msg err";
        dfMsg.textContent = zh()
          ? "表單尚未設定。請來信 hello@hesedemet.asia。"
          : "Form not yet configured. Please email hello@hesedemet.asia.";
        return;
      }
      var btn = demoForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = zh() ? "送出中…" : "Sending…";
      fetch(action, {
        method: "POST",
        body: new FormData(demoForm),
        headers: { Accept: "application/json" }
      }).then(function (r) {
        if (r.ok) {
          demoForm.classList.add("sent");
          dfMsg.className = "df-msg ok";
          dfMsg.textContent = zh()
            ? "已收到,謝謝。我們會在一個工作日內與你聯絡。"
            : "Got it, thank you. We'll be in touch within one business day.";
        } else {
          throw new Error("bad response");
        }
      }).catch(function () {
        btn.disabled = false;
        btn.textContent = zh() ? "預約展示" : "Request a demo";
        dfMsg.className = "df-msg err";
        dfMsg.textContent = zh()
          ? "送出失敗。請稍後再試,或來信 hello@hesedemet.asia。"
          : "Couldn't send. Please try again, or email hello@hesedemet.asia.";
      });
    });
  }

  // expandable platform layers
  var layers = document.querySelectorAll(".layer");
  layers.forEach(function (l) {
    if (!l.querySelector(".layer-detail")) return;
    l.setAttribute("tabindex", "0");
    l.setAttribute("role", "button");
    l.setAttribute("aria-expanded", "false");
    function toggle() {
      var willOpen = !l.classList.contains("open");
      layers.forEach(function (o) {
        if (o !== l) { o.classList.remove("open"); o.setAttribute("aria-expanded", "false"); }
      });
      l.classList.toggle("open", willOpen);
      l.setAttribute("aria-expanded", willOpen ? "true" : "false");
    }
    l.addEventListener("click", toggle);
    l.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });

  // agentic attack deep-dive explorer
  var sg = document.getElementById("agtScopeGrid");
  var dEl = document.getElementById("agtDetail");
  if (sg && dEl) {
    var sis = sg.querySelectorAll(".scope-i");
    var STAT = ["#1","97%","Days","80%","After sign-off","92%","0","5%","Unbounded","RCE","Hidden","$670K"];
    var LBL = {
      "en": ["The attack", "Why it is dangerous", "With AEGIS"],
      "zh-Hant": ["攻擊手法", "為何危險", "有了 AEGIS"],
      "zh-Hans": ["攻击手法", "为何危险", "有了 AEGIS"],
      "ko": ["공격 방식", "왜 위험한가", "AEGIS와 함께"]
    };
    var D = {
      "en": [
        ["OWASP LLM Top 10 risk","Malicious instructions hide inside content the agent reads and quietly become its new goal.","The agent acts with its own access, so a poisoned page or ticket behaves like a trusted insider.","On the map from the first scan, caught before it reaches a tool and kept caught."],
        ["of AI-breached orgs lacked access control · IBM 2025","The agent is steered into calling tools, and chaining them, far beyond what its task needs.","One over-broad tool turns a small mistake into transfers, deletes or data dumps.","Over-reach is surfaced and closed before it ever ships."],
        ["dwell time before it fires","A false fact is written into long-term memory and waits for a later, innocent prompt to trigger it.","Last week's quiet injection becomes this week's breach, with nothing in the logs to link them.","Cross-session poisoning is surfaced and contained, not found after the damage."],
        ["of the Fortune 500 run active agents · Microsoft 2026","A forged message impersonates a trusted peer agent and the orchestration runs the attacker's plan.","Agents trust each other more than they trust users, so one spoof moves through all of them.","Agent-to-agent trust is mapped and abuse is caught across the whole graph."],
        ["when the swap lands","A tool that passed review later changes its description or behaviour to something hostile.","You vetted it once; it betrays you on the call that matters.","Tool integrity is re-checked continuously, so a rug-pull cannot stay silent."],
        ["lack full visibility into AI identities · 2026","A low-privilege agent persuades a high-privilege one to perform the damaging action for it.","The blast radius is the powerful agent's, while the blame points at the wrong place.","Every non-human identity is tracked, so the real actor is always provable."],
        ["alerts a single rule would raise","Every step is individually allowed; only the sequence, together, removes the data.","No single tool sees a violation, so rule-based defences never fire.","Correlated across the whole loop, so the sequence is caught even when each step is legal."],
        ["of CISOs sure they could contain an agent · 2026","Approval fatigue and deliberately vague prompts push a human to wave the dangerous step through.","Your last line of defence becomes a tired person clicking approve.","Bypass pressure is measured and shown, so the human control is real, not assumed."],
        ["spend with no ceiling","The agent is trapped in a spend or recursion loop that bills you while it runs.","An attacker turns your own automation into an invoice with no upper limit.","Runaway behaviour is caught and capped before the bill arrives."],
        ["what a code tool can become","An agent that can run code is pushed to break out of its sandbox onto the host.","A convenience feature quietly becomes remote code execution in your environment.","Escape paths are closed, so a code tool stays a code tool."],
        ["never in the final answer","The plan is corrupted mid-task so the agent rationalises an unsafe step toward a normal-looking result.","The output looks fine, so the failure never surfaces in review.","Unsafe reasoning is surfaced even when the answer looks clean."],
        ["added cost per shadow-AI breach · IBM 2025","The agent is coaxed into revealing keys, tokens and system prompts it can reach.","One talkative agent hands over the keys to everything behind it.","Reachable secrets are known and the leak path is closed."]
      ],
      "zh-Hant": [
        ["OWASP LLM Top 10 風險","惡意指令藏在代理會讀到的內容裡,悄悄成為它的新目標。","代理以自己的權限行動,被下毒的頁面或工單就像受信任的內部人。","第一次掃描就在掌握中,在抵達工具前被攔下並持續守住。"],
        ["遭 AI 入侵的組織缺乏存取控管 · IBM 2025","代理被誘導去呼叫工具並串接它們,遠超出任務所需。","一個權限過大的工具,把小失誤變成轉帳、刪除或資料外洩。","越權在上線前就被揭露並封堵。"],
        ["潛伏多日後才發作","一個假事實被寫進長期記憶,等之後一個無辜的提示觸發。","上週悄悄的注入,變成這週的外洩,日誌裡毫無線索可串連。","跨工作階段的下毒會被揭露並圍堵,而非事後才發現。"],
        ["財星 500 大已在運行代理 · Microsoft 2026","偽造訊息冒充受信任的同儕代理,編排照著攻擊者的計畫執行。","代理彼此的信任高於對使用者,一次偽冒就能穿過全部。","代理間的信任被繪出,濫用在整張關係圖上都被抓到。"],
        ["在通過審查之後","通過審查的工具,日後把描述或行為換成惡意的。","你只審過一次;它在關鍵那一次背叛你。","工具完整性被持續重新驗證,抽地毯無法保持沉默。"],
        ["缺乏對 AI 身分的完整可視性 · 2026","低權限代理說服高權限代理替它做出有害動作。","影響範圍是高權限代理的,責任卻指向錯的地方。","每個非人類身分都被追蹤,真正的行為者永遠可被證明。"],
        ["單一規則會發出的告警數","每一步都被個別允許;只有合起來的序列才把資料帶走。","沒有單一工具看到違規,規則式防禦永遠不會觸發。","在整個迴圈上關聯,即使每一步都合法,序列仍被抓到。"],
        ["有信心能圍堵代理的 CISO · 2026","審核疲勞與刻意含糊的提示,逼人把危險步驟隨手放行。","你最後一道防線,變成一個疲累的人按下核准。","繞過的壓力被量化呈現,人為控制是真實的,而非假設。"],
        ["沒有上限的花費","代理被困在花錢或遞迴的迴圈裡,一邊跑一邊替你結帳。","攻擊者把你自己的自動化,變成一張沒有上限的帳單。","失控行為在帳單到來前就被抓到並設上限。"],
        ["程式工具可能變成什麼","會執行程式碼的代理,被推著從沙箱逃逸到主機。","一個便利功能,悄悄變成你環境裡的遠端程式執行。","逃逸路徑被封堵,程式工具仍只是程式工具。"],
        ["從不出現在最終答案","計畫在任務中被破壞,代理把不安全的步驟合理化成看似正常的結果。","輸出看起來沒問題,失敗因此從不在覆核中浮現。","即使答案看起來乾淨,不安全的推理仍被揭露。"],
        ["每次影子 AI 外洩的額外成本 · IBM 2025","代理被誘導吐出它能觸及的金鑰、權杖與系統提示。","一個多話的代理,把它背後一切的鑰匙都交出去。","可觸及的機密都被掌握,外洩路徑被封堵。"]
      ],
      "zh-Hans": [
        ["OWASP LLM Top 10 风险","恶意指令藏在智能体会读到的内容里,悄悄成为它的新目标。","智能体以自己的权限行动,被投毒的页面或工单就像受信任的内部人。","第一次扫描就在掌握中,在抵达工具前被拦下并持续守住。"],
        ["遭 AI 入侵的组织缺乏访问控制 · IBM 2025","智能体被诱导去调用工具并串接它们,远超出任务所需。","一个权限过大的工具,把小失误变成转账、删除或数据泄露。","越权在上线前就被揭露并封堵。"],
        ["潜伏多日后才发作","一个假事实被写进长期记忆,等之后一个无辜的提示触发。","上周悄悄的注入,变成这周的泄露,日志里毫无线索可串连。","跨会话的投毒会被揭露并围堵,而非事后才发现。"],
        ["财富 500 强已在运行智能体 · Microsoft 2026","伪造消息冒充受信任的同侪智能体,编排照着攻击者的计划执行。","智能体彼此的信任高于对用户,一次伪冒就能穿过全部。","智能体间的信任被绘出,滥用在整张关系图上都被抓到。"],
        ["在通过审查之后","通过审查的工具,日后把描述或行为换成恶意的。","你只审过一次;它在关键那一次背叛你。","工具完整性被持续重新验证,抽地毯无法保持沉默。"],
        ["缺乏对 AI 身份的完整可见性 · 2026","低权限智能体说服高权限智能体替它做出有害动作。","影响范围是高权限智能体的,责任却指向错的地方。","每个非人类身份都被追踪,真正的行为者永远可被证明。"],
        ["单一规则会发出的告警数","每一步都被单独允许;只有合起来的序列才把数据带走。","没有单一工具看到违规,规则式防御永远不会触发。","在整个回路上关联,即使每一步都合法,序列仍被抓到。"],
        ["有信心能围堵智能体的 CISO · 2026","审批疲劳与刻意含糊的提示,逼人把危险步骤随手放行。","你最后一道防线,变成一个疲惫的人按下批准。","绕过的压力被量化呈现,人工控制是真实的,而非假设。"],
        ["没有上限的花费","智能体被困在花钱或递归的循环里,一边跑一边替你结账。","攻击者把你自己的自动化,变成一张没有上限的账单。","失控行为在账单到来前就被抓到并设上限。"],
        ["代码工具可能变成什么","会执行代码的智能体,被推着从沙箱逃逸到主机。","一个便利功能,悄悄变成你环境里的远程代码执行。","逃逸路径被封堵,代码工具仍只是代码工具。"],
        ["从不出现在最终答案","计划在任务中被破坏,智能体把不安全的步骤合理化成看似正常的结果。","输出看起来没问题,失败因此从不在复核中浮现。","即使答案看起来干净,不安全的推理仍被揭露。"],
        ["每次影子 AI 泄露的额外成本 · IBM 2025","智能体被诱导吐出它能触及的密钥、令牌与系统提示。","一个话多的智能体,把它背后一切的钥匙都交出去。","可触及的密钥都被掌握,泄露路径被封堵。"]
      ],
      "ko": [
        ["OWASP LLM Top 10 위험","악성 지시가 에이전트가 읽는 콘텐츠에 숨어 조용히 새 목표가 됩니다.","에이전트는 자신의 권한으로 동작하므로, 오염된 페이지나 티켓이 신뢰된 내부자처럼 행동합니다.","첫 스캔부터 파악되고, 도구에 닿기 전에 차단되어 계속 막힙니다."],
        ["AI 침해 조직이 접근 통제가 없었음 · IBM 2025","에이전트가 작업에 필요한 범위를 한참 넘어 도구를 호출하고 연쇄하도록 유도됩니다.","과도한 도구 하나가 작은 실수를 송금·삭제·데이터 유출로 키웁니다.","과도 권한은 출시 전에 드러나 차단됩니다."],
        ["발동까지의 잠복 기간","거짓 사실이 장기 메모리에 기록되어, 이후의 무해한 프롬프트가 그것을 깨웁니다.","지난주의 조용한 주입이 이번 주의 침해가 되며, 로그에는 연결 단서가 없습니다.","세션 간 포이즈닝이 드러나 봉쇄되며, 피해 후에 발견되지 않습니다."],
        ["포춘 500이 활성 에이전트 운영 · Microsoft 2026","위조 메시지가 신뢰된 동료 에이전트를 사칭하고 오케스트레이션이 공격자의 계획을 실행합니다.","에이전트는 사용자보다 서로를 더 신뢰하므로, 한 번의 스푸핑이 전부를 통과합니다.","에이전트 간 신뢰가 매핑되고 악용이 그래프 전체에서 잡힙니다."],
        ["승인 이후 시점","검토를 통과한 도구가 이후 설명이나 동작을 악성으로 바꿉니다.","한 번 검증했지만, 정작 중요한 호출에서 배신합니다.","도구 무결성이 지속 재검증되어, 러그풀이 조용히 넘어갈 수 없습니다."],
        ["AI 아이덴티티 가시성 부족 · 2026","낮은 권한 에이전트가 높은 권한 에이전트를 설득해 피해 행위를 대신하게 합니다.","폭발 반경은 강한 에이전트의 것이지만 책임은 엉뚱한 곳을 가리킵니다.","모든 비인간 아이덴티티가 추적되어 실제 행위자가 항상 입증됩니다."],
        ["단일 규칙이 낼 경보 수","각 단계는 개별적으로 허용되며, 합쳐진 시퀀스만이 데이터를 빼냅니다.","어떤 단일 도구도 위반을 보지 못해 규칙 기반 방어가 발동하지 않습니다.","루프 전체에서 상관 분석되어, 각 단계가 합법이어도 시퀀스가 잡힙니다."],
        ["에이전트 봉쇄를 확신하는 CISO · 2026","승인 피로와 의도적으로 모호한 프롬프트가 사람이 위험한 단계를 통과시키게 만듭니다.","마지막 방어선이 지친 사람이 승인을 누르는 것이 됩니다.","우회 압력이 측정·표시되어, 인적 통제가 가정이 아니라 실재가 됩니다."],
        ["상한 없는 지출","에이전트가 지출 또는 재귀 루프에 갇혀 실행되는 동안 비용을 청구합니다.","공격자가 당신의 자동화를 상한 없는 청구서로 바꿉니다.","폭주 행위가 청구서가 도착하기 전에 잡히고 상한이 걸립니다."],
        ["코드 도구가 무엇이 될 수 있는가","코드를 실행할 수 있는 에이전트가 샌드박스를 벗어나 호스트로 탈출하도록 밀립니다.","편의 기능이 조용히 환경 내 원격 코드 실행이 됩니다.","탈출 경로가 차단되어, 코드 도구는 코드 도구로 남습니다."],
        ["최종 답변에는 결코 없음","작업 도중 계획이 손상되어, 에이전트가 정상적으로 보이는 결과를 향해 안전하지 않은 단계를 합리화합니다.","출력은 멀쩡해 보여 실패가 검토에 드러나지 않습니다.","답변이 깨끗해 보여도 안전하지 않은 추론이 드러납니다."],
        ["섀도 AI 침해당 추가 비용 · IBM 2025","에이전트가 닿을 수 있는 키·토큰·시스템 프롬프트를 드러내도록 유도됩니다.","말 많은 에이전트 하나가 그 뒤의 모든 것에 대한 열쇠를 넘깁니다.","닿을 수 있는 시크릿이 파악되고 유출 경로가 차단됩니다."]
      ]
    };
    function lang() {
      var v; try { v = localStorage.getItem("aegis_lang"); } catch (e) { v = null; }
      if (v === "zh") v = "zh-Hant";
      return (v && D[v]) ? v : "en";
    }
    var cur = 0;
    function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;");}
    function render() {
      var L = lang(), row = D[L][cur], lb = LBL[L];
      dEl.innerHTML =
        '<div class="sd-stat">' + esc(STAT[cur]) + '<small>' + esc(row[0]) + '</small></div>' +
        '<div class="sd-body">' +
        '<p><b>' + lb[0] + '</b> ' + esc(row[1]) + '</p>' +
        '<p><b>' + lb[1] + '</b> ' + esc(row[2]) + '</p>' +
        '<p class="sd-sure"><b>' + lb[2] + '</b> ' + esc(row[3]) + '</p>' +
        '</div>';
    }
    sis.forEach(function (b) {
      b.addEventListener("click", function () {
        sis.forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        cur = +b.dataset.sd || 0;
        render();
      });
    });
    render();
    window.addEventListener("aegis:lang", render);
  }
})();

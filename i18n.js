/* AEGIS·AI — Traditional Chinese (zh-Hant) localisation.
   Keys are the normalised English text of each element; values are the
   Traditional Chinese rendering. Technical acronyms and proper nouns are
   intentionally kept in English, as is standard in Taiwan/HK tech writing. */
(function () {
  "use strict";

  var ZH = {
    // nav
    "Product": "產品",
    "Platform": "平台",
    "Capabilities": "完整功能",
    "Teams": "適用團隊",
    "Why AEGIS": "為何選 AEGIS",
    "Integrations": "整合",
    "Sign in": "登入",
    "Book a demo": "預約展示",

    // hero
    "Security operations for AI": "AI 的資安維運平台",
    "You can't secure the AI you can't see.": "看不見的 AI，就守不住。",
    "AEGIS finds every model, agent, and prompt running in your business — sanctioned or not — watches what they do, and proves your defences actually hold. One console, instead of seven tools that don't talk to each other.":
      "AEGIS 會找出企業內每一個模型、代理與提示——無論是否經過核可——持續監看它們的行為，並驗證你的防護是否真的守得住。一個主控台，取代七套各說各話的工具。",
    "Launch the console": "進入主控台",
    "Book a live demo": "預約實機展示",
    "Built for the SOC": "為 SOC 而生",
    "Works with your SIEM": "相容既有 SIEM",
    "Cloud & model agnostic": "不綁雲端、不綁模型",

    // console mock
    "aegis · live operations": "aegis · 即時維運",
    "Inference volume · last 24h": "推論流量 · 近 24 小時",
    "Live activity": "即時動態",
    "Overview": "總覽",
    "Discovery": "資產探索",
    "Identities": "身分",
    "Telemetry": "遙測",
    "Kill chain": "攻擊鏈",
    "Red team": "紅隊演練",
    "Compliance": "法遵",
    "Assets": "資產",
    "Open incidents": "未結事件",
    "Red-team coverage": "紅隊涵蓋率",
    "Shadow AI": "影子 AI",
    "Inference volume · last 6h": "推論流量 · 近 6 小時",
    "Multi-stage attack · incident #4471": "多階段攻擊 · 事件 #4471",
    "Prompt injection": "提示注入",
    "via support ticket": "經由客服工單",
    "Tool call abused": "工具呼叫遭濫用",
    "internal search API": "內部搜尋 API",
    "Credential reuse": "憑證重用",
    "agent svc-rag-07": "代理 svc-rag-07",
    "Data exfiltration": "資料外洩",
    "blocked by AEGIS": "已由 AEGIS 阻擋",
    "Four low-signal events. One correlated incident. Single-tool stacks see none of this.":
      "四個低訊號事件，關聯成一起事件。單點工具完全看不到這條鏈。",
    "Continuous full-stack red team · run rt-2026-0517": "全棧持續紅隊 · 執行 rt-2026-0517",
    "LLM · indirect prompt injection · 142 variants": "LLM · 間接提示注入 · 142 種變形",
    "Agent kill-chain · confused-deputy tool abuse": "代理攻擊鏈 · 混淆代理人工具濫用",
    "Identity · over-scoped agent token reachable": "身分 · 權限過大的代理權杖可被取得",
    "Supply chain · model namespace substitution": "供應鏈 · 模型命名空間替換",
    "Cloud infra · IMDS / GPU node escape attempts": "雲端基礎設施 · IMDS / GPU 節點逃逸嘗試",
    "Model, agents, identity, supply chain and the cloud underneath — every finding opens an incident in the same console.":
      "模型、代理、身分、供應鏈,以至底層雲端——每一項發現都會在同一個主控台開立事件。",
    "AI asset inventory · 1,284 discovered": "AI 資產清單 · 已探索 1,284 項",
    "Asset": "資產", "Type": "類型", "Owner": "負責單位", "Status": "狀態",
    "Model": "模型", "Agent": "代理", "MCP server": "MCP 伺服器",
    "Lending": "授信", "Support": "客服", "Risk": "風險",
    "Verified": "已驗證", "Re-scan": "待重掃", "Shadow": "影子資產",

    "Most teams run seven or more disconnected AI security tools — and still can't answer one question: is our AI safe right now?":
      "多數團隊用著七套以上彼此不相通的 AI 資安工具,卻仍答不出一個問題:<em>我們的 AI 現在安全嗎?</em>",

    // product section
    "The product": "產品",
    "One pane of glass for your whole AI stack.": "整個 AI 技術棧,一個主控視窗看到底。",
    "Start from an incident, not a tool. See the full session, trace the lineage, and shut it down — without pivoting between dashboards that were never built to talk.":
      "從事件出發,而不是從工具出發。看見完整對話、追溯資料來源,並一鍵阻斷——不必在彼此不相通的儀表板之間來回切換。",
    "Live overview": "即時總覽",
    "Asset inventory": "資產清單",

    // platform
    "The platform": "平台",
    "Eight layers. One data plane.": "八個層次,同一個資料平面。",
    "Discovery at the edge, continuous offence at the core. Every layer writes to the same telemetry, so a weak signal in one place becomes a high-confidence incident everywhere.":
      "邊緣負責探索,核心持續演練攻擊。每一層都寫入同一份遙測,因此某處的微弱訊號,能在全局成為高可信度的事件。",
    "Asset & workforce AI discovery": "資產與員工 AI 使用探索",
    "A live inventory of every model, agent, MCP server, vector store and prompt — plus how employees use AI across the major productivity suites — built-in office AI assistants and browser LLMs included. Sanctioned or shadow, you see it.":
      "即時盤點每一個模型、代理、MCP 伺服器、向量資料庫與提示,並掌握員工在主要辦公生產力套裝中如何使用 AI——含內建的辦公 AI 助理與瀏覽器 LLM。無論經核可或屬影子資產,皆一覽無遺。",
    "Supply chain & provenance": "供應鏈與來源驗證",
    "Every model and dataset is signed, verified at ingestion, and re-checked against new threats. Namespace-substitution and unsafe deserialisation get caught on the way in.":
      "每個模型與資料集都經簽章,於匯入時驗證,並持續對照新威脅重新檢查。命名空間替換與不安全的反序列化,在進入當下即被攔下。",
    "Identity for AI": "AI 的身分治理",
    "Treat every agent and inference call as its own identity. Short-lived scoped credentials, just-in-time access, and a tamper-evident receipt for every action.":
      "把每一個代理與推論呼叫都視為獨立身分。短效、限定範圍的憑證,即時授權,並為每個動作留下防竄改的存證。",
    "The data lake": "資料湖",
    "An open telemetry schema that captures every prompt, completion, tool call, and inference event — and pipes straight into the SIEM you already run.":
      "開放式遙測結構,完整擷取每個提示、回應、工具呼叫與推論事件——並直接導入你現有的 SIEM。",
    "Correlation": "關聯分析",
    "AI kill-chain logic that turns scattered, low-signal events into one incident: injection to tool abuse to credential reuse to exfiltration.":
      "AI 攻擊鏈邏輯,把零散的低訊號事件收斂成一起事件:從注入、工具濫用、憑證重用,一路到資料外洩。",
    "Investigate & respond": "調查與應變",
    "Reconstruct the full session, trace output back to its source, and respond in one click: revoke an agent, quarantine a model, roll back a prompt, isolate a store.":
      "重建完整對話,把輸出追溯回源頭,並一鍵應變:撤銷代理、隔離模型、回滾提示、封鎖向量資料庫。",
    "Model assurance": "模型品質保證",
    "Drift, bias, and hallucination tracking for the models you build — wired into the same engine, so a quality regression also reads as a security signal.":
      "為你自建的模型追蹤漂移、偏誤與幻覺——接入同一套引擎,因此品質劣化同時也是一個資安訊號。",
    "Continuous full-stack red team": "全棧持續紅隊演練",
    "Flagship": "旗艦功能",
    "Red teaming stops being a PDF from six weeks ago. It runs every day, inside the same data plane as your detections — and it doesn't just probe the model. It attacks the whole stack that hosts your AI: agents and their kill chains, MCP servers and tools, the model supply chain, non-human identities and secrets, the vector and data plane, and the cloud infrastructure underneath. Every finding sharpens a defence; every defence invites the next attack. Attack and defence become one loop — the product no point tool can rebuild.":
      "紅隊不再是六週前的一份 PDF。它每天執行,與你的偵測共用同一個資料平面——而且不只測試模型,而是攻擊承載 AI 的整個技術棧:代理與其攻擊鏈、MCP 伺服器與工具、模型供應鏈、非人類身分與機密、向量與資料平面,以至底層雲端基礎設施。每一項發現都讓防護更銳利,每一次防護又招來下一波攻擊。攻與守合為一個循環——這是單點工具做不出來的產品。",

    // capabilities
    "Everything in AEGIS.": "AEGIS 的完整能力。",
    "Not a feature checklist for its own sake — this is the surface area it takes to actually answer “is our AI safe right now?”. One platform, end to end.":
      "這不是為了湊數的功能清單——而是真正要回答「我們的 AI 現在安全嗎?」所需涵蓋的範圍。一個平台,端到端。",
    "01 Discovery & workforce AI": '<span>01</span> 探索與員工 AI 使用',
    "Continuous inventory: models, agents, MCP servers, vector stores, prompts, datasets": "持續盤點:模型、代理、MCP 伺服器、向量資料庫、提示、資料集",
    "Shadow-AI discovery via browser, OAuth, network and code scanning": "透過瀏覽器、OAuth、網路與程式碼掃描探索影子 AI",
    "Employee AI use across the major productivity suites & their office AI assistants": "掌握員工在主要生產力套裝及其辦公 AI 助理中的使用情況",
    "Data-loss detection: PII, source code, secrets, PHI/PCI into any AI surface": "資料外洩偵測:PII、原始碼、機密、PHI/PCI 流入任何 AI 介面",
    "Harmful-use detection with one-click block; complements CASB/DLP": "有害使用偵測並可一鍵阻擋;與 CASB/DLP 相輔相成",
    "Live dependency graph: which app uses which model, agent and tool": "即時相依圖:哪個應用使用了哪個模型、代理與工具",
    "02 Supply chain & provenance": '<span>02</span> 供應鏈與來源驗證',
    "Cryptographic signature verification at ingestion and re-verification over time": "匯入時進行密碼學簽章驗證,並隨時間持續重新驗證",
    "Model namespace-reuse / substitution detection": "模型命名空間重用 / 替換偵測",
    "Pickle & safetensors deserialisation scanning (nullifAI class)": "Pickle 與 safetensors 反序列化掃描(nullifAI 類型)",
    "CycloneDX ML-BOM and SPDX 3.0.1 AI/Dataset profiles": "CycloneDX ML-BOM 與 SPDX 3.0.1 AI/資料集規格",
    "Dataset licence verification and provenance tracing": "資料集授權驗證與來源追溯",
    "Continuous re-scan against new CVEs and threat intel": "對照新 CVE 與威脅情資持續重新掃描",
    "03 Identity for AI": '<span>03</span> AI 身分治理',
    "Non-human identity governance for models, agents and MCP servers": "為模型、代理與 MCP 伺服器治理非人類身分(NHI)",
    "Just-in-time, short-lived scoped credentials, destroyed on session end": "即時、短效、限定範圍的憑證,於工作階段結束即銷毀",
    "Attribute- and intent-based access control for tool invocation": "以屬性與意圖為基礎的工具呼叫存取控管",
    "Tamper-evident audit receipt for every action": "每個動作皆留下防竄改的稽核存證",
    "Native integration with your identity, PAM and access-governance tooling": "原生整合你的身分、PAM 與存取治理工具",
    "04 Telemetry & data lake": '<span>04</span> 遙測與資料湖',
    "Open, OCSF-aligned schema for every prompt, completion and tool call": "對齊 OCSF 的開放結構,涵蓋每個提示、回應與工具呼叫",
    "Agent-to-agent (A2A) and MCP transaction capture": "擷取代理對代理(A2A)與 MCP 交易",
    "RAG retrieval, embedding query and vector-store events": "RAG 檢索、嵌入查詢與向量資料庫事件",
    "GPU / DPU-level inference event capture": "GPU / DPU 層級的推論事件擷取",
    "Pipes natively into your existing SIEM and observability stack": "原生導入你現有的 SIEM 與可觀測性技術棧",
    "05 Correlation & the AI kill chain": '<span>05</span> 關聯分析與 AI 攻擊鏈',
    "Prompt injection → unauthorised tool-call chains": "提示注入 → 未授權的工具呼叫鏈",
    "Compositional exfiltration: permitted actions that add up to a breach": "組合式外洩:多個被允許的動作,合起來就是一次外洩",
    "System-prompt drift and tampering detection": "系統提示漂移與竄改偵測",
    "Cross-session credential reuse by an agent identity": "代理身分跨工作階段的憑證重用",
    "Membership inference and training-data extraction detection": "成員推斷與訓練資料萃取偵測",
    "Model namespace substitution between SDK pull and provenance": "SDK 拉取與來源紀錄之間的模型命名空間替換",
    "06 Investigation & response": '<span>06</span> 調查與應變',
    "Full multi-turn session reconstruction": "完整重建多輪對話",
    "Lineage: output → model → training data → retrieval source": "資料譜系:輸出 → 模型 → 訓練資料 → 檢索來源",
    "Hallucination, jailbreak and exfiltration triage workflows": "幻覺、越獄與外洩的分流處理流程",
    "One-click: revoke agent, quarantine model, roll back prompt, isolate store": "一鍵:撤銷代理、隔離模型、回滾提示、封鎖向量庫",
    "AI-native MITRE-style ATT&CK mapping": "AI 原生的 MITRE ATT&CK 式對應",
    "07 Model assurance & in-house AI": '<span>07</span> 模型品質保證與自建 AI',
    "Population stability (PSI) and per-feature drift monitoring": "母體穩定度(PSI)與逐特徵漂移監控",
    "AUC / Gini performance tracking with regression alerts on new versions": "AUC / Gini 績效追蹤,新版本退步即告警",
    "Disparate-impact & bias on protected attributes (e.g. age, geo proxy)": "受保護屬性的差別影響與偏誤(如年齡、地區代理變數)",
    "Explainability / SHAP coverage and unexplained-decision rate": "可解釋性 / SHAP 涵蓋率與無法解釋決策比率",
    "Regulated-model risk packs (e.g. credit-risk PD under MAS / Basel III)": "受監管模型的風險包(如 MAS / Basel III 下的信用風險 PD)",
    "Integrates with your experiment-tracking and ML platform tools": "整合你的實驗追蹤與 ML 平台工具",
    "08 Continuous full-stack red team": '<span>08</span> 全棧持續紅隊演練',
    "LLM: OWASP LLM Top 10, refreshed jailbreak & injection libraries": "LLM:OWASP LLM Top 10、持續更新的越獄與注入手法庫",
    "Agents: kill-chain execution, confused-deputy, compositional exfiltration": "代理:攻擊鏈執行、混淆代理人、組合式外洩",
    "MCP & tools: tool-poisoning and description-injection": "MCP 與工具:工具下毒與描述注入",
    "Supply chain: namespace-reuse, pickle deserialisation": "供應鏈:命名空間重用、pickle 反序列化",
    "Identity & secrets: over-scoped tokens, credential abuse": "身分與機密:權限過大的權杖、憑證濫用",
    "Cloud & infra: IMDS, GPU-node and container escape attempts": "雲端與基礎設施:IMDS、GPU 節點與容器逃逸嘗試",
    "Data & network: vector-store egress and DLP-bypass simulation": "資料與網路:向量庫外送與 DLP 繞過模擬",
    "Purple-team: every finding opens an incident in the same console": "紫隊:每項發現都在同一主控台開立事件",
    "09 Compliance & governance": '<span>09</span> 法遵與治理',
    "One-click automated audits, scored with an exportable report, for:": "<b>一鍵自動化稽核</b>,評分並可匯出報告,涵蓋:",
    "ISO/IEC 42001 — clauses 4–10 + Annex A": "ISO/IEC 42001——條款 4–10 與附錄 A",
    "EU AI Act — Art. 9–15, Annex IV, post-market & incident duties": "EU AI Act——第 9–15 條、附錄 IV、上市後與事件通報義務",
    "NIST AI RMF — GOVERN, MAP, MEASURE, MANAGE": "NIST AI RMF——GOVERN、MAP、MEASURE、MANAGE",
    "Singapore IMDA — Model AI Governance Framework, GenAI & AI Verify": "Singapore IMDA——Model AI Governance Framework、GenAI 與 AI Verify",
    "MAS FEAT principles & OWASP LLM / Agentic Top 10": "MAS FEAT 原則與 OWASP LLM / Agentic Top 10",
    "SEC four-day blast-radius; SOC 2, GDPR, HIPAA, PCI DSS evidence packs": "SEC 四日影響範圍報告;SOC 2、GDPR、HIPAA、PCI DSS 佐證包",
    "10 Executive & full reporting": '<span>10</span> 高階主管與完整報告',
    "Board-grade executive summary: posture score, top risks, trend": "董事會層級的高階摘要:資安態勢評分、首要風險、趨勢",
    "Full technical report across all eight layers with evidence": "涵蓋八層、附佐證的完整技術報告",
    "Regulated model-risk reports (e.g. credit-risk PD, MAS / Basel III)": "受監管模型風險報告(如信用風險 PD、MAS / Basel III)",
    "Per-incident, red-team campaign and workforce-AI DLP reports": "單一事件、紅隊行動與員工 AI DLP 報告",
    "Signed, exportable PDF / JSON; immutable evidence log": "可簽章匯出的 PDF / JSON;不可竄改的佐證紀錄",
    "Scheduled distribution to the CISO, board and regulators": "排程派送給 CISO、董事會與監理機關",

    // how it works
    "How it works": "運作方式",
    "Live in a day. Value in a week.": "一天上線,一週見效。",
    "No agents on every box, no rip-and-replace. AEGIS reads the signals your stack already emits and adds the ones it doesn't.":
      "不必在每台主機裝代理,也不必汰換現有系統。AEGIS 讀取你技術棧已產生的訊號,並補上它原本沒有的訊號。",
    "Connect": "接入",
    "Point AEGIS at your clouds, gateways and SIEM with read-only roles and an OpenTelemetry collector. No code changes to your apps. Typical first connection: under an hour.":
      "以唯讀角色與一個 OpenTelemetry 收集器,把 AEGIS 指向你的雲端、閘道與 SIEM。應用程式無需改任何程式碼。首次接入通常在一小時內完成。",
    "Discover": "探索",
    "Within the first sweep you get a live inventory of every model, agent, MCP server and vector store — including the shadow AI nobody told you about — with owners and a dependency graph.":
      "首次掃描即取得每個模型、代理、MCP 伺服器與向量資料庫的即時清單——含沒人告訴你的影子 AI——並附負責單位與相依圖。",
    "Defend": "防禦",
    "Correlation and the continuous red team turn on. Detections are exercised against live attacks daily, and every finding lands as an incident in the same console your SOC already works in.":
      "關聯分析與持續紅隊隨即啟動。偵測每天被實際攻擊演練,每項發現都落入你 SOC 既有的同一個主控台成為事件。",

    // teams
    "Who uses it": "誰在使用",
    "Three teams. One source of truth.": "三個團隊,同一份事實來源。",
    "Security leadership": "資安管理層",
    "Answer the board with evidence": "用證據向董事會交代",
    "How many agents do we run? What can they reach? Did our controls actually hold last quarter? AEGIS gives you the audit trail behind the answer — dashboards, evidence packs mapped to the EU AI Act, NIST AI RMF and ISO 42001, and disclosure-ready blast-radius reports.":
      "我們跑了多少個代理?它們能存取到什麼?上一季的控制措施真的守住了嗎?AEGIS 給你的是答案背後的稽核軌跡——儀表板、對應 EU AI Act、NIST AI RMF 與 ISO 42001 的佐證包,以及可直接揭露的影響範圍報告。",
    "The SOC": "資安維運中心(SOC)",
    "Investigate AI incidents, not tabs": "調查 AI 事件,而不是切分頁",
    "One pane: prompts, tool calls, identities, models, and data flows. AI-native ATT&CK mapping, one-click containment, and detections that are exercised live by the red-team layer — so you know they work before an attacker tells you they don't.":
      "一個視窗:提示、工具呼叫、身分、模型與資料流。AI 原生的 ATT&CK 對應、一鍵圍堵,偵測由紅隊層即時演練——讓你在攻擊者證明它失效之前,就先知道它有效。",
    "ML & product": "ML 與產品團隊",
    "Ship your models with confidence": "有把握地把模型送上線",
    "Drift, bias, fairness and robustness checks where data scientists already work — push-button adversarial testing before release and regression alerts on every version. Security consumes the same signals downstream. Velocity without new exposure.":
      "在資料科學家本來就在的地方做漂移、偏誤、公平性與穩健性檢查——上線前一鍵對抗測試,每個版本都有退步告警。資安在下游消費同一份訊號。要速度,但不增加曝險。",

    // why
    "Why AEGIS": "為何選 AEGIS",
    "The other options leave a gap.": "其他選項都留有破口。",
    "Prompt firewalls": "提示防火牆",
    "See text in, text out. Blind to tool calls, identity, lineage and supply chain. Nowhere to investigate.":
      "只看到文字進、文字出。看不到工具呼叫、身分、資料譜系與供應鏈,也無從調查。",
    "AEGIS": "AEGIS",
    "The inline gateway is one of eight layers — all feeding one engine and one investigation console.":
      "行內閘道只是八層之一——全部匯入同一個引擎與同一個調查主控台。",
    "AI-BOM scanners": "AI-BOM 掃描器",
    "A snapshot in time, disconnected from runtime. No re-verification, no response.":
      "只是某一刻的快照,與執行期脫節。沒有重新驗證,也沒有應變。",
    "Inventory is continuous and signed, and feeds detections that catch model substitution at runtime.":
      "清單是持續且經簽章的,並驅動偵測,在執行期攔下模型替換。",
    "Red-team firms": "紅隊顧問公司",
    "A report describing a system that has already changed. No link to live detections.":
      "一份描述早已改變的系統的報告,且與即時偵測毫無連結。",
    "Red teaming runs continuously in the same data plane. Findings tune detections the same day.":
      "紅隊在同一個資料平面持續執行,發現當天就回饋調校偵測。",
    "Hyperscaler bundles": "雲端巨頭綁售方案",
    "One cloud's identity, SIEM and models. Multi-cloud teams are stranded.":
      "綁定單一雲端的身分、SIEM 與模型。多雲團隊將被卡死。",
    "Cloud-, model- and SIEM-agnostic. Built to sit on top of what you already run.":
      "不綁雲端、不綁模型、不綁 SIEM。設計上就是疊在你既有系統之上。",

    // metrics
    "The stakes": "風險所在",
    "The exposure is already here.": "曝險已經發生。",
    "of the Fortune 500 run active AI agents": "的財星 500 大企業已在運行 AI 代理",
    "of organisations lack full visibility into AI identities": "的組織對 AI 身分缺乏完整可視性",
    "of CISOs are confident they could contain a compromised agent": "的 CISO 有信心能圍堵一個被入侵的代理",
    "Microsoft, 2026": "Microsoft,2026",
    "Cybersecurity Insiders, 2026": "Cybersecurity Insiders,2026",
    "EU AI Act enforcement lands August 2026. SEC disclosure is four business days. Median attacker hand-off is 22 seconds. The time to see your AI is before someone else does.":
      "EU AI Act 將於 <strong>2026 年 8 月</strong> 開始執法。SEC 揭露時限為 <strong>四個營業日</strong>。攻擊者接手的中位時間是 <strong>22 秒</strong>。看清你的 AI,要趕在別人之前。",

    // integrations
    "Sits on top of what you run.": "疊在你既有系統之上。",
    "We instrument where the AI runs, not where it was built — and we don't ask you to rip out your SIEM.":
      "我們在 AI 實際運行的地方做檢測,而不是在它被建構的地方——而且我們不會要你把 SIEM 換掉。",
    "Models & frameworks": "模型與框架",
    "Every major commercial LLM provider and managed model service, the common agent and orchestration frameworks, open agent protocols, and self-hosted inference servers — same telemetry, same controls.":
      "各主要商用 LLM 供應商與受管模型服務、常見的代理與編排框架、開放代理協定,以及自架推論伺服器——同一份遙測,同一套控管。",
    "SIEM, XDR & identity": "SIEM、XDR 與身分",
    "The major productivity suites and their built-in AI assistants for workforce-AI DLP. Your existing SIEM, XDR and observability stack. Your identity, PAM and governance tooling. Your ITSM and incident-workflow channels.":
      "主要生產力套裝及其內建 AI 助理,用於員工 AI 的 DLP。你既有的 SIEM、XDR 與可觀測性技術棧。你的身分、PAM 與治理工具。你的 ITSM 與事件流程管道。",
    "EU AI Act Annex IV, NIST AI RMF, ISO/IEC 42001, OWASP LLM & Agentic Top 10, SEC disclosure, SOC 2, GDPR. Singapore IMDA, CSA, MAS; FCA, ECB, OCC.":
      "EU AI Act 附錄 IV、NIST AI RMF、ISO/IEC 42001、OWASP LLM 與 Agentic Top 10、SEC 揭露、SOC 2、GDPR。Singapore IMDA、CSA、MAS;FCA、ECB、OCC。",

    // specs
    "The detail": "細節",
    "What you actually get.": "你實際得到什麼。",
    "The questions security, legal and procurement ask before a proof-of-value — answered up front.":
      "資安、法務與採購在 POV 之前會問的問題——先講清楚。",
    "Deployment": "部署", "SaaS or in-VPC": "SaaS 或 VPC 內",
    "Fully managed, or deployed inside your own cloud account. The data plane can run air-gapped.":
      "完全受管,或部署在你自己的雲端帳號內。資料平面可在離線(air-gapped)環境運行。",
    "Your data": "你的資料", "Stays in your tenant": "留在你的租戶內",
    "Telemetry is processed in your region. Prompt and completion content never leaves your boundary by default.":
      "遙測在你所在區域處理。預設情況下,提示與回應內容絕不離開你的邊界。",
    "Access": "存取",
    "Works with any standards-based identity provider. Role-based access, scoped API tokens, full admin audit log.":
      "支援任何符合標準的身分供應商。角色式存取、限定範圍的 API 權杖、完整管理稽核紀錄。",
    "Inline latency": "行內延遲",
    "The optional inline gateway adds single-digit-to-low-tens of milliseconds. Monitor-only mode adds zero.":
      "選用的行內閘道僅增加數毫秒至數十毫秒。純監看模式則完全不增加延遲。",
    "Availability": "可用性",
    "Multi-region, active-active. Detections degrade safe — telemetry is never dropped silently.":
      "多區域、雙活架構。偵測採安全降級——遙測絕不會被無聲丟棄。",
    "Regions": "區域",
    "ap-southeast-1, eu-west-1, us-east-1. Data residency pinned per tenant.":
      "ap-southeast-1、eu-west-1、us-east-1。資料落地依租戶綁定。",
    "Assurance": "保證",
    "ISO 27001 in progress. Penetration-tested quarterly; the platform red-teams itself continuously.":
      "ISO 27001 進行中。每季滲透測試;平台亦持續對自身進行紅隊演練。",
    "Commercial": "商業模式", "Platform + usage": "平台費 + 用量",
    "Annual platform fee plus asset- and event-based metering, so cost rolls to the AI initiative budget.":
      "年度平台費,加上以資產與事件計量,讓成本歸入 AI 專案預算。",

    // faq
    "Questions": "常見問題",
    "Before you ask.": "在你開口之前。",
    "Do you replace our SIEM?": "你們會取代我們的 SIEM 嗎?",
    "No. AEGIS is built to sit on top of the SIEM you already run. We make it AI-fluent and feed it correlated incidents in OCSF.":
      "不會。AEGIS 設計上就是疊在你既有的 SIEM 之上。我們讓它聽得懂 AI,並以 OCSF 餵入關聯後的事件。",
    "How is this different from an AI firewall?": "這跟 AI 防火牆有什麼不同?",
    "A prompt firewall sees text in and text out. AEGIS also sees tool calls, agent identity, model lineage and supply chain — and correlates them. The gateway is one of eight layers, not the whole product.":
      "提示防火牆只看到文字進、文字出。AEGIS 還看得到工具呼叫、代理身分、模型譜系與供應鏈——並把它們關聯起來。閘道只是八層之一,不是產品全貌。",
    "Does our prompt data leave our environment?": "我們的提示資料會離開我們的環境嗎?",
    "Not by default. The data plane runs in your region or your VPC. You choose what is redacted before anything is stored, and content can stay entirely in your tenant.":
      "預設不會。資料平面在你所在區域或你的 VPC 內運行。儲存前由你決定要遮蔽什麼,內容可完全留在你的租戶內。",
    "Can you see employee AI use across our office suites?": "你們看得到員工在辦公套裝裡使用 AI 的情況嗎?",
    "Yes. AEGIS watches workforce AI across the major productivity suites — their built-in office AI assistants, connected GPTs and browser LLMs — and flags data loss (PII, source code, secrets or regulated data leaving into an AI surface) and harmful use, with the user, the data class and a one-click block. It complements your CASB and DLP rather than replacing them.":
      "可以。AEGIS 監看主要生產力套裝中的員工 AI 使用——內建辦公 AI 助理、連接的 GPT 與瀏覽器 LLM——並標記資料外洩(PII、原始碼、機密或受監管資料流入 AI 介面)與有害使用,附上使用者、資料類別與一鍵阻擋。它是你 CASB 與 DLP 的補強,而非取代。",
    "What does onboarding look like?": "導入流程是什麼樣子?",
    "Read-only cloud roles plus a collector. First inventory inside the first sweep, correlation and continuous red team typically live within the first week. No app code changes.":
      "唯讀雲端角色,加上一個收集器。首次掃描即產出清單,關聯分析與持續紅隊通常在第一週內上線。應用程式無需改任何程式碼。",
    "Which models and frameworks are supported?": "支援哪些模型與框架?",
    "Every major commercial LLM provider and managed model service, the common agent and orchestration frameworks, open agent protocols, and self-hosted inference servers — same telemetry, same controls, wherever the AI runs.":
      "各主要商用 LLM 供應商與受管模型服務、常見的代理與編排框架、開放代理協定,以及自架推論伺服器——不論 AI 在哪裡運行,都是同一份遙測、同一套控管。",
    "Can it audit us against ISO 42001, the EU AI Act and Singapore's frameworks?": "它能幫我們對 ISO 42001、EU AI Act 與新加坡的框架做稽核嗎?",
    "Yes. AEGIS runs one-click, scored conformity audits for ISO/IEC 42001, the EU AI Act, NIST AI RMF, the Singapore IMDA Model AI Governance Framework (incl. GenAI & AI Verify), MAS FEAT and OWASP — each control mapped to live platform evidence, with findings, remediation and an exportable report. Executive board packs and full technical reports are generated from the same live data.":
      "可以。AEGIS 對 ISO/IEC 42001、EU AI Act、NIST AI RMF、Singapore IMDA Model AI Governance Framework(含 GenAI 與 AI Verify)、MAS FEAT 與 OWASP 執行一鍵、評分式符合性稽核——每項控制都對應到平台的即時佐證,並附發現、改善建議與可匯出的報告。高階董事會包與完整技術報告皆由同一份即時資料產生。",
    "Is the continuous red team safe to run in production?": "持續紅隊在正式環境執行安全嗎?",
    "Yes. Attacks run with safe-execution scaffolding against production-equivalent targets. Findings open as incidents in the same console — purple-team by design.":
      "安全。攻擊在安全執行框架下,針對與正式環境等價的目標進行。發現會在同一主控台開立為事件——設計上即是紫隊。",

    // cta
    "See it on your own stack.": "在你自己的技術棧上看看。",
    "Book a 30-minute walkthrough, or jump straight into the live console with the demo environment.":
      "預約 30 分鐘導覽,或直接進入即時主控台體驗。",
    "Enterprises": "企業",
    "Design-partner cohort across financial services, healthcare and regulated sectors. Co-design detections for your jurisdiction.":
      "橫跨金融、醫療與受監管產業的設計夥伴計畫。一起為你的司法管轄區共同設計偵測。",
    "Investors": "投資人",
    "Market sizing, competitive analysis and risk review available to qualified institutional investors under NDA.":
      "市場規模、競爭分析與風險評估,於 NDA 下提供予合格機構投資人。",
    "Engineers": "工程人才",
    "Hiring in Singapore, Tel Aviv, San Francisco and London — offensive AI research, ML platform, detection content.":
      "於新加坡、特拉維夫、舊金山與倫敦招募——攻擊性 AI 研究、ML 平台、偵測內容。",

    // footer
    "Security operations for AI.": "AI 的資安維運平台。",
    "Sign in to the console →": "登入主控台 →",
    "AEGIS·AI is a product of Hesed & Emet.": "AEGIS·AI 是 Hesed & Emet 的產品。",
    "© 2026 Hesed & Emet · Singapore · Tel Aviv · San Francisco · London":
      "© 2026 Hesed & Emet · 新加坡 · 特拉維夫 · 舊金山 · 倫敦"
  };

  var SEL = [
    ".nav-links a", ".nav-login", ".nav-cta .btn-sm",
    ".kicker", ".hero-title", ".hero-sub", ".hero-cta a", ".hero-trust span",
    ".cm-title", ".cm-cap", ".ui-side i", ".ui-kpi span", ".ui-panel-h",
    ".kc-node b", ".kc-node span", ".kc-note", ".ui-table th", ".ui-table td",
    ".tab", ".sec-label", ".sec-title", ".lede", ".strip-line",
    ".layer-body h3", ".layer-body p", ".layer-no em",
    ".cap h3", ".cap li", ".step h3", ".step p",
    ".persona-tag", ".persona h3", ".persona p",
    ".cmp .mark", ".cmp p",
    ".stat-desc", ".stat-src", ".band",
    ".eco-col p", ".spec span", ".spec b", ".spec p",
    ".faq summary", ".faq details > p",
    ".cta-wrap h2", ".cta-wrap .lede", ".cta-cols b", ".cta-cols p",
    ".footer-brand p", ".footer-login", ".footer-meta p"
  ].join(",");

  function norm(s) {
    return s.replace(/ /g, " ").replace(/\s+/g, " ").trim();
  }

  function apply(lang) {
    document.querySelectorAll(SEL).forEach(function (el) {
      if (el.dataset.i18nEn === undefined) el.dataset.i18nEn = el.innerHTML;
      if (lang === "zh") {
        var key = norm(el.textContent);
        if (ZH[key] !== undefined) el.innerHTML = ZH[key];
      } else {
        el.innerHTML = el.dataset.i18nEn;
      }
    });
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    var btn = document.getElementById("langTg");
    if (btn) btn.textContent = lang === "zh" ? "EN" : "中文";
    try { localStorage.setItem("aegis_lang", lang); } catch (e) {}
  }

  function current() {
    try { return localStorage.getItem("aegis_lang") === "zh" ? "zh" : "en"; }
    catch (e) { return "en"; }
  }

  function init() {
    var btn = document.getElementById("langTg");
    if (btn) {
      btn.addEventListener("click", function () {
        apply(current() === "zh" ? "en" : "zh");
      });
    }
    if (current() === "zh") apply("zh");
    else if (btn) btn.textContent = "中文";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

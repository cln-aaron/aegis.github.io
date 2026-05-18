/* AEGIS·AI localisation. English is the source/default.
   Keys are the normalised English text of each element. Native renderings
   for Traditional Chinese, Simplified Chinese and Korean. Technical
   acronyms and proper nouns are intentionally kept in English. */
(function () {
  "use strict";

  var ZH_HANT = {
    "Product": "產品", "Platform": "平台", "Capabilities": "完整功能",
    "Teams": "適用團隊", "Why AEGIS": "為何選 AEGIS", "Integrations": "整合",
    "Sign in": "登入", "Book a demo": "預約展示",
    "Security operations for AI": "AI 的資安維運平台",
    "You can't secure the AI you can't see.": "看不見的 AI，就守不住。",
    "AEGIS finds every model, agent, and prompt running in your business, sanctioned or not. It watches what they do, and proves your defences actually hold. One console, instead of seven tools that don't talk to each other.":
      "AEGIS 會找出企業內每一個模型、代理與提示,不論是否經過核可。它持續監看它們的行為,並驗證你的防護是否真的守得住。一個主控台,取代七套各說各話的工具。",
    "Launch the console": "進入主控台", "Book a live demo": "預約實機展示",
    "Built for the SOC": "為 SOC 而生", "Works with your SIEM": "相容既有 SIEM",
    "Cloud & model agnostic": "不綁雲端、不綁模型",
    "aegis · live operations": "aegis · 即時維運",
    "Inference volume · last 24h": "推論流量 · 近 24 小時",
    "Live activity": "即時動態", "Overview": "總覽", "Discovery": "資產探索",
    "Identities": "身分", "Telemetry": "遙測", "Kill chain": "攻擊鏈",
    "Red team": "紅隊演練", "Compliance": "法遵", "Assets": "資產",
    "Open incidents": "未結事件", "Red-team coverage": "紅隊涵蓋率", "Shadow AI": "影子 AI",
    "Inference volume · last 6h": "推論流量 · 近 6 小時",
    "Multi-stage attack · incident #4471": "多階段攻擊 · 事件 #4471",
    "Prompt injection": "提示注入", "via support ticket": "經由客服工單",
    "Tool call abused": "工具呼叫遭濫用", "internal search API": "內部搜尋 API",
    "Credential reuse": "憑證重用", "agent svc-rag-07": "代理 svc-rag-07",
    "Data exfiltration": "資料外洩", "blocked by AEGIS": "已由 AEGIS 阻擋",
    "Four low-signal events. One correlated incident. Single-tool stacks see none of this.":
      "四個低訊號事件，關聯成一起事件。單點工具完全看不到這條鏈。",
    "Continuous full-stack red team · run rt-2026-0517": "全棧持續紅隊 · 執行 rt-2026-0517",
    "LLM · indirect prompt injection · 142 variants": "LLM · 間接提示注入 · 142 種變形",
    "Agent kill-chain · confused-deputy tool abuse": "代理攻擊鏈 · 混淆代理人工具濫用",
    "Identity · over-scoped agent token reachable": "身分 · 權限過大的代理權杖可被取得",
    "Supply chain · model namespace substitution": "供應鏈 · 模型命名空間替換",
    "Cloud infra · IMDS / GPU node escape attempts": "雲端基礎設施 · IMDS / GPU 節點逃逸嘗試",
    "Model, agents, identity, supply chain and the cloud underneath: every finding opens an incident in the same console.":
      "模型、代理、身分、供應鏈,以至底層雲端,每一項發現都會在同一個主控台開立事件。",
    "AI asset inventory · 1,284 discovered": "AI 資產清單 · 已探索 1,284 項",
    "Asset": "資產", "Type": "類型", "Owner": "負責單位", "Status": "狀態",
    "Model": "模型", "Agent": "代理", "MCP server": "MCP 伺服器",
    "Lending": "授信", "Support": "客服", "Risk": "風險",
    "Verified": "已驗證", "Re-scan": "待重掃", "Shadow": "影子資產",
    "Most teams run seven or more disconnected AI security tools and still can't answer one question: is our AI safe right now?":
      "多數團隊用著七套以上彼此不相通的 AI 資安工具,卻仍答不出一個問題:<em>我們的 AI 現在安全嗎?</em>",
    "The product": "產品",
    "Stop tab-hopping between tools that don't talk.": "別再在互不相通的工具之間切來切去。",
    "When your AI does something it shouldn't, the clock is already running. You shouldn't be logging into five consoles to work out what happened. Start at the incident, see the whole session and where it led, and shut it down in one click.":
      "當你的 AI 出狀況,時間就在倒數。你不該為了搞清楚發生什麼事而登入五個主控台。直接從事件看起,掌握整段對話與它的去向,一鍵阻斷。",
    "Live overview": "即時總覽", "Asset inventory": "資產清單",
    "The platform": "平台", "Eight layers. One data plane.": "八個層次,同一個資料平面。",
    "You bought seven point tools and still can't connect them. AEGIS is eight layers writing to one record, so the weak signal everyone else ignores becomes an incident you can act on.":
      "你買了七套單點工具,卻仍兜不起來。AEGIS 是寫入同一份紀錄的八個層次,別人忽略的微弱訊號,在這裡會成為你能著手處理的事件。",
    "Asset & workforce AI discovery": "資產與員工 AI 使用探索",
    "A live inventory of every model, agent, MCP server, vector store and prompt, plus how employees use AI across the major productivity suites, including built-in office AI assistants and browser LLMs. Sanctioned or shadow, you see it.":
      "即時盤點每一個模型、代理、MCP 伺服器、向量資料庫與提示,並掌握員工在主要辦公生產力套裝中如何使用 AI,包含內建的辦公 AI 助理與瀏覽器 LLM。無論經核可或屬影子資產,皆一覽無遺。",
    "Supply chain & provenance": "供應鏈與來源驗證",
    "Every model and dataset is signed, verified at ingestion, and re-checked against new threats. Namespace-substitution and unsafe deserialisation get caught on the way in.":
      "每個模型與資料集都經簽章,於匯入時驗證,並持續對照新威脅重新檢查。命名空間替換與不安全的反序列化,在進入當下即被攔下。",
    "Identity for AI": "AI 的身分治理",
    "Treat every agent and inference call as its own identity. Short-lived scoped credentials, just-in-time access, and a tamper-evident receipt for every action.":
      "把每一個代理與推論呼叫都視為獨立身分。短效、限定範圍的憑證,即時授權,並為每個動作留下防竄改的存證。",
    "The data lake": "資料湖",
    "An open telemetry schema that captures every prompt, completion, tool call, and inference event, and pipes straight into the SIEM you already run.":
      "開放式遙測結構,完整擷取每個提示、回應、工具呼叫與推論事件,並直接導入你現有的 SIEM。",
    "Correlation": "關聯分析",
    "AI kill-chain logic that turns scattered, low-signal events into one incident: injection to tool abuse to credential reuse to exfiltration.":
      "AI 攻擊鏈邏輯,把零散的低訊號事件收斂成一起事件:從注入、工具濫用、憑證重用,一路到資料外洩。",
    "Investigate & respond": "調查與應變",
    "Reconstruct the full session, trace output back to its source, and respond in one click: revoke an agent, quarantine a model, roll back a prompt, isolate a store.":
      "重建完整對話,把輸出追溯回源頭,並一鍵應變:撤銷代理、隔離模型、回滾提示、封鎖向量資料庫。",
    "Model assurance": "模型品質保證",
    "Drift, bias, and hallucination tracking for the models you build, wired into the same engine, so a quality regression also reads as a security signal.":
      "為你自建的模型追蹤漂移、偏誤與幻覺,並接入同一套引擎,因此品質劣化同時也是一個資安訊號。",
    "Continuous full-stack red team": "全棧持續紅隊演練", "Flagship": "旗艦功能",
    "Red teaming stops being a PDF from six weeks ago. It runs every day, inside the same data plane as your detections, and it doesn't just probe the model. It attacks the whole stack that hosts your AI: agents and their kill chains, MCP servers and tools, the model supply chain, non-human identities and secrets, the vector and data plane, and the cloud infrastructure underneath. Every finding sharpens a defence; every defence invites the next attack. Attack and defence become one loop. It is the product no point tool can rebuild.":
      "紅隊不再是六週前的一份 PDF。它每天執行,與你的偵測共用同一個資料平面,而且不只測試模型,而是攻擊承載 AI 的整個技術棧:代理與其攻擊鏈、MCP 伺服器與工具、模型供應鏈、非人類身分與機密、向量與資料平面,以至底層雲端基礎設施。每一項發現都讓防護更銳利,每一次防護又招來下一波攻擊。攻與守合為一個循環。這是單點工具做不出來的產品。",
    "The gap today": "現在的破口", "Why you need it": "你為什麼需要它",
    "Most teams can't say how many models and agents they actually run, and only see the AI that passes through the browser. Shadow-AI breaches add USD 670k each. You can't protect what you can't list.":
      "多數團隊說不出自己到底跑了多少模型與代理,而且只看得到經過瀏覽器的 AI。影子 AI 外洩每次平均多花 67 萬美元。列不出來,就保護不了。",
    "One live inventory across cloud, code, OAuth and the office suites, with owners and dependencies, so the board question \"how much AI do we run, and who owns it?\" finally has a real answer.":
      "橫跨雲端、程式碼、OAuth 與辦公套裝的即時清單,附上負責單位與相依關係,讓董事會那句「我們到底跑了多少 AI?誰負責?」終於有確切答案。",
    "Models arrive unsigned from public hubs. Roughly 352,000 unsafe issues were found across 51,700 of them, and attackers have swapped backdoored models into cloud catalogues via namespace reuse.":
      "模型多半未經簽章就從公開平台進來。其中 51,700 個模型被發現約 352,000 項不安全問題,攻擊者更曾以命名空間重用,把含後門的模型塞進雲端目錄。",
    "Every model and dataset is signed and verified on the way in and re-checked against new CVEs. Substitution and unsafe deserialisation are blocked before production, not found after a breach.":
      "每個模型與資料集在進入時都經簽章驗證,並持續對照新 CVE 重檢。替換與不安全的反序列化在上線前就被擋下,而不是出事後才發現。",
    "Agents run on broad, long-lived service keys; 97% of AI-breached organisations lacked proper access controls, so one compromised agent is a standing skeleton key.":
      "代理使用權限過大、長期有效的服務金鑰;97% 發生 AI 外洩的組織缺乏妥善的存取控管,因此一個被攻陷的代理,就是一把長期有效的萬能鑰匙。",
    "Each agent gets its own short-lived, scoped identity with just-in-time access and a tamper-evident receipt. Damage is contained to one session and provable afterwards.":
      "每個代理都有自己短效、限定範圍的身分,搭配即時授權與防竄改存證。損害被侷限在單一工作階段,事後也可舉證。",
    "Prompts, tool calls and inference events never reach your SIEM, so AI incidents leave no forensic trail and the SOC is effectively blind to them.":
      "提示、工具呼叫與推論事件從未進到你的 SIEM,因此 AI 事件沒有任何鑑識軌跡,SOC 形同看不見。",
    "An open, OCSF-aligned record of everything the AI did flows into the SIEM you already run. AI finally has an audit trail you can investigate and retain for regulators.":
      "一份對齊 OCSF 的開放紀錄,把 AI 做過的每件事導入你既有的 SIEM。AI 終於有了可調查、可留存供監理查核的稽核軌跡。",
    "Every tool sees one weak signal; nobody joins injection → tool abuse → credential reuse → exfiltration, so multi-stage AI attacks read as background noise.":
      "每個工具只看到一個微弱訊號;沒人把注入 → 工具濫用 → 憑證重用 → 資料外洩串起來,於是多階段 AI 攻擊被當成背景雜訊。",
    "Cross-layer kill-chain logic fuses those scattered signals into one high-confidence incident in seconds: the attack single-tool stacks never see.":
      "跨層攻擊鏈邏輯在數秒內把這些零散訊號融合成一起高可信度事件,這正是單點工具永遠看不到的攻擊。",
    "After an AI incident, piecing together what the model saw, did and leaked across tools takes hours, but SEC disclosure is four days and attacker hand-off is 22 seconds.":
      "AI 事件發生後,要跨工具拼湊模型看過、做過、外洩過什麼,得花上好幾個小時,但 SEC 揭露時限只有四天,攻擊者接手只要 22 秒。",
    "Full session reconstruction and output-to-source lineage in one place, with one-click revoke, quarantine, rollback and isolate. Contain in minutes, with the evidence already written.":
      "在同一處完成完整對話重建與「輸出回溯來源」的譜系,並可一鍵撤銷、隔離、回滾與封鎖。數分鐘內圍堵,佐證也已自動寫好。",
    "Drift, bias and hallucination sit in notebooks the SOC never sees; a regulated model going wrong is both a quality and a security failure, and nobody catches it in time.":
      "漂移、偏誤與幻覺都躺在 SOC 永遠看不到的 notebook 裡;受監管模型一旦出錯,既是品質問題也是資安事故,卻沒人來得及發現。",
    "The same engine tracks PSI drift, disparate impact and hallucination on your own models. A quality regression also fires as a security signal, with regulator-ready evidence (e.g. credit-risk PD under MAS / Basel III).":
      "同一套引擎追蹤你自有模型的 PSI 漂移、差別影響與幻覺。品質退步同時也觸發資安訊號,並附上可供監理查核的佐證(例如 MAS / Basel III 下的信用風險 PD)。",
    "Red teaming is a six-week-old PDF describing a system that has already changed, and it only tested the model, not the agents, identity, supply chain or cloud beneath it.":
      "紅隊報告是一份六週前的 PDF,描述的是早已改變的系統,而且它只測了模型,沒測底下的代理、身分、供應鏈與雲端。",
    "Automated adversarial testing runs daily in the same data plane across the whole stack; every finding tunes a detection and opens a real incident, so you can answer \"did our controls actually hold this quarter?\" with proof.":
      "自動化對抗測試每天在同一個資料平面、橫跨整個技術棧執行;每項發現都會調校偵測並開立真實事件,讓你能用證據回答「這一季我們的控制措施真的守住了嗎?」。",
    "Everything in AEGIS.": "AEGIS 的完整能力。",
    "AI risk isn't in one neat place. It's across your models, your agents, your supply chain and your people. Here's every gap we close, so you're not buying ten more tools to find out where you stand.":
      "AI 風險不會乖乖待在一個地方。它散落在你的模型、代理、供應鏈與員工之間。以下是我們補上的每一個破口,讓你不必再買十套工具才搞清楚自己的處境。",
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
    "ISO/IEC 42001: clauses 4 to 10, plus Annex A": "ISO/IEC 42001:條款 4 至 10,以及附錄 A",
    "EU AI Act: Art. 9 to 15, Annex IV, post-market & incident duties": "EU AI Act:第 9 至 15 條、附錄 IV、上市後與事件通報義務",
    "NIST AI RMF: GOVERN, MAP, MEASURE, MANAGE": "NIST AI RMF:GOVERN、MAP、MEASURE、MANAGE",
    "Singapore IMDA: Model AI Governance Framework, GenAI & AI Verify": "Singapore IMDA:Model AI Governance Framework、GenAI 與 AI Verify",
    "MAS FEAT principles & OWASP LLM / Agentic Top 10": "MAS FEAT 原則與 OWASP LLM / Agentic Top 10",
    "SEC four-day blast-radius; SOC 2, GDPR, HIPAA, PCI DSS evidence packs": "SEC 四日影響範圍報告;SOC 2、GDPR、HIPAA、PCI DSS 佐證包",
    "10 Executive & full reporting": '<span>10</span> 高階主管與完整報告',
    "Board-grade executive summary: posture score, top risks, trend": "董事會層級的高階摘要:資安態勢評分、首要風險、趨勢",
    "Full technical report across all eight layers with evidence": "涵蓋八層、附佐證的完整技術報告",
    "Regulated model-risk reports (e.g. credit-risk PD, MAS / Basel III)": "受監管模型風險報告(如信用風險 PD、MAS / Basel III)",
    "Per-incident, red-team campaign and workforce-AI DLP reports": "單一事件、紅隊行動與員工 AI DLP 報告",
    "Signed, exportable PDF / JSON; immutable evidence log": "可簽章匯出的 PDF / JSON;不可竄改的佐證紀錄",
    "Scheduled distribution to the CISO, board and regulators": "排程派送給 CISO、董事會與監理機關",
    "How it works": "運作方式", "Live in a day. Value in a week.": "一天上線,一週見效。",
    "No agents on every box, no rip-and-replace. AEGIS reads the signals your stack already emits and adds the ones it doesn't.":
      "不必在每台主機裝代理,也不必汰換現有系統。AEGIS 讀取你技術棧已產生的訊號,並補上它原本沒有的訊號。",
    "Connect": "接入",
    "Point AEGIS at your clouds, gateways and SIEM with read-only roles and an OpenTelemetry collector. No code changes to your apps. Typical first connection: under an hour.":
      "以唯讀角色與一個 OpenTelemetry 收集器,把 AEGIS 指向你的雲端、閘道與 SIEM。應用程式無需改任何程式碼。首次接入通常在一小時內完成。",
    "Discover": "探索",
    "Within the first sweep you get a live inventory of every model, agent, MCP server and vector store, including the shadow AI nobody told you about, with owners and a dependency graph.":
      "首次掃描即取得每個模型、代理、MCP 伺服器與向量資料庫的即時清單,包含沒人告訴你的影子 AI,並附負責單位與相依圖。",
    "Defend": "防禦",
    "Correlation and the continuous red team turn on. Detections are exercised against live attacks daily, and every finding lands as an incident in the same console your SOC already works in.":
      "關聯分析與持續紅隊隨即啟動。偵測每天被實際攻擊演練,每項發現都落入你 SOC 既有的同一個主控台成為事件。",
    "Who uses it": "誰在使用",
    "The teams who never agree, finally on one screen.": "從來喬不攏的幾個團隊,終於看同一個畫面。",
    "Security leadership": "資安管理層",
    "Answer the board with evidence": "用證據向董事會交代",
    "How many agents do we run? What can they reach? Did our controls actually hold last quarter? AEGIS gives you the audit trail behind the answer: dashboards, evidence packs mapped to the EU AI Act, NIST AI RMF and ISO 42001, and disclosure-ready blast-radius reports.":
      "我們跑了多少個代理?它們能存取到什麼?上一季的控制措施真的守住了嗎?AEGIS 給你的是答案背後的稽核軌跡:儀表板、對應 EU AI Act、NIST AI RMF 與 ISO 42001 的佐證包,以及可直接揭露的影響範圍報告。",
    "The SOC": "資安維運中心(SOC)",
    "Investigate AI incidents, not tabs": "調查 AI 事件,而不是切分頁",
    "One pane: prompts, tool calls, identities, models, and data flows. AI-native ATT&CK mapping, one-click containment, and detections that are exercised live by the red-team layer, so you know they work before an attacker tells you they don't.":
      "一個視窗:提示、工具呼叫、身分、模型與資料流。AI 原生的 ATT&CK 對應、一鍵圍堵,偵測由紅隊層即時演練,讓你在攻擊者證明它失效之前,就先知道它有效。",
    "ML & product": "ML 與產品團隊",
    "Ship your models with confidence": "有把握地把模型送上線",
    "Drift, bias, fairness and robustness checks where data scientists already work. Push-button adversarial testing before release and regression alerts on every version. Security consumes the same signals downstream. Velocity without new exposure.":
      "在資料科學家本來就在的地方做漂移、偏誤、公平性與穩健性檢查。上線前一鍵對抗測試,每個版本都有退步告警。資安在下游消費同一份訊號。要速度,但不增加曝險。",
    "Why AEGIS": "為何選 AEGIS",
    "The tools you've already bought don't cover this.": "你已經買的那些工具,守不到這一塊。",
    "What you run today": "你現在用的", "With AEGIS": "改用 AEGIS",
    "Prompt firewalls": "提示防火牆",
    "See text in, text out. Blind to tool calls, identity, lineage and supply chain. Nowhere to investigate.":
      "只看到文字進、文字出。看不到工具呼叫、身分、資料譜系與供應鏈,也無從調查。",
    "AEGIS": "AEGIS",
    "The inline gateway is one of eight layers, all feeding one engine and one investigation console.":
      "行內閘道只是八層之一,全部匯入同一個引擎與同一個調查主控台。",
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
    "The stakes": "風險所在", "The exposure is already here.": "曝險已經發生。",
    "of the Fortune 500 run active AI agents": "的財星 500 大企業已在運行 AI 代理",
    "of organisations lack full visibility into AI identities": "的組織對 AI 身分缺乏完整可視性",
    "of CISOs are confident they could contain a compromised agent": "的 CISO 有信心能圍堵一個被入侵的代理",
    "Microsoft, 2026": "Microsoft，2026", "Cybersecurity Insiders, 2026": "Cybersecurity Insiders，2026",
    "EU AI Act enforcement lands August 2026. SEC disclosure is four business days. Median attacker hand-off is 22 seconds. The time to see your AI is before someone else does.":
      "EU AI Act 將於 <strong>2026 年 8 月</strong> 開始執法。SEC 揭露時限為 <strong>四個營業日</strong>。攻擊者接手的中位時間是 <strong>22 秒</strong>。看清你的 AI,要趕在別人之前。",
    "Sits on top of what you run.": "疊在你既有系統之上。",
    "We instrument where the AI runs, not where it was built, and we don't ask you to rip out your SIEM.":
      "我們在 AI 實際運行的地方做檢測,而不是在它被建構的地方,而且我們不會要你把 SIEM 換掉。",
    "Models & frameworks": "模型與框架",
    "Every major commercial LLM provider and managed model service, the common agent and orchestration frameworks, open agent protocols, and self-hosted inference servers. Same telemetry, same controls.":
      "各主要商用 LLM 供應商與受管模型服務、常見的代理與編排框架、開放代理協定,以及自架推論伺服器。同一份遙測,同一套控管。",
    "SIEM, XDR & identity": "SIEM、XDR 與身分",
    "The major productivity suites and their built-in AI assistants for workforce-AI DLP. Your existing SIEM, XDR and observability stack. Your identity, PAM and governance tooling. Your ITSM and incident-workflow channels.":
      "主要生產力套裝及其內建 AI 助理,用於員工 AI 的 DLP。你既有的 SIEM、XDR 與可觀測性技術棧。你的身分、PAM 與治理工具。你的 ITSM 與事件流程管道。",
    "EU AI Act Annex IV, NIST AI RMF, ISO/IEC 42001, OWASP LLM & Agentic Top 10, SEC disclosure, SOC 2, GDPR. Singapore IMDA, CSA, MAS; FCA, ECB, OCC.":
      "EU AI Act 附錄 IV、NIST AI RMF、ISO/IEC 42001、OWASP LLM 與 Agentic Top 10、SEC 揭露、SOC 2、GDPR。Singapore IMDA、CSA、MAS;FCA、ECB、OCC。",
    "The detail": "細節", "What you actually get.": "你實際得到什麼。",
    "The questions your security, legal and procurement teams will ask in week one, answered here, not after you've signed an NDA.":
      "你的資安、法務與採購團隊第一週就會問的問題,這裡先答清楚,不必等簽完 NDA。",
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
    "Multi-region, active-active. Detections degrade safe; telemetry is never dropped silently.":
      "多區域、雙活架構。偵測採安全降級,遙測絕不會被無聲丟棄。",
    "Regions": "區域",
    "ap-southeast-1, eu-west-1, us-east-1. Data residency pinned per tenant.":
      "ap-southeast-1、eu-west-1、us-east-1。資料落地依租戶綁定。",
    "Assurance": "保證",
    "ISO 27001 in progress. Penetration-tested quarterly; the platform red-teams itself continuously.":
      "ISO 27001 進行中。每季滲透測試;平台亦持續對自身進行紅隊演練。",
    "Commercial": "商業模式", "Platform + usage": "平台費 + 用量",
    "Annual platform fee plus asset- and event-based metering, so cost rolls to the AI initiative budget.":
      "年度平台費,加上以資產與事件計量,讓成本歸入 AI 專案預算。",
    "Questions": "常見問題", "Before you ask.": "在你開口之前。",
    "Do you replace our SIEM?": "你們會取代我們的 SIEM 嗎?",
    "No. AEGIS is built to sit on top of the SIEM you already run. We make it AI-fluent and feed it correlated incidents in OCSF.":
      "不會。AEGIS 設計上就是疊在你既有的 SIEM 之上。我們讓它聽得懂 AI,並以 OCSF 餵入關聯後的事件。",
    "How is this different from an AI firewall?": "這跟 AI 防火牆有什麼不同?",
    "A prompt firewall sees text in and text out. AEGIS also sees tool calls, agent identity, model lineage and supply chain, and correlates them. The gateway is one of eight layers, not the whole product.":
      "提示防火牆只看到文字進、文字出。AEGIS 還看得到工具呼叫、代理身分、模型譜系與供應鏈,並把它們關聯起來。閘道只是八層之一,不是產品全貌。",
    "Does our prompt data leave our environment?": "我們的提示資料會離開我們的環境嗎?",
    "Not by default. The data plane runs in your region or your VPC. You choose what is redacted before anything is stored, and content can stay entirely in your tenant.":
      "預設不會。資料平面在你所在區域或你的 VPC 內運行。儲存前由你決定要遮蔽什麼,內容可完全留在你的租戶內。",
    "Can you see employee AI use across our office suites?": "你們看得到員工在辦公套裝裡使用 AI 的情況嗎?",
    "Yes. AEGIS watches workforce AI across the major productivity suites: their built-in office AI assistants, connected GPTs and browser LLMs. It flags data loss (PII, source code, secrets or regulated data leaving into an AI surface) and harmful use, with the user, the data class and a one-click block. It complements your CASB and DLP rather than replacing them.":
      "可以。AEGIS 監看主要生產力套裝中的員工 AI 使用:內建辦公 AI 助理、連接的 GPT 與瀏覽器 LLM。它會標記資料外洩(PII、原始碼、機密或受監管資料流入 AI 介面)與有害使用,附上使用者、資料類別與一鍵阻擋。它是你 CASB 與 DLP 的補強,而非取代。",
    "What does onboarding look like?": "導入流程是什麼樣子?",
    "Read-only cloud roles plus a collector. First inventory inside the first sweep, correlation and continuous red team typically live within the first week. No app code changes.":
      "唯讀雲端角色,加上一個收集器。首次掃描即產出清單,關聯分析與持續紅隊通常在第一週內上線。應用程式無需改任何程式碼。",
    "Which models and frameworks are supported?": "支援哪些模型與框架?",
    "Every major commercial LLM provider and managed model service, the common agent and orchestration frameworks, open agent protocols, and self-hosted inference servers. Same telemetry, same controls, wherever the AI runs.":
      "各主要商用 LLM 供應商與受管模型服務、常見的代理與編排框架、開放代理協定,以及自架推論伺服器。不論 AI 在哪裡運行,都是同一份遙測、同一套控管。",
    "Can it audit us against ISO 42001, the EU AI Act and Singapore's frameworks?": "它能幫我們對 ISO 42001、EU AI Act 與新加坡的框架做稽核嗎?",
    "Yes. AEGIS runs one-click, scored conformity audits for ISO/IEC 42001, the EU AI Act, NIST AI RMF, the Singapore IMDA Model AI Governance Framework (incl. GenAI & AI Verify), MAS FEAT and OWASP. Each control is mapped to live platform evidence, with findings, remediation and an exportable report. Executive board packs and full technical reports are generated from the same live data.":
      "可以。AEGIS 對 ISO/IEC 42001、EU AI Act、NIST AI RMF、Singapore IMDA Model AI Governance Framework(含 GenAI 與 AI Verify)、MAS FEAT 與 OWASP 執行一鍵、評分式符合性稽核。每項控制都對應到平台的即時佐證,並附發現、改善建議與可匯出的報告。高階董事會包與完整技術報告皆由同一份即時資料產生。",
    "Is the continuous red team safe to run in production?": "持續紅隊在正式環境執行安全嗎?",
    "Yes. Attacks run with safe-execution scaffolding against production-equivalent targets. Findings open as incidents in the same console; purple-team by design.":
      "安全。攻擊在安全執行框架下,針對與正式環境等價的目標進行。發現會在同一主控台開立為事件;設計上即是紫隊。",
    "See the platform in action.": "看平台實際運作。",
    "A 30-minute guided run-through of the platform. Tell us a little about your context and we'll focus on what matters to you.":
      "30 分鐘的平台導覽解說。簡單告訴我們你的情況,我們會聚焦在你最在意的地方。",
    "That's the whole platform, not a slide deck.": "這就是平台的全部,不是一份簡報。",
    "A 30-minute guided run-through of the whole platform.": "30 分鐘,完整導覽整個平台。",
    "Name": "姓名", "Work email": "公司電子郵件", "Company": "公司", "Role": "職稱",
    "What would you like to see?": "你想看到什麼?", "Request a demo": "預約展示",
    "Enterprises": "企業",
    "Design-partner cohort across financial services, healthcare and regulated sectors. Co-design detections for your jurisdiction.":
      "橫跨金融、醫療與受監管產業的設計夥伴計畫。一起為你的司法管轄區共同設計偵測。",
    "Investors": "投資人",
    "Market sizing, competitive analysis and risk review available to qualified institutional investors under NDA.":
      "市場規模、競爭分析與風險評估,於 NDA 下提供予合格機構投資人。",
    "Engineers": "工程人才",
    "Hiring in Singapore, Tel Aviv, San Francisco and London: offensive AI research, ML platform, detection content.":
      "於新加坡、特拉維夫、舊金山與倫敦招募:攻擊性 AI 研究、ML 平台、偵測內容。",
    "Security operations for AI.": "AI 的資安維運平台。",
    "Sign in to the console →": "登入主控台 →",
    "AEGIS·AI is a product of Hesed & Emet Advisory Pte Ltd.": "AEGIS·AI 是 Hesed & Emet Advisory Pte Ltd 的產品。",
    "← Back to Hesed & Emet": "← 返回 Hesed & Emet",
    "#42-00, Suntec Tower Three, 8 Temasek Blvd, Singapore 038988":
      "新加坡 Suntec Tower Three #42-00,8 Temasek Blvd,038988",
    "+65 6829 2146": "+65 6829 2146",
    "© 2026 Hesed & Emet Advisory Pte Ltd. All rights reserved.":
      "© 2026 Hesed & Emet Advisory Pte Ltd. 版權所有。"
  };

  var ZH_HANS = {
    "Product": "产品", "Platform": "平台", "Capabilities": "完整功能",
    "Teams": "适用团队", "Why AEGIS": "为何选 AEGIS", "Integrations": "集成",
    "Sign in": "登录", "Book a demo": "预约演示",
    "Security operations for AI": "面向 AI 的安全运营平台",
    "You can't secure the AI you can't see.": "看不见的 AI，守不住。",
    "AEGIS finds every model, agent, and prompt running in your business, sanctioned or not. It watches what they do, and proves your defences actually hold. One console, instead of seven tools that don't talk to each other.":
      "AEGIS 会找出企业内每一个模型、智能体与提示,无论是否经过审批。它持续监控它们的行为,并验证你的防护是否真的守得住。一个控制台,取代七套互不相通的工具。",
    "Launch the console": "进入控制台", "Book a live demo": "预约实机演示",
    "Built for the SOC": "为 SOC 而生", "Works with your SIEM": "兼容现有 SIEM",
    "Cloud & model agnostic": "不绑定云、不绑定模型",
    "aegis · live operations": "aegis · 实时运营",
    "Inference volume · last 24h": "推理流量 · 近 24 小时",
    "Live activity": "实时动态", "Overview": "概览", "Discovery": "资产发现",
    "Identities": "身份", "Telemetry": "遥测", "Kill chain": "攻击链",
    "Red team": "红队演练", "Compliance": "合规", "Assets": "资产",
    "Open incidents": "未结事件", "Red-team coverage": "红队覆盖率", "Shadow AI": "影子 AI",
    "Inference volume · last 6h": "推理流量 · 近 6 小时",
    "Multi-stage attack · incident #4471": "多阶段攻击 · 事件 #4471",
    "Prompt injection": "提示注入", "via support ticket": "经由客服工单",
    "Tool call abused": "工具调用遭滥用", "internal search API": "内部搜索 API",
    "Credential reuse": "凭据重用", "agent svc-rag-07": "智能体 svc-rag-07",
    "Data exfiltration": "数据外泄", "blocked by AEGIS": "已被 AEGIS 拦截",
    "Four low-signal events. One correlated incident. Single-tool stacks see none of this.":
      "四个低信号事件，关联成一起事件。单点工具完全看不到这条链。",
    "Continuous full-stack red team · run rt-2026-0517": "全栈持续红队 · 执行 rt-2026-0517",
    "LLM · indirect prompt injection · 142 variants": "LLM · 间接提示注入 · 142 种变体",
    "Agent kill-chain · confused-deputy tool abuse": "智能体攻击链 · 混淆代理人工具滥用",
    "Identity · over-scoped agent token reachable": "身份 · 权限过大的智能体令牌可被获取",
    "Supply chain · model namespace substitution": "供应链 · 模型命名空间替换",
    "Cloud infra · IMDS / GPU node escape attempts": "云基础设施 · IMDS / GPU 节点逃逸尝试",
    "Model, agents, identity, supply chain and the cloud underneath: every finding opens an incident in the same console.":
      "模型、智能体、身份、供应链,直至底层云,每一项发现都会在同一个控制台开立事件。",
    "AI asset inventory · 1,284 discovered": "AI 资产清单 · 已发现 1,284 项",
    "Asset": "资产", "Type": "类型", "Owner": "负责单位", "Status": "状态",
    "Model": "模型", "Agent": "智能体", "MCP server": "MCP 服务器",
    "Lending": "信贷", "Support": "客服", "Risk": "风险",
    "Verified": "已验证", "Re-scan": "待重扫", "Shadow": "影子资产",
    "Most teams run seven or more disconnected AI security tools and still can't answer one question: is our AI safe right now?":
      "多数团队用着七套以上互不相通的 AI 安全工具,却仍答不出一个问题:<em>我们的 AI 现在安全吗?</em>",
    "The product": "产品",
    "Stop tab-hopping between tools that don't talk.": "别再在互不相通的工具之间来回切换。",
    "When your AI does something it shouldn't, the clock is already running. You shouldn't be logging into five consoles to work out what happened. Start at the incident, see the whole session and where it led, and shut it down in one click.":
      "当你的 AI 出问题,时间已在倒数。你不该为了弄清楚发生了什么而登录五个控制台。直接从事件看起,掌握整段会话与它的去向,一键阻断。",
    "Live overview": "实时概览", "Asset inventory": "资产清单",
    "The platform": "平台", "Eight layers. One data plane.": "八个层次,同一个数据平面。",
    "You bought seven point tools and still can't connect them. AEGIS is eight layers writing to one record, so the weak signal everyone else ignores becomes an incident you can act on.":
      "你买了七套单点工具,却仍串不起来。AEGIS 是写入同一份记录的八个层次,别人忽略的微弱信号,在这里会成为你可处置的事件。",
    "Asset & workforce AI discovery": "资产与员工 AI 使用发现",
    "A live inventory of every model, agent, MCP server, vector store and prompt, plus how employees use AI across the major productivity suites, including built-in office AI assistants and browser LLMs. Sanctioned or shadow, you see it.":
      "实时盘点每一个模型、智能体、MCP 服务器、向量数据库与提示,并掌握员工在主流办公套件中如何使用 AI,包含内置办公 AI 助手与浏览器 LLM。无论已审批或属影子资产,皆一览无遗。",
    "Supply chain & provenance": "供应链与来源验证",
    "Every model and dataset is signed, verified at ingestion, and re-checked against new threats. Namespace-substitution and unsafe deserialisation get caught on the way in.":
      "每个模型与数据集都经签名,于导入时验证,并持续对照新威胁重新检查。命名空间替换与不安全的反序列化,在进入当下即被拦下。",
    "Identity for AI": "AI 的身份治理",
    "Treat every agent and inference call as its own identity. Short-lived scoped credentials, just-in-time access, and a tamper-evident receipt for every action.":
      "把每一个智能体与推理调用都视为独立身份。短时效、限定范围的凭据,即时授权,并为每个动作留下防篡改的存证。",
    "The data lake": "数据湖",
    "An open telemetry schema that captures every prompt, completion, tool call, and inference event, and pipes straight into the SIEM you already run.":
      "开放式遥测结构,完整采集每个提示、回复、工具调用与推理事件,并直接接入你现有的 SIEM。",
    "Correlation": "关联分析",
    "AI kill-chain logic that turns scattered, low-signal events into one incident: injection to tool abuse to credential reuse to exfiltration.":
      "AI 攻击链逻辑,把零散的低信号事件收敛成一起事件:从注入、工具滥用、凭据重用,一路到数据外泄。",
    "Investigate & respond": "调查与响应",
    "Reconstruct the full session, trace output back to its source, and respond in one click: revoke an agent, quarantine a model, roll back a prompt, isolate a store.":
      "重建完整会话,把输出追溯回源头,并一键响应:吊销智能体、隔离模型、回滚提示、封锁向量数据库。",
    "Model assurance": "模型质量保障",
    "Drift, bias, and hallucination tracking for the models you build, wired into the same engine, so a quality regression also reads as a security signal.":
      "为你自建的模型追踪漂移、偏差与幻觉,并接入同一套引擎,因此质量回退同时也是一个安全信号。",
    "Continuous full-stack red team": "全栈持续红队演练", "Flagship": "旗舰功能",
    "Red teaming stops being a PDF from six weeks ago. It runs every day, inside the same data plane as your detections, and it doesn't just probe the model. It attacks the whole stack that hosts your AI: agents and their kill chains, MCP servers and tools, the model supply chain, non-human identities and secrets, the vector and data plane, and the cloud infrastructure underneath. Every finding sharpens a defence; every defence invites the next attack. Attack and defence become one loop. It is the product no point tool can rebuild.":
      "红队不再是六周前的一份 PDF。它每天运行,与你的检测共用同一个数据平面,而且不只测试模型,而是攻击承载 AI 的整个技术栈:智能体及其攻击链、MCP 服务器与工具、模型供应链、非人类身份与密钥、向量与数据平面,直至底层云基础设施。每一项发现都让防护更锋利,每一次防护又招来下一波攻击。攻与守合为一个闭环。这是单点工具做不出来的产品。",
    "The gap today": "当下的缺口", "Why you need it": "你为什么需要它",
    "Most teams can't say how many models and agents they actually run, and only see the AI that passes through the browser. Shadow-AI breaches add USD 670k each. You can't protect what you can't list.":
      "多数团队说不出自己到底跑了多少模型与智能体,而且只看得到经过浏览器的 AI。影子 AI 泄露每次平均多花 67 万美元。列不出来,就保护不了。",
    "One live inventory across cloud, code, OAuth and the office suites, with owners and dependencies, so the board question \"how much AI do we run, and who owns it?\" finally has a real answer.":
      "横跨云、代码、OAuth 与办公套件的实时清单,附上负责单位与依赖关系,让董事会那句「我们到底跑了多少 AI?谁负责?」终于有确切答案。",
    "Models arrive unsigned from public hubs. Roughly 352,000 unsafe issues were found across 51,700 of them, and attackers have swapped backdoored models into cloud catalogues via namespace reuse.":
      "模型大多未经签名就从公开平台进来。其中 51,700 个模型被发现约 352,000 项不安全问题,攻击者还曾以命名空间重用,把带后门的模型塞进云目录。",
    "Every model and dataset is signed and verified on the way in and re-checked against new CVEs. Substitution and unsafe deserialisation are blocked before production, not found after a breach.":
      "每个模型与数据集在进入时都经签名验证,并持续对照新 CVE 重检。替换与不安全的反序列化在上线前就被拦下,而不是出事后才发现。",
    "Agents run on broad, long-lived service keys; 97% of AI-breached organisations lacked proper access controls, so one compromised agent is a standing skeleton key.":
      "智能体使用权限过大、长期有效的服务密钥;97% 发生 AI 泄露的组织缺乏妥善的访问控制,因此一个被攻陷的智能体,就是一把长期有效的万能钥匙。",
    "Each agent gets its own short-lived, scoped identity with just-in-time access and a tamper-evident receipt. Damage is contained to one session and provable afterwards.":
      "每个智能体都有自己短时效、限定范围的身份,配合即时授权与防篡改存证。损害被限制在单一会话,事后也可举证。",
    "Prompts, tool calls and inference events never reach your SIEM, so AI incidents leave no forensic trail and the SOC is effectively blind to them.":
      "提示、工具调用与推理事件从未进到你的 SIEM,因此 AI 事件没有任何取证轨迹,SOC 形同看不见。",
    "An open, OCSF-aligned record of everything the AI did flows into the SIEM you already run. AI finally has an audit trail you can investigate and retain for regulators.":
      "一份对齐 OCSF 的开放记录,把 AI 做过的每件事接入你现有的 SIEM。AI 终于有了可调查、可留存供监管核查的审计轨迹。",
    "Every tool sees one weak signal; nobody joins injection → tool abuse → credential reuse → exfiltration, so multi-stage AI attacks read as background noise.":
      "每个工具只看到一个微弱信号;没人把注入 → 工具滥用 → 凭据重用 → 数据外泄串起来,于是多阶段 AI 攻击被当成背景噪声。",
    "Cross-layer kill-chain logic fuses those scattered signals into one high-confidence incident in seconds: the attack single-tool stacks never see.":
      "跨层攻击链逻辑在数秒内把这些零散信号融合成一起高可信度事件,这正是单点工具永远看不到的攻击。",
    "After an AI incident, piecing together what the model saw, did and leaked across tools takes hours, but SEC disclosure is four days and attacker hand-off is 22 seconds.":
      "AI 事件发生后,要跨工具拼凑模型看过、做过、泄露过什么,得花上好几个小时,但 SEC 披露时限只有四天,攻击者接手只要 22 秒。",
    "Full session reconstruction and output-to-source lineage in one place, with one-click revoke, quarantine, rollback and isolate. Contain in minutes, with the evidence already written.":
      "在同一处完成完整会话重建与「输出回溯来源」的谱系,并可一键吊销、隔离、回滚与封锁。数分钟内围堵,证据也已自动写好。",
    "Drift, bias and hallucination sit in notebooks the SOC never sees; a regulated model going wrong is both a quality and a security failure, and nobody catches it in time.":
      "漂移、偏差与幻觉都躺在 SOC 永远看不到的 notebook 里;受监管模型一旦出错,既是质量问题也是安全事故,却没人来得及发现。",
    "The same engine tracks PSI drift, disparate impact and hallucination on your own models. A quality regression also fires as a security signal, with regulator-ready evidence (e.g. credit-risk PD under MAS / Basel III).":
      "同一套引擎追踪你自有模型的 PSI 漂移、差别影响与幻觉。质量回退同时也触发安全信号,并附上可供监管核查的证据(例如 MAS / Basel III 下的信用风险 PD)。",
    "Red teaming is a six-week-old PDF describing a system that has already changed, and it only tested the model, not the agents, identity, supply chain or cloud beneath it.":
      "红队报告是一份六周前的 PDF,描述的是早已改变的系统,而且它只测了模型,没测底下的智能体、身份、供应链与云。",
    "Automated adversarial testing runs daily in the same data plane across the whole stack; every finding tunes a detection and opens a real incident, so you can answer \"did our controls actually hold this quarter?\" with proof.":
      "自动化对抗测试每天在同一个数据平面、横跨整个技术栈运行;每项发现都会调校检测并开立真实事件,让你能用证据回答「这一季我们的控制措施真的守住了吗?」。",
    "Everything in AEGIS.": "AEGIS 的全部能力。",
    "AI risk isn't in one neat place. It's across your models, your agents, your supply chain and your people. Here's every gap we close, so you're not buying ten more tools to find out where you stand.":
      "AI 风险不会乖乖待在一个地方。它散落在你的模型、智能体、供应链与员工之间。以下是我们补上的每一个缺口,让你不必再买十套工具才弄清楚自己的处境。",
    "01 Discovery & workforce AI": '<span>01</span> 发现与员工 AI 使用',
    "Continuous inventory: models, agents, MCP servers, vector stores, prompts, datasets": "持续盘点:模型、智能体、MCP 服务器、向量数据库、提示、数据集",
    "Shadow-AI discovery via browser, OAuth, network and code scanning": "通过浏览器、OAuth、网络与代码扫描发现影子 AI",
    "Employee AI use across the major productivity suites & their office AI assistants": "掌握员工在主流办公套件及其办公 AI 助手中的使用情况",
    "Data-loss detection: PII, source code, secrets, PHI/PCI into any AI surface": "数据泄露检测:PII、源代码、密钥、PHI/PCI 流入任何 AI 界面",
    "Harmful-use detection with one-click block; complements CASB/DLP": "有害使用检测并可一键拦截;与 CASB/DLP 互补",
    "Live dependency graph: which app uses which model, agent and tool": "实时依赖图:哪个应用使用了哪个模型、智能体与工具",
    "02 Supply chain & provenance": '<span>02</span> 供应链与来源验证',
    "Cryptographic signature verification at ingestion and re-verification over time": "导入时进行密码学签名验证,并随时间持续重新验证",
    "Model namespace-reuse / substitution detection": "模型命名空间重用 / 替换检测",
    "Pickle & safetensors deserialisation scanning (nullifAI class)": "Pickle 与 safetensors 反序列化扫描(nullifAI 类型)",
    "CycloneDX ML-BOM and SPDX 3.0.1 AI/Dataset profiles": "CycloneDX ML-BOM 与 SPDX 3.0.1 AI/数据集规范",
    "Dataset licence verification and provenance tracing": "数据集许可验证与来源追溯",
    "Continuous re-scan against new CVEs and threat intel": "对照新 CVE 与威胁情报持续重新扫描",
    "03 Identity for AI": '<span>03</span> AI 身份治理',
    "Non-human identity governance for models, agents and MCP servers": "为模型、智能体与 MCP 服务器治理非人类身份(NHI)",
    "Just-in-time, short-lived scoped credentials, destroyed on session end": "即时、短时效、限定范围的凭据,会话结束即销毁",
    "Attribute- and intent-based access control for tool invocation": "基于属性与意图的工具调用访问控制",
    "Tamper-evident audit receipt for every action": "每个动作均留下防篡改的审计存证",
    "Native integration with your identity, PAM and access-governance tooling": "原生集成你的身份、PAM 与访问治理工具",
    "04 Telemetry & data lake": '<span>04</span> 遥测与数据湖',
    "Open, OCSF-aligned schema for every prompt, completion and tool call": "对齐 OCSF 的开放结构,覆盖每个提示、回复与工具调用",
    "Agent-to-agent (A2A) and MCP transaction capture": "采集智能体对智能体(A2A)与 MCP 交易",
    "RAG retrieval, embedding query and vector-store events": "RAG 检索、嵌入查询与向量数据库事件",
    "GPU / DPU-level inference event capture": "GPU / DPU 层级的推理事件采集",
    "Pipes natively into your existing SIEM and observability stack": "原生接入你现有的 SIEM 与可观测性技术栈",
    "05 Correlation & the AI kill chain": '<span>05</span> 关联分析与 AI 攻击链',
    "Prompt injection → unauthorised tool-call chains": "提示注入 → 未授权的工具调用链",
    "Compositional exfiltration: permitted actions that add up to a breach": "组合式外泄:多个被允许的动作,合起来就是一次泄露",
    "System-prompt drift and tampering detection": "系统提示漂移与篡改检测",
    "Cross-session credential reuse by an agent identity": "智能体身份跨会话的凭据重用",
    "Membership inference and training-data extraction detection": "成员推断与训练数据提取检测",
    "Model namespace substitution between SDK pull and provenance": "SDK 拉取与来源记录之间的模型命名空间替换",
    "06 Investigation & response": '<span>06</span> 调查与响应',
    "Full multi-turn session reconstruction": "完整重建多轮会话",
    "Lineage: output → model → training data → retrieval source": "数据谱系:输出 → 模型 → 训练数据 → 检索来源",
    "Hallucination, jailbreak and exfiltration triage workflows": "幻觉、越狱与外泄的分流处理流程",
    "One-click: revoke agent, quarantine model, roll back prompt, isolate store": "一键:吊销智能体、隔离模型、回滚提示、封锁向量库",
    "AI-native MITRE-style ATT&CK mapping": "AI 原生的 MITRE ATT&CK 式映射",
    "07 Model assurance & in-house AI": '<span>07</span> 模型质量保障与自建 AI',
    "Population stability (PSI) and per-feature drift monitoring": "总体稳定度(PSI)与逐特征漂移监控",
    "AUC / Gini performance tracking with regression alerts on new versions": "AUC / Gini 绩效追踪,新版本回退即告警",
    "Disparate-impact & bias on protected attributes (e.g. age, geo proxy)": "受保护属性的差别影响与偏差(如年龄、地区代理变量)",
    "Explainability / SHAP coverage and unexplained-decision rate": "可解释性 / SHAP 覆盖率与无法解释决策比率",
    "Regulated-model risk packs (e.g. credit-risk PD under MAS / Basel III)": "受监管模型的风险包(如 MAS / Basel III 下的信用风险 PD)",
    "Integrates with your experiment-tracking and ML platform tools": "集成你的实验追踪与 ML 平台工具",
    "08 Continuous full-stack red team": '<span>08</span> 全栈持续红队演练',
    "LLM: OWASP LLM Top 10, refreshed jailbreak & injection libraries": "LLM:OWASP LLM Top 10、持续更新的越狱与注入手法库",
    "Agents: kill-chain execution, confused-deputy, compositional exfiltration": "智能体:攻击链执行、混淆代理人、组合式外泄",
    "MCP & tools: tool-poisoning and description-injection": "MCP 与工具:工具投毒与描述注入",
    "Supply chain: namespace-reuse, pickle deserialisation": "供应链:命名空间重用、pickle 反序列化",
    "Identity & secrets: over-scoped tokens, credential abuse": "身份与密钥:权限过大的令牌、凭据滥用",
    "Cloud & infra: IMDS, GPU-node and container escape attempts": "云与基础设施:IMDS、GPU 节点与容器逃逸尝试",
    "Data & network: vector-store egress and DLP-bypass simulation": "数据与网络:向量库外送与 DLP 绕过模拟",
    "Purple-team: every finding opens an incident in the same console": "紫队:每项发现都在同一控制台开立事件",
    "09 Compliance & governance": '<span>09</span> 合规与治理',
    "One-click automated audits, scored with an exportable report, for:": "<b>一键自动化审计</b>,评分并可导出报告,覆盖:",
    "ISO/IEC 42001: clauses 4 to 10, plus Annex A": "ISO/IEC 42001:条款 4 至 10,以及附录 A",
    "EU AI Act: Art. 9 to 15, Annex IV, post-market & incident duties": "EU AI Act:第 9 至 15 条、附录 IV、上市后与事件报告义务",
    "NIST AI RMF: GOVERN, MAP, MEASURE, MANAGE": "NIST AI RMF:GOVERN、MAP、MEASURE、MANAGE",
    "Singapore IMDA: Model AI Governance Framework, GenAI & AI Verify": "Singapore IMDA:Model AI Governance Framework、GenAI 与 AI Verify",
    "MAS FEAT principles & OWASP LLM / Agentic Top 10": "MAS FEAT 原则与 OWASP LLM / Agentic Top 10",
    "SEC four-day blast-radius; SOC 2, GDPR, HIPAA, PCI DSS evidence packs": "SEC 四日影响范围报告;SOC 2、GDPR、HIPAA、PCI DSS 证据包",
    "10 Executive & full reporting": '<span>10</span> 高管与完整报告',
    "Board-grade executive summary: posture score, top risks, trend": "董事会层级的高管摘要:安全态势评分、首要风险、趋势",
    "Full technical report across all eight layers with evidence": "覆盖八层、附证据的完整技术报告",
    "Regulated model-risk reports (e.g. credit-risk PD, MAS / Basel III)": "受监管模型风险报告(如信用风险 PD、MAS / Basel III)",
    "Per-incident, red-team campaign and workforce-AI DLP reports": "单一事件、红队行动与员工 AI DLP 报告",
    "Signed, exportable PDF / JSON; immutable evidence log": "可签名导出的 PDF / JSON;不可篡改的证据记录",
    "Scheduled distribution to the CISO, board and regulators": "按计划分发给 CISO、董事会与监管机构",
    "How it works": "运作方式", "Live in a day. Value in a week.": "一天上线,一周见效。",
    "No agents on every box, no rip-and-replace. AEGIS reads the signals your stack already emits and adds the ones it doesn't.":
      "不必在每台主机装代理,也不必更换现有系统。AEGIS 读取你技术栈已产生的信号,并补上它原本没有的信号。",
    "Connect": "接入",
    "Point AEGIS at your clouds, gateways and SIEM with read-only roles and an OpenTelemetry collector. No code changes to your apps. Typical first connection: under an hour.":
      "用只读角色与一个 OpenTelemetry 采集器,把 AEGIS 指向你的云、网关与 SIEM。应用程序无需改任何代码。首次接入通常在一小时内完成。",
    "Discover": "发现",
    "Within the first sweep you get a live inventory of every model, agent, MCP server and vector store, including the shadow AI nobody told you about, with owners and a dependency graph.":
      "首次扫描即取得每个模型、智能体、MCP 服务器与向量数据库的实时清单,包含没人告诉你的影子 AI,并附负责单位与依赖图。",
    "Defend": "防御",
    "Correlation and the continuous red team turn on. Detections are exercised against live attacks daily, and every finding lands as an incident in the same console your SOC already works in.":
      "关联分析与持续红队随即启动。检测每天被真实攻击演练,每项发现都落入你 SOC 既有的同一个控制台成为事件。",
    "Who uses it": "谁在使用",
    "The teams who never agree, finally on one screen.": "向来谈不拢的几个团队,终于看同一个画面。",
    "Security leadership": "安全管理层",
    "Answer the board with evidence": "用证据向董事会交代",
    "How many agents do we run? What can they reach? Did our controls actually hold last quarter? AEGIS gives you the audit trail behind the answer: dashboards, evidence packs mapped to the EU AI Act, NIST AI RMF and ISO 42001, and disclosure-ready blast-radius reports.":
      "我们跑了多少个智能体?它们能访问到什么?上一季的控制措施真的守住了吗?AEGIS 给你的是答案背后的审计轨迹:仪表板、对应 EU AI Act、NIST AI RMF 与 ISO 42001 的证据包,以及可直接披露的影响范围报告。",
    "The SOC": "安全运营中心(SOC)",
    "Investigate AI incidents, not tabs": "调查 AI 事件,而不是切标签页",
    "One pane: prompts, tool calls, identities, models, and data flows. AI-native ATT&CK mapping, one-click containment, and detections that are exercised live by the red-team layer, so you know they work before an attacker tells you they don't.":
      "一个视图:提示、工具调用、身份、模型与数据流。AI 原生的 ATT&CK 映射、一键围堵,检测由红队层实时演练,让你在攻击者证明它失效之前,就先知道它有效。",
    "ML & product": "ML 与产品团队",
    "Ship your models with confidence": "有把握地把模型送上线",
    "Drift, bias, fairness and robustness checks where data scientists already work. Push-button adversarial testing before release and regression alerts on every version. Security consumes the same signals downstream. Velocity without new exposure.":
      "在数据科学家本就所在的地方做漂移、偏差、公平性与鲁棒性检查。上线前一键对抗测试,每个版本都有回退告警。安全在下游消费同一份信号。要速度,但不增加暴露面。",
    "Why AEGIS": "为何选 AEGIS",
    "The tools you've already bought don't cover this.": "你已经买的那些工具,守不到这一块。",
    "What you run today": "你现在用的", "With AEGIS": "改用 AEGIS",
    "Prompt firewalls": "提示防火墙",
    "See text in, text out. Blind to tool calls, identity, lineage and supply chain. Nowhere to investigate.":
      "只看到文字进、文字出。看不到工具调用、身份、数据谱系与供应链,也无从调查。",
    "AEGIS": "AEGIS",
    "The inline gateway is one of eight layers, all feeding one engine and one investigation console.":
      "内联网关只是八层之一,全部汇入同一个引擎与同一个调查控制台。",
    "AI-BOM scanners": "AI-BOM 扫描器",
    "A snapshot in time, disconnected from runtime. No re-verification, no response.":
      "只是某一刻的快照,与运行期脱节。没有重新验证,也没有响应。",
    "Inventory is continuous and signed, and feeds detections that catch model substitution at runtime.":
      "清单是持续且经签名的,并驱动检测,在运行期拦下模型替换。",
    "Red-team firms": "红队咨询公司",
    "A report describing a system that has already changed. No link to live detections.":
      "一份描述早已改变的系统的报告,且与实时检测毫无关联。",
    "Red teaming runs continuously in the same data plane. Findings tune detections the same day.":
      "红队在同一个数据平面持续运行,发现当天就反馈调校检测。",
    "Hyperscaler bundles": "云巨头捆绑方案",
    "One cloud's identity, SIEM and models. Multi-cloud teams are stranded.":
      "绑定单一云的身份、SIEM 与模型。多云团队会被卡死。",
    "Cloud-, model- and SIEM-agnostic. Built to sit on top of what you already run.":
      "不绑定云、不绑定模型、不绑定 SIEM。设计上就是叠在你既有系统之上。",
    "The stakes": "风险所在", "The exposure is already here.": "暴露面已经发生。",
    "of the Fortune 500 run active AI agents": "的财富 500 强企业已在运行 AI 智能体",
    "of organisations lack full visibility into AI identities": "的组织对 AI 身份缺乏完整可见性",
    "of CISOs are confident they could contain a compromised agent": "的 CISO 有信心能围堵一个被入侵的智能体",
    "Microsoft, 2026": "Microsoft，2026", "Cybersecurity Insiders, 2026": "Cybersecurity Insiders，2026",
    "EU AI Act enforcement lands August 2026. SEC disclosure is four business days. Median attacker hand-off is 22 seconds. The time to see your AI is before someone else does.":
      "EU AI Act 将于 <strong>2026 年 8 月</strong> 开始执法。SEC 披露时限为 <strong>四个工作日</strong>。攻击者接手的中位时间是 <strong>22 秒</strong>。看清你的 AI,要赶在别人之前。",
    "Sits on top of what you run.": "叠在你既有系统之上。",
    "We instrument where the AI runs, not where it was built, and we don't ask you to rip out your SIEM.":
      "我们在 AI 实际运行的地方做埋点,而不是在它被构建的地方,而且我们不会要你把 SIEM 换掉。",
    "Models & frameworks": "模型与框架",
    "Every major commercial LLM provider and managed model service, the common agent and orchestration frameworks, open agent protocols, and self-hosted inference servers. Same telemetry, same controls.":
      "各主流商用 LLM 供应商与托管模型服务、常见的智能体与编排框架、开放智能体协议,以及自托管推理服务器。同一份遥测,同一套控制。",
    "SIEM, XDR & identity": "SIEM、XDR 与身份",
    "The major productivity suites and their built-in AI assistants for workforce-AI DLP. Your existing SIEM, XDR and observability stack. Your identity, PAM and governance tooling. Your ITSM and incident-workflow channels.":
      "主流办公套件及其内置 AI 助手,用于员工 AI 的 DLP。你现有的 SIEM、XDR 与可观测性技术栈。你的身份、PAM 与治理工具。你的 ITSM 与事件流程渠道。",
    "EU AI Act Annex IV, NIST AI RMF, ISO/IEC 42001, OWASP LLM & Agentic Top 10, SEC disclosure, SOC 2, GDPR. Singapore IMDA, CSA, MAS; FCA, ECB, OCC.":
      "EU AI Act 附录 IV、NIST AI RMF、ISO/IEC 42001、OWASP LLM 与 Agentic Top 10、SEC 披露、SOC 2、GDPR。Singapore IMDA、CSA、MAS;FCA、ECB、OCC。",
    "The detail": "细节", "What you actually get.": "你实际得到什么。",
    "The questions your security, legal and procurement teams will ask in week one, answered here, not after you've signed an NDA.":
      "你的安全、法务与采购团队第一周就会问的问题,这里先答清楚,不必等签完 NDA。",
    "Deployment": "部署", "SaaS or in-VPC": "SaaS 或 VPC 内",
    "Fully managed, or deployed inside your own cloud account. The data plane can run air-gapped.":
      "完全托管,或部署在你自己的云账号内。数据平面可在隔离(air-gapped)环境运行。",
    "Your data": "你的数据", "Stays in your tenant": "留在你的租户内",
    "Telemetry is processed in your region. Prompt and completion content never leaves your boundary by default.":
      "遥测在你所在区域处理。默认情况下,提示与回复内容绝不离开你的边界。",
    "Access": "访问",
    "Works with any standards-based identity provider. Role-based access, scoped API tokens, full admin audit log.":
      "支持任何符合标准的身份提供商。基于角色的访问、限定范围的 API 令牌、完整管理审计日志。",
    "Inline latency": "内联延迟",
    "The optional inline gateway adds single-digit-to-low-tens of milliseconds. Monitor-only mode adds zero.":
      "可选的内联网关仅增加数毫秒至数十毫秒。纯监控模式则完全不增加延迟。",
    "Availability": "可用性",
    "Multi-region, active-active. Detections degrade safe; telemetry is never dropped silently.":
      "多区域、双活架构。检测采用安全降级,遥测绝不会被静默丢弃。",
    "Regions": "区域",
    "ap-southeast-1, eu-west-1, us-east-1. Data residency pinned per tenant.":
      "ap-southeast-1、eu-west-1、us-east-1。数据驻留按租户绑定。",
    "Assurance": "保障",
    "ISO 27001 in progress. Penetration-tested quarterly; the platform red-teams itself continuously.":
      "ISO 27001 进行中。每季度渗透测试;平台亦持续对自身进行红队演练。",
    "Commercial": "商业模式", "Platform + usage": "平台费 + 用量",
    "Annual platform fee plus asset- and event-based metering, so cost rolls to the AI initiative budget.":
      "年度平台费,加上按资产与事件计量,让成本归入 AI 项目预算。",
    "Questions": "常见问题", "Before you ask.": "在你开口之前。",
    "Do you replace our SIEM?": "你们会取代我们的 SIEM 吗?",
    "No. AEGIS is built to sit on top of the SIEM you already run. We make it AI-fluent and feed it correlated incidents in OCSF.":
      "不会。AEGIS 设计上就是叠在你既有的 SIEM 之上。我们让它读懂 AI,并以 OCSF 馈入关联后的事件。",
    "How is this different from an AI firewall?": "这跟 AI 防火墙有什么不同?",
    "A prompt firewall sees text in and text out. AEGIS also sees tool calls, agent identity, model lineage and supply chain, and correlates them. The gateway is one of eight layers, not the whole product.":
      "提示防火墙只看到文字进、文字出。AEGIS 还看得到工具调用、智能体身份、模型谱系与供应链,并把它们关联起来。网关只是八层之一,不是产品全貌。",
    "Does our prompt data leave our environment?": "我们的提示数据会离开我们的环境吗?",
    "Not by default. The data plane runs in your region or your VPC. You choose what is redacted before anything is stored, and content can stay entirely in your tenant.":
      "默认不会。数据平面在你所在区域或你的 VPC 内运行。存储前由你决定要脱敏什么,内容可完全留在你的租户内。",
    "Can you see employee AI use across our office suites?": "你们看得到员工在办公套件里使用 AI 的情况吗?",
    "Yes. AEGIS watches workforce AI across the major productivity suites: their built-in office AI assistants, connected GPTs and browser LLMs. It flags data loss (PII, source code, secrets or regulated data leaving into an AI surface) and harmful use, with the user, the data class and a one-click block. It complements your CASB and DLP rather than replacing them.":
      "可以。AEGIS 监控主流办公套件中的员工 AI 使用:内置办公 AI 助手、连接的 GPT 与浏览器 LLM。它会标记数据泄露(PII、源代码、密钥或受监管数据流入 AI 界面)与有害使用,附上用户、数据类别与一键拦截。它是你 CASB 与 DLP 的补强,而非取代。",
    "What does onboarding look like?": "导入流程是什么样子?",
    "Read-only cloud roles plus a collector. First inventory inside the first sweep, correlation and continuous red team typically live within the first week. No app code changes.":
      "只读云角色,加上一个采集器。首次扫描即产出清单,关联分析与持续红队通常在第一周内上线。应用程序无需改任何代码。",
    "Which models and frameworks are supported?": "支持哪些模型与框架?",
    "Every major commercial LLM provider and managed model service, the common agent and orchestration frameworks, open agent protocols, and self-hosted inference servers. Same telemetry, same controls, wherever the AI runs.":
      "各主流商用 LLM 供应商与托管模型服务、常见的智能体与编排框架、开放智能体协议,以及自托管推理服务器。不论 AI 在哪里运行,都是同一份遥测、同一套控制。",
    "Can it audit us against ISO 42001, the EU AI Act and Singapore's frameworks?": "它能帮我们对 ISO 42001、EU AI Act 与新加坡的框架做审计吗?",
    "Yes. AEGIS runs one-click, scored conformity audits for ISO/IEC 42001, the EU AI Act, NIST AI RMF, the Singapore IMDA Model AI Governance Framework (incl. GenAI & AI Verify), MAS FEAT and OWASP. Each control is mapped to live platform evidence, with findings, remediation and an exportable report. Executive board packs and full technical reports are generated from the same live data.":
      "可以。AEGIS 对 ISO/IEC 42001、EU AI Act、NIST AI RMF、Singapore IMDA Model AI Governance Framework(含 GenAI 与 AI Verify)、MAS FEAT 与 OWASP 执行一键、评分式合规审计。每项控制都对应到平台的实时证据,并附发现、整改建议与可导出的报告。高管董事会包与完整技术报告均由同一份实时数据生成。",
    "Is the continuous red team safe to run in production?": "持续红队在生产环境运行安全吗?",
    "Yes. Attacks run with safe-execution scaffolding against production-equivalent targets. Findings open as incidents in the same console; purple-team by design.":
      "安全。攻击在安全执行框架下,针对与生产环境等价的目标进行。发现会在同一控制台开立为事件;设计上即是紫队。",
    "See the platform in action.": "看平台实际运作。",
    "A 30-minute guided run-through of the platform. Tell us a little about your context and we'll focus on what matters to you.":
      "30 分钟的平台导览讲解。简单告诉我们你的情况,我们会聚焦在你最在意的地方。",
    "That's the whole platform, not a slide deck.": "这就是平台的全部,不是一份幻灯片。",
    "A 30-minute guided run-through of the whole platform.": "30 分钟,完整导览整个平台。",
    "Name": "姓名", "Work email": "公司邮箱", "Company": "公司", "Role": "职位",
    "What would you like to see?": "你想看到什么?", "Request a demo": "预约演示",
    "Enterprises": "企业",
    "Design-partner cohort across financial services, healthcare and regulated sectors. Co-design detections for your jurisdiction.":
      "横跨金融、医疗与受监管行业的设计伙伴计划。一起为你的司法管辖区共同设计检测。",
    "Investors": "投资人",
    "Market sizing, competitive analysis and risk review available to qualified institutional investors under NDA.":
      "市场规模、竞争分析与风险评估,在 NDA 下提供给合格机构投资人。",
    "Engineers": "工程人才",
    "Hiring in Singapore, Tel Aviv, San Francisco and London: offensive AI research, ML platform, detection content.":
      "在新加坡、特拉维夫、旧金山与伦敦招聘:攻击性 AI 研究、ML 平台、检测内容。",
    "Security operations for AI.": "面向 AI 的安全运营平台。",
    "Sign in to the console →": "登录控制台 →",
    "AEGIS·AI is a product of Hesed & Emet Advisory Pte Ltd.": "AEGIS·AI 是 Hesed & Emet Advisory Pte Ltd 的产品。",
    "← Back to Hesed & Emet": "← 返回 Hesed & Emet",
    "#42-00, Suntec Tower Three, 8 Temasek Blvd, Singapore 038988":
      "新加坡 Suntec Tower Three #42-00,8 Temasek Blvd,038988",
    "+65 6829 2146": "+65 6829 2146",
    "© 2026 Hesed & Emet Advisory Pte Ltd. All rights reserved.":
      "© 2026 Hesed & Emet Advisory Pte Ltd. 版权所有。"
  };

  var KO = {
    "Product": "제품", "Platform": "플랫폼", "Capabilities": "전체 기능",
    "Teams": "활용 팀", "Why AEGIS": "왜 AEGIS인가", "Integrations": "연동",
    "Sign in": "로그인", "Book a demo": "데모 예약",
    "Security operations for AI": "AI를 위한 보안 운영 플랫폼",
    "You can't secure the AI you can't see.": "보이지 않는 AI는 지킬 수 없습니다.",
    "AEGIS finds every model, agent, and prompt running in your business, sanctioned or not. It watches what they do, and proves your defences actually hold. One console, instead of seven tools that don't talk to each other.":
      "AEGIS는 승인 여부와 관계없이 비즈니스에서 동작하는 모든 모델·에이전트·프롬프트를 찾아냅니다. 그들이 무엇을 하는지 지켜보고, 방어가 실제로 버티는지 입증합니다. 서로 말이 통하지 않는 7개 도구 대신, 하나의 콘솔로.",
    "Launch the console": "콘솔 열기", "Book a live demo": "라이브 데모 예약",
    "Built for the SOC": "SOC를 위해 설계", "Works with your SIEM": "기존 SIEM과 호환",
    "Cloud & model agnostic": "클라우드·모델 비종속",
    "aegis · live operations": "aegis · 실시간 운영",
    "Inference volume · last 24h": "추론 트래픽 · 최근 24시간",
    "Live activity": "실시간 활동", "Overview": "개요", "Discovery": "자산 탐지",
    "Identities": "아이덴티티", "Telemetry": "텔레메트리", "Kill chain": "킬체인",
    "Red team": "레드팀", "Compliance": "컴플라이언스", "Assets": "자산",
    "Open incidents": "미해결 사고", "Red-team coverage": "레드팀 커버리지", "Shadow AI": "섀도 AI",
    "Inference volume · last 6h": "추론 트래픽 · 최근 6시간",
    "Multi-stage attack · incident #4471": "다단계 공격 · 사고 #4471",
    "Prompt injection": "프롬프트 인젝션", "via support ticket": "고객지원 티켓을 통해",
    "Tool call abused": "도구 호출 악용", "internal search API": "내부 검색 API",
    "Credential reuse": "자격 증명 재사용", "agent svc-rag-07": "에이전트 svc-rag-07",
    "Data exfiltration": "데이터 유출", "blocked by AEGIS": "AEGIS가 차단함",
    "Four low-signal events. One correlated incident. Single-tool stacks see none of this.":
      "약한 신호 4건이 하나의 사고로 상관 분석됩니다. 단일 도구 스택은 이를 전혀 보지 못합니다.",
    "Continuous full-stack red team · run rt-2026-0517": "풀스택 상시 레드팀 · 실행 rt-2026-0517",
    "LLM · indirect prompt injection · 142 variants": "LLM · 간접 프롬프트 인젝션 · 142개 변형",
    "Agent kill-chain · confused-deputy tool abuse": "에이전트 킬체인 · 컨퓨즈드 대리인 도구 악용",
    "Identity · over-scoped agent token reachable": "아이덴티티 · 과도 권한 에이전트 토큰 접근 가능",
    "Supply chain · model namespace substitution": "공급망 · 모델 네임스페이스 치환",
    "Cloud infra · IMDS / GPU node escape attempts": "클라우드 인프라 · IMDS / GPU 노드 탈출 시도",
    "Model, agents, identity, supply chain and the cloud underneath: every finding opens an incident in the same console.":
      "모델, 에이전트, 아이덴티티, 공급망, 그리고 그 아래 클라우드까지. 모든 발견이 동일한 콘솔에서 사고로 열립니다.",
    "AI asset inventory · 1,284 discovered": "AI 자산 목록 · 1,284개 탐지됨",
    "Asset": "자산", "Type": "유형", "Owner": "담당", "Status": "상태",
    "Model": "모델", "Agent": "에이전트", "MCP server": "MCP 서버",
    "Lending": "여신", "Support": "고객지원", "Risk": "리스크",
    "Verified": "검증됨", "Re-scan": "재검사 필요", "Shadow": "섀도 자산",
    "Most teams run seven or more disconnected AI security tools and still can't answer one question: is our AI safe right now?":
      "대부분의 팀은 서로 끊긴 AI 보안 도구를 7개 이상 운영하면서도 한 가지 질문에 답하지 못합니다: <em>우리 AI는 지금 안전한가?</em>",
    "The product": "제품",
    "Stop tab-hopping between tools that don't talk.": "말이 통하지 않는 도구 사이를 오가는 일을 멈추십시오.",
    "When your AI does something it shouldn't, the clock is already running. You shouldn't be logging into five consoles to work out what happened. Start at the incident, see the whole session and where it led, and shut it down in one click.":
      "AI가 해서는 안 될 일을 하면 시계는 이미 돌아가고 있습니다. 무슨 일이 있었는지 파악하려고 콘솔 다섯 개에 로그인할 필요는 없습니다. 사고에서 출발해 전체 세션과 그 결과를 확인하고, 한 번의 클릭으로 차단하십시오.",
    "Live overview": "실시간 개요", "Asset inventory": "자산 목록",
    "The platform": "플랫폼", "Eight layers. One data plane.": "여덟 개의 계층, 하나의 데이터 플레인.",
    "You bought seven point tools and still can't connect them. AEGIS is eight layers writing to one record, so the weak signal everyone else ignores becomes an incident you can act on.":
      "포인트 도구를 일곱 개 샀지만 여전히 연결되지 않습니다. AEGIS는 하나의 기록에 쓰는 여덟 개 계층이라, 남들이 무시하는 약한 신호가 대응 가능한 사고가 됩니다.",
    "Asset & workforce AI discovery": "자산 및 임직원 AI 사용 탐지",
    "A live inventory of every model, agent, MCP server, vector store and prompt, plus how employees use AI across the major productivity suites, including built-in office AI assistants and browser LLMs. Sanctioned or shadow, you see it.":
      "모든 모델·에이전트·MCP 서버·벡터 스토어·프롬프트의 실시간 목록과 더불어, 주요 오피스 제품군 전반에서 임직원이 AI를 어떻게 쓰는지(내장 오피스 AI 어시스턴트와 브라우저 LLM 포함)까지 파악합니다. 승인됐든 섀도든 모두 보입니다.",
    "Supply chain & provenance": "공급망 및 출처 검증",
    "Every model and dataset is signed, verified at ingestion, and re-checked against new threats. Namespace-substitution and unsafe deserialisation get caught on the way in.":
      "모든 모델과 데이터셋은 서명되고, 반입 시 검증되며, 새로운 위협에 대해 지속적으로 재검사됩니다. 네임스페이스 치환과 안전하지 않은 역직렬화는 들어오는 길목에서 차단됩니다.",
    "Identity for AI": "AI를 위한 아이덴티티",
    "Treat every agent and inference call as its own identity. Short-lived scoped credentials, just-in-time access, and a tamper-evident receipt for every action.":
      "모든 에이전트와 추론 호출을 각자의 아이덴티티로 취급합니다. 단기·범위 한정 자격 증명, 적시 접근, 그리고 모든 동작에 대한 변조 방지 영수증.",
    "The data lake": "데이터 레이크",
    "An open telemetry schema that captures every prompt, completion, tool call, and inference event, and pipes straight into the SIEM you already run.":
      "모든 프롬프트·응답·도구 호출·추론 이벤트를 담는 개방형 텔레메트리 스키마로, 이미 운영 중인 SIEM으로 곧장 흘려보냅니다.",
    "Correlation": "상관 분석",
    "AI kill-chain logic that turns scattered, low-signal events into one incident: injection to tool abuse to credential reuse to exfiltration.":
      "흩어진 약한 신호 이벤트를 하나의 사고로 만드는 AI 킬체인 로직: 인젝션에서 도구 악용, 자격 증명 재사용, 데이터 유출까지.",
    "Investigate & respond": "조사 및 대응",
    "Reconstruct the full session, trace output back to its source, and respond in one click: revoke an agent, quarantine a model, roll back a prompt, isolate a store.":
      "전체 세션을 재구성하고, 출력을 출처까지 거슬러 추적하며, 한 번의 클릭으로 대응합니다: 에이전트 폐기, 모델 격리, 프롬프트 롤백, 스토어 차단.",
    "Model assurance": "모델 품질 보증",
    "Drift, bias, and hallucination tracking for the models you build, wired into the same engine, so a quality regression also reads as a security signal.":
      "직접 만든 모델의 드리프트·편향·환각을 추적하며 동일한 엔진에 연결합니다. 따라서 품질 저하는 곧 보안 신호로도 읽힙니다.",
    "Continuous full-stack red team": "풀스택 상시 레드팀", "Flagship": "대표 기능",
    "Red teaming stops being a PDF from six weeks ago. It runs every day, inside the same data plane as your detections, and it doesn't just probe the model. It attacks the whole stack that hosts your AI: agents and their kill chains, MCP servers and tools, the model supply chain, non-human identities and secrets, the vector and data plane, and the cloud infrastructure underneath. Every finding sharpens a defence; every defence invites the next attack. Attack and defence become one loop. It is the product no point tool can rebuild.":
      "레드팀은 더 이상 6주 전 PDF가 아닙니다. 탐지와 같은 데이터 플레인 안에서 매일 실행되며, 모델만 찔러보지 않습니다. AI를 떠받치는 전체 스택을 공격합니다: 에이전트와 그 킬체인, MCP 서버와 도구, 모델 공급망, 비인간 아이덴티티와 시크릿, 벡터·데이터 플레인, 그리고 그 아래 클라우드 인프라까지. 발견 하나하나가 방어를 날카롭게 하고, 방어 하나하나가 다음 공격을 부릅니다. 공격과 방어가 하나의 루프가 됩니다. 포인트 도구로는 다시 만들 수 없는 제품입니다.",
    "The gap today": "오늘의 빈틈", "Why you need it": "왜 필요한가",
    "Most teams can't say how many models and agents they actually run, and only see the AI that passes through the browser. Shadow-AI breaches add USD 670k each. You can't protect what you can't list.":
      "대부분의 팀은 실제로 몇 개의 모델과 에이전트를 돌리는지 말하지 못하고, 브라우저를 지나는 AI만 봅니다. 섀도 AI 침해는 건당 평균 67만 달러를 더합니다. 목록에 없으면 보호할 수 없습니다.",
    "One live inventory across cloud, code, OAuth and the office suites, with owners and dependencies, so the board question \"how much AI do we run, and who owns it?\" finally has a real answer.":
      "클라우드·코드·OAuth·오피스 제품군을 아우르는 하나의 실시간 목록에 담당자와 의존 관계까지 포함합니다. 그래서 「우리는 AI를 얼마나 돌리고, 누가 책임지는가?」라는 이사회 질문에 마침내 진짜 답을 줍니다.",
    "Models arrive unsigned from public hubs. Roughly 352,000 unsafe issues were found across 51,700 of them, and attackers have swapped backdoored models into cloud catalogues via namespace reuse.":
      "모델은 공개 허브에서 서명 없이 들어옵니다. 그 중 51,700개에서 약 352,000건의 안전하지 않은 문제가 발견됐고, 공격자는 네임스페이스 재사용으로 백도어 모델을 클라우드 카탈로그에 끼워 넣었습니다.",
    "Every model and dataset is signed and verified on the way in and re-checked against new CVEs. Substitution and unsafe deserialisation are blocked before production, not found after a breach.":
      "모든 모델과 데이터셋은 반입 시 서명·검증되고 새로운 CVE에 대해 재검사됩니다. 치환과 안전하지 않은 역직렬화는 침해 후가 아니라 운영 전에 차단됩니다.",
    "Agents run on broad, long-lived service keys; 97% of AI-breached organisations lacked proper access controls, so one compromised agent is a standing skeleton key.":
      "에이전트는 광범위하고 장기 유효한 서비스 키로 동작합니다. AI 침해를 겪은 조직의 97%가 적절한 접근 통제가 없었으므로, 침해된 에이전트 하나는 상시 만능 열쇠가 됩니다.",
    "Each agent gets its own short-lived, scoped identity with just-in-time access and a tamper-evident receipt. Damage is contained to one session and provable afterwards.":
      "각 에이전트는 적시 접근과 변조 방지 영수증을 갖춘 단기·범위 한정 아이덴티티를 부여받습니다. 피해는 한 세션으로 한정되고 사후에 입증 가능합니다.",
    "Prompts, tool calls and inference events never reach your SIEM, so AI incidents leave no forensic trail and the SOC is effectively blind to them.":
      "프롬프트·도구 호출·추론 이벤트가 SIEM에 닿지 않으므로, AI 사고는 포렌식 흔적을 남기지 않고 SOC는 사실상 보지 못합니다.",
    "An open, OCSF-aligned record of everything the AI did flows into the SIEM you already run. AI finally has an audit trail you can investigate and retain for regulators.":
      "AI가 한 모든 일을 담은 OCSF 정렬 개방 기록이 이미 운영 중인 SIEM으로 흘러듭니다. AI도 마침내 조사하고 규제기관용으로 보존할 감사 추적을 갖습니다.",
    "Every tool sees one weak signal; nobody joins injection → tool abuse → credential reuse → exfiltration, so multi-stage AI attacks read as background noise.":
      "도구마다 약한 신호 하나만 봅니다. 인젝션 → 도구 악용 → 자격 증명 재사용 → 유출을 아무도 잇지 못하므로, 다단계 AI 공격은 배경 잡음으로 읽힙니다.",
    "Cross-layer kill-chain logic fuses those scattered signals into one high-confidence incident in seconds: the attack single-tool stacks never see.":
      "교차 계층 킬체인 로직이 그 흩어진 신호를 수 초 만에 하나의 고신뢰 사고로 융합합니다. 단일 도구 스택은 결코 보지 못하는 공격입니다.",
    "After an AI incident, piecing together what the model saw, did and leaked across tools takes hours, but SEC disclosure is four days and attacker hand-off is 22 seconds.":
      "AI 사고 후, 모델이 무엇을 보고 하고 유출했는지 도구를 넘나들며 짜맞추는 데 몇 시간이 걸립니다. 그러나 SEC 공시는 4일, 공격자 인계는 22초입니다.",
    "Full session reconstruction and output-to-source lineage in one place, with one-click revoke, quarantine, rollback and isolate. Contain in minutes, with the evidence already written.":
      "전체 세션 재구성과 출력-출처 계보를 한곳에서, 한 번의 클릭으로 폐기·격리·롤백·차단까지. 몇 분 만에 봉쇄하고, 증거는 이미 작성돼 있습니다.",
    "Drift, bias and hallucination sit in notebooks the SOC never sees; a regulated model going wrong is both a quality and a security failure, and nobody catches it in time.":
      "드리프트·편향·환각은 SOC가 결코 보지 못하는 노트북 안에 있습니다. 규제 대상 모델의 오작동은 품질 실패이자 보안 실패인데, 제때 잡는 사람이 없습니다.",
    "The same engine tracks PSI drift, disparate impact and hallucination on your own models. A quality regression also fires as a security signal, with regulator-ready evidence (e.g. credit-risk PD under MAS / Basel III).":
      "동일한 엔진이 자체 모델의 PSI 드리프트·차별적 영향·환각을 추적합니다. 품질 저하는 보안 신호로도 발화하며, 규제 대응 증거(예: MAS / Basel III 하의 신용리스크 PD)가 함께 제공됩니다.",
    "Red teaming is a six-week-old PDF describing a system that has already changed, and it only tested the model, not the agents, identity, supply chain or cloud beneath it.":
      "레드팀은 이미 바뀐 시스템을 설명하는 6주 전 PDF이며, 모델만 시험했을 뿐 그 아래의 에이전트·아이덴티티·공급망·클라우드는 시험하지 않았습니다.",
    "Automated adversarial testing runs daily in the same data plane across the whole stack; every finding tunes a detection and opens a real incident, so you can answer \"did our controls actually hold this quarter?\" with proof.":
      "자동화된 적대적 테스트가 전체 스택에 걸쳐 같은 데이터 플레인에서 매일 실행됩니다. 모든 발견이 탐지를 보정하고 실제 사고를 엽니다. 그래서 「이번 분기에 우리 통제가 실제로 버텼는가?」에 증거로 답할 수 있습니다.",
    "Everything in AEGIS.": "AEGIS의 모든 것.",
    "AI risk isn't in one neat place. It's across your models, your agents, your supply chain and your people. Here's every gap we close, so you're not buying ten more tools to find out where you stand.":
      "AI 리스크는 한곳에 얌전히 있지 않습니다. 모델·에이전트·공급망·사람에 걸쳐 흩어져 있습니다. 우리가 메우는 모든 빈틈을 여기 정리했습니다. 현 위치를 알기 위해 도구를 열 개 더 살 필요가 없도록.",
    "01 Discovery & workforce AI": '<span>01</span> 탐지 및 임직원 AI',
    "Continuous inventory: models, agents, MCP servers, vector stores, prompts, datasets": "상시 목록화: 모델, 에이전트, MCP 서버, 벡터 스토어, 프롬프트, 데이터셋",
    "Shadow-AI discovery via browser, OAuth, network and code scanning": "브라우저·OAuth·네트워크·코드 스캔으로 섀도 AI 탐지",
    "Employee AI use across the major productivity suites & their office AI assistants": "주요 오피스 제품군과 그 오피스 AI 어시스턴트에서의 임직원 AI 사용 파악",
    "Data-loss detection: PII, source code, secrets, PHI/PCI into any AI surface": "데이터 유출 탐지: PII·소스코드·시크릿·PHI/PCI가 모든 AI 표면으로 흘러가는지",
    "Harmful-use detection with one-click block; complements CASB/DLP": "유해 사용 탐지 및 원클릭 차단; CASB/DLP 보완",
    "Live dependency graph: which app uses which model, agent and tool": "실시간 의존 그래프: 어떤 앱이 어떤 모델·에이전트·도구를 쓰는지",
    "02 Supply chain & provenance": '<span>02</span> 공급망 및 출처 검증',
    "Cryptographic signature verification at ingestion and re-verification over time": "반입 시 암호 서명 검증, 시간 경과에 따른 재검증",
    "Model namespace-reuse / substitution detection": "모델 네임스페이스 재사용 / 치환 탐지",
    "Pickle & safetensors deserialisation scanning (nullifAI class)": "Pickle·safetensors 역직렬화 스캔(nullifAI 유형)",
    "CycloneDX ML-BOM and SPDX 3.0.1 AI/Dataset profiles": "CycloneDX ML-BOM 및 SPDX 3.0.1 AI/데이터셋 프로파일",
    "Dataset licence verification and provenance tracing": "데이터셋 라이선스 검증 및 출처 추적",
    "Continuous re-scan against new CVEs and threat intel": "새 CVE 및 위협 인텔리전스 대비 상시 재스캔",
    "03 Identity for AI": '<span>03</span> AI 아이덴티티',
    "Non-human identity governance for models, agents and MCP servers": "모델·에이전트·MCP 서버를 위한 비인간 아이덴티티(NHI) 거버넌스",
    "Just-in-time, short-lived scoped credentials, destroyed on session end": "적시·단기·범위 한정 자격 증명, 세션 종료 시 파기",
    "Attribute- and intent-based access control for tool invocation": "도구 호출에 대한 속성·의도 기반 접근 통제",
    "Tamper-evident audit receipt for every action": "모든 동작에 대한 변조 방지 감사 영수증",
    "Native integration with your identity, PAM and access-governance tooling": "기존 아이덴티티·PAM·접근 거버넌스 도구와 네이티브 연동",
    "04 Telemetry & data lake": '<span>04</span> 텔레메트리 및 데이터 레이크',
    "Open, OCSF-aligned schema for every prompt, completion and tool call": "모든 프롬프트·응답·도구 호출을 위한 OCSF 정렬 개방 스키마",
    "Agent-to-agent (A2A) and MCP transaction capture": "에이전트 간(A2A) 및 MCP 트랜잭션 캡처",
    "RAG retrieval, embedding query and vector-store events": "RAG 검색, 임베딩 쿼리, 벡터 스토어 이벤트",
    "GPU / DPU-level inference event capture": "GPU / DPU 수준 추론 이벤트 캡처",
    "Pipes natively into your existing SIEM and observability stack": "기존 SIEM 및 관측 가능성 스택으로 네이티브 연동",
    "05 Correlation & the AI kill chain": '<span>05</span> 상관 분석 및 AI 킬체인',
    "Prompt injection → unauthorised tool-call chains": "프롬프트 인젝션 → 무단 도구 호출 체인",
    "Compositional exfiltration: permitted actions that add up to a breach": "조합형 유출: 허용된 동작들이 합쳐져 침해가 되는 경우",
    "System-prompt drift and tampering detection": "시스템 프롬프트 드리프트·변조 탐지",
    "Cross-session credential reuse by an agent identity": "에이전트 아이덴티티의 세션 간 자격 증명 재사용",
    "Membership inference and training-data extraction detection": "멤버십 추론 및 학습 데이터 추출 탐지",
    "Model namespace substitution between SDK pull and provenance": "SDK 풀과 출처 기록 사이의 모델 네임스페이스 치환",
    "06 Investigation & response": '<span>06</span> 조사 및 대응',
    "Full multi-turn session reconstruction": "멀티턴 세션 전체 재구성",
    "Lineage: output → model → training data → retrieval source": "계보: 출력 → 모델 → 학습 데이터 → 검색 출처",
    "Hallucination, jailbreak and exfiltration triage workflows": "환각·탈옥·유출 분류 대응 워크플로",
    "One-click: revoke agent, quarantine model, roll back prompt, isolate store": "원클릭: 에이전트 폐기, 모델 격리, 프롬프트 롤백, 스토어 차단",
    "AI-native MITRE-style ATT&CK mapping": "AI 네이티브 MITRE ATT&CK 방식 매핑",
    "07 Model assurance & in-house AI": '<span>07</span> 모델 품질 보증 및 자체 AI',
    "Population stability (PSI) and per-feature drift monitoring": "모집단 안정성(PSI) 및 피처별 드리프트 모니터링",
    "AUC / Gini performance tracking with regression alerts on new versions": "AUC / Gini 성능 추적, 신버전 성능 저하 시 경보",
    "Disparate-impact & bias on protected attributes (e.g. age, geo proxy)": "보호 속성에 대한 차별적 영향·편향(예: 연령, 지역 대리변수)",
    "Explainability / SHAP coverage and unexplained-decision rate": "설명 가능성 / SHAP 커버리지 및 설명 불가 결정 비율",
    "Regulated-model risk packs (e.g. credit-risk PD under MAS / Basel III)": "규제 대상 모델 리스크 팩(예: MAS / Basel III 하 신용리스크 PD)",
    "Integrates with your experiment-tracking and ML platform tools": "실험 추적 및 ML 플랫폼 도구와 연동",
    "08 Continuous full-stack red team": '<span>08</span> 풀스택 상시 레드팀',
    "LLM: OWASP LLM Top 10, refreshed jailbreak & injection libraries": "LLM: OWASP LLM Top 10, 지속 갱신되는 탈옥·인젝션 라이브러리",
    "Agents: kill-chain execution, confused-deputy, compositional exfiltration": "에이전트: 킬체인 실행, 컨퓨즈드 대리인, 조합형 유출",
    "MCP & tools: tool-poisoning and description-injection": "MCP·도구: 도구 포이즈닝 및 설명 인젝션",
    "Supply chain: namespace-reuse, pickle deserialisation": "공급망: 네임스페이스 재사용, pickle 역직렬화",
    "Identity & secrets: over-scoped tokens, credential abuse": "아이덴티티·시크릿: 과도 권한 토큰, 자격 증명 악용",
    "Cloud & infra: IMDS, GPU-node and container escape attempts": "클라우드·인프라: IMDS, GPU 노드·컨테이너 탈출 시도",
    "Data & network: vector-store egress and DLP-bypass simulation": "데이터·네트워크: 벡터 스토어 유출 및 DLP 우회 시뮬레이션",
    "Purple-team: every finding opens an incident in the same console": "퍼플팀: 모든 발견이 동일 콘솔에서 사고로 열림",
    "09 Compliance & governance": '<span>09</span> 컴플라이언스 및 거버넌스',
    "One-click automated audits, scored with an exportable report, for:": "<b>원클릭 자동 감사</b>, 점수화 및 보고서 내보내기 지원, 대상:",
    "ISO/IEC 42001: clauses 4 to 10, plus Annex A": "ISO/IEC 42001: 4~10조 및 부속서 A",
    "EU AI Act: Art. 9 to 15, Annex IV, post-market & incident duties": "EU AI Act: 제9~15조, 부속서 IV, 시판 후 및 사고 보고 의무",
    "NIST AI RMF: GOVERN, MAP, MEASURE, MANAGE": "NIST AI RMF: GOVERN, MAP, MEASURE, MANAGE",
    "Singapore IMDA: Model AI Governance Framework, GenAI & AI Verify": "Singapore IMDA: Model AI Governance Framework, GenAI 및 AI Verify",
    "MAS FEAT principles & OWASP LLM / Agentic Top 10": "MAS FEAT 원칙 및 OWASP LLM / Agentic Top 10",
    "SEC four-day blast-radius; SOC 2, GDPR, HIPAA, PCI DSS evidence packs": "SEC 4일 영향 범위 보고; SOC 2, GDPR, HIPAA, PCI DSS 증거 팩",
    "10 Executive & full reporting": '<span>10</span> 경영진 및 전체 리포팅',
    "Board-grade executive summary: posture score, top risks, trend": "이사회 수준 경영 요약: 보안 태세 점수, 핵심 리스크, 추세",
    "Full technical report across all eight layers with evidence": "여덟 계층 전체를 아우르는 증거 포함 기술 보고서",
    "Regulated model-risk reports (e.g. credit-risk PD, MAS / Basel III)": "규제 대상 모델 리스크 보고서(예: 신용리스크 PD, MAS / Basel III)",
    "Per-incident, red-team campaign and workforce-AI DLP reports": "사고별·레드팀 캠페인·임직원 AI DLP 보고서",
    "Signed, exportable PDF / JSON; immutable evidence log": "서명되고 내보내기 가능한 PDF / JSON; 변조 불가 증거 로그",
    "Scheduled distribution to the CISO, board and regulators": "CISO·이사회·규제기관으로 예약 배포",
    "How it works": "동작 방식", "Live in a day. Value in a week.": "하루면 가동, 일주일이면 가치.",
    "No agents on every box, no rip-and-replace. AEGIS reads the signals your stack already emits and adds the ones it doesn't.":
      "모든 서버에 에이전트를 깔 필요도, 기존 시스템을 들어낼 필요도 없습니다. AEGIS는 스택이 이미 내보내는 신호를 읽고, 없는 신호를 더합니다.",
    "Connect": "연결",
    "Point AEGIS at your clouds, gateways and SIEM with read-only roles and an OpenTelemetry collector. No code changes to your apps. Typical first connection: under an hour.":
      "읽기 전용 역할과 OpenTelemetry 컬렉터로 AEGIS를 클라우드·게이트웨이·SIEM에 연결합니다. 앱 코드 변경은 없습니다. 첫 연결은 보통 한 시간 이내.",
    "Discover": "탐지",
    "Within the first sweep you get a live inventory of every model, agent, MCP server and vector store, including the shadow AI nobody told you about, with owners and a dependency graph.":
      "첫 스캔만으로 모든 모델·에이전트·MCP 서버·벡터 스토어의 실시간 목록을, 아무도 알려주지 않은 섀도 AI까지 담당자·의존 그래프와 함께 얻습니다.",
    "Defend": "방어",
    "Correlation and the continuous red team turn on. Detections are exercised against live attacks daily, and every finding lands as an incident in the same console your SOC already works in.":
      "상관 분석과 상시 레드팀이 켜집니다. 탐지는 매일 실제 공격으로 단련되고, 모든 발견은 SOC가 이미 쓰는 동일 콘솔에 사고로 들어옵니다.",
    "Who uses it": "누가 쓰는가",
    "The teams who never agree, finally on one screen.": "한 번도 합의한 적 없는 팀들이 마침내 한 화면에서.",
    "Security leadership": "보안 리더십",
    "Answer the board with evidence": "이사회에 증거로 답하십시오",
    "How many agents do we run? What can they reach? Did our controls actually hold last quarter? AEGIS gives you the audit trail behind the answer: dashboards, evidence packs mapped to the EU AI Act, NIST AI RMF and ISO 42001, and disclosure-ready blast-radius reports.":
      "에이전트를 몇 개나 돌리는가? 무엇에 닿을 수 있는가? 지난 분기에 통제가 실제로 버텼는가? AEGIS는 답 뒤의 감사 추적을 제공합니다: 대시보드, EU AI Act·NIST AI RMF·ISO 42001에 매핑된 증거 팩, 공시 대응 영향 범위 보고서.",
    "The SOC": "보안 운영 센터(SOC)",
    "Investigate AI incidents, not tabs": "탭이 아니라 AI 사고를 조사하십시오",
    "One pane: prompts, tool calls, identities, models, and data flows. AI-native ATT&CK mapping, one-click containment, and detections that are exercised live by the red-team layer, so you know they work before an attacker tells you they don't.":
      "한 화면에: 프롬프트·도구 호출·아이덴티티·모델·데이터 흐름. AI 네이티브 ATT&CK 매핑, 원클릭 봉쇄, 그리고 레드팀 계층이 실시간으로 단련하는 탐지. 공격자가 알려주기 전에 작동 여부를 압니다.",
    "ML & product": "ML·제품 팀",
    "Ship your models with confidence": "확신을 갖고 모델을 출시하십시오",
    "Drift, bias, fairness and robustness checks where data scientists already work. Push-button adversarial testing before release and regression alerts on every version. Security consumes the same signals downstream. Velocity without new exposure.":
      "데이터 과학자가 이미 일하는 곳에서 드리프트·편향·공정성·견고성 점검. 출시 전 버튼 한 번으로 적대적 테스트, 버전마다 회귀 경보. 보안은 다운스트림에서 같은 신호를 소비합니다. 새로운 노출 없이 속도를.",
    "Why AEGIS": "왜 AEGIS인가",
    "The tools you've already bought don't cover this.": "이미 구매한 도구로는 이 영역이 커버되지 않습니다.",
    "What you run today": "현재 사용 중", "With AEGIS": "AEGIS 도입 시",
    "Prompt firewalls": "프롬프트 방화벽",
    "See text in, text out. Blind to tool calls, identity, lineage and supply chain. Nowhere to investigate.":
      "텍스트 입력과 출력만 봅니다. 도구 호출·아이덴티티·계보·공급망에는 깜깜하고, 조사할 곳이 없습니다.",
    "AEGIS": "AEGIS",
    "The inline gateway is one of eight layers, all feeding one engine and one investigation console.":
      "인라인 게이트웨이는 여덟 계층 중 하나일 뿐이며, 모두 하나의 엔진과 하나의 조사 콘솔로 모입니다.",
    "AI-BOM scanners": "AI-BOM 스캐너",
    "A snapshot in time, disconnected from runtime. No re-verification, no response.":
      "한 시점의 스냅샷일 뿐, 런타임과 단절돼 있습니다. 재검증도, 대응도 없습니다.",
    "Inventory is continuous and signed, and feeds detections that catch model substitution at runtime.":
      "목록은 상시적이고 서명되며, 런타임에 모델 치환을 잡아내는 탐지를 구동합니다.",
    "Red-team firms": "레드팀 컨설팅사",
    "A report describing a system that has already changed. No link to live detections.":
      "이미 바뀐 시스템을 설명하는 보고서. 실시간 탐지와 연결이 없습니다.",
    "Red teaming runs continuously in the same data plane. Findings tune detections the same day.":
      "레드팀이 같은 데이터 플레인에서 상시 실행됩니다. 발견은 그날 바로 탐지에 반영됩니다.",
    "Hyperscaler bundles": "하이퍼스케일러 번들",
    "One cloud's identity, SIEM and models. Multi-cloud teams are stranded.":
      "단일 클라우드의 아이덴티티·SIEM·모델에 종속됩니다. 멀티클라우드 팀은 고립됩니다.",
    "Cloud-, model- and SIEM-agnostic. Built to sit on top of what you already run.":
      "클라우드·모델·SIEM 비종속. 이미 운영 중인 것 위에 얹도록 설계됐습니다.",
    "The stakes": "무엇이 걸려 있나", "The exposure is already here.": "노출은 이미 와 있습니다.",
    "of the Fortune 500 run active AI agents": "의 포춘 500 기업이 활성 AI 에이전트를 운영",
    "of organisations lack full visibility into AI identities": "의 조직이 AI 아이덴티티에 대한 완전한 가시성이 없음",
    "of CISOs are confident they could contain a compromised agent": "의 CISO만이 침해된 에이전트를 봉쇄할 수 있다고 확신",
    "Microsoft, 2026": "Microsoft, 2026", "Cybersecurity Insiders, 2026": "Cybersecurity Insiders, 2026",
    "EU AI Act enforcement lands August 2026. SEC disclosure is four business days. Median attacker hand-off is 22 seconds. The time to see your AI is before someone else does.":
      "EU AI Act 시행은 <strong>2026년 8월</strong>입니다. SEC 공시는 <strong>영업일 4일</strong>. 공격자 인계 중앙값은 <strong>22초</strong>. AI를 봐야 할 때는, 남이 먼저 보기 전입니다.",
    "Sits on top of what you run.": "이미 운영 중인 것 위에 얹힙니다.",
    "We instrument where the AI runs, not where it was built, and we don't ask you to rip out your SIEM.":
      "우리는 AI가 만들어진 곳이 아니라 실제로 동작하는 곳에 계측합니다. 그리고 SIEM을 들어내라고 요구하지 않습니다.",
    "Models & frameworks": "모델·프레임워크",
    "Every major commercial LLM provider and managed model service, the common agent and orchestration frameworks, open agent protocols, and self-hosted inference servers. Same telemetry, same controls.":
      "주요 상용 LLM 공급자와 매니지드 모델 서비스, 일반적인 에이전트·오케스트레이션 프레임워크, 개방형 에이전트 프로토콜, 자체 호스팅 추론 서버까지. 동일한 텔레메트리, 동일한 통제.",
    "SIEM, XDR & identity": "SIEM·XDR·아이덴티티",
    "The major productivity suites and their built-in AI assistants for workforce-AI DLP. Your existing SIEM, XDR and observability stack. Your identity, PAM and governance tooling. Your ITSM and incident-workflow channels.":
      "임직원 AI DLP를 위한 주요 오피스 제품군과 내장 AI 어시스턴트. 기존 SIEM·XDR·관측 가능성 스택. 기존 아이덴티티·PAM·거버넌스 도구. 기존 ITSM 및 사고 워크플로 채널.",
    "EU AI Act Annex IV, NIST AI RMF, ISO/IEC 42001, OWASP LLM & Agentic Top 10, SEC disclosure, SOC 2, GDPR. Singapore IMDA, CSA, MAS; FCA, ECB, OCC.":
      "EU AI Act 부속서 IV, NIST AI RMF, ISO/IEC 42001, OWASP LLM·Agentic Top 10, SEC 공시, SOC 2, GDPR. Singapore IMDA·CSA·MAS; FCA·ECB·OCC.",
    "The detail": "세부 사항", "What you actually get.": "실제로 무엇을 얻는가.",
    "The questions your security, legal and procurement teams will ask in week one, answered here, not after you've signed an NDA.":
      "보안·법무·구매 팀이 첫 주에 물을 질문들을, NDA를 맺은 뒤가 아니라 여기서 먼저 답합니다.",
    "Deployment": "배포", "SaaS or in-VPC": "SaaS 또는 VPC 내",
    "Fully managed, or deployed inside your own cloud account. The data plane can run air-gapped.":
      "완전 관리형, 또는 자체 클라우드 계정 내 배포. 데이터 플레인은 에어갭 환경에서 실행 가능합니다.",
    "Your data": "당신의 데이터", "Stays in your tenant": "당신의 테넌트에 머묾",
    "Telemetry is processed in your region. Prompt and completion content never leaves your boundary by default.":
      "텔레메트리는 해당 리전에서 처리됩니다. 기본적으로 프롬프트·응답 내용은 경계를 벗어나지 않습니다.",
    "Access": "접근",
    "Works with any standards-based identity provider. Role-based access, scoped API tokens, full admin audit log.":
      "표준 기반의 모든 ID 공급자와 동작합니다. 역할 기반 접근, 범위 한정 API 토큰, 전체 관리 감사 로그.",
    "Inline latency": "인라인 지연",
    "The optional inline gateway adds single-digit-to-low-tens of milliseconds. Monitor-only mode adds zero.":
      "선택형 인라인 게이트웨이는 수 밀리초에서 수십 밀리초만 더합니다. 모니터 전용 모드는 지연이 전혀 없습니다.",
    "Availability": "가용성",
    "Multi-region, active-active. Detections degrade safe; telemetry is never dropped silently.":
      "멀티 리전, 액티브-액티브. 탐지는 안전하게 저하되며, 텔레메트리가 조용히 버려지는 일은 없습니다.",
    "Regions": "리전",
    "ap-southeast-1, eu-west-1, us-east-1. Data residency pinned per tenant.":
      "ap-southeast-1, eu-west-1, us-east-1. 데이터 거주지는 테넌트별로 고정됩니다.",
    "Assurance": "보증",
    "ISO 27001 in progress. Penetration-tested quarterly; the platform red-teams itself continuously.":
      "ISO 27001 진행 중. 분기별 모의 침투 테스트; 플랫폼은 스스로를 상시 레드팀 합니다.",
    "Commercial": "과금 모델", "Platform + usage": "플랫폼 + 사용량",
    "Annual platform fee plus asset- and event-based metering, so cost rolls to the AI initiative budget.":
      "연간 플랫폼 요금에 자산·이벤트 기반 미터링을 더해, 비용이 AI 사업 예산으로 귀속됩니다.",
    "Questions": "자주 묻는 질문", "Before you ask.": "묻기 전에.",
    "Do you replace our SIEM?": "기존 SIEM을 대체하나요?",
    "No. AEGIS is built to sit on top of the SIEM you already run. We make it AI-fluent and feed it correlated incidents in OCSF.":
      "아니요. AEGIS는 이미 운영 중인 SIEM 위에 얹도록 만들어졌습니다. SIEM이 AI를 이해하도록 만들고, OCSF로 상관 분석된 사고를 공급합니다.",
    "How is this different from an AI firewall?": "AI 방화벽과 무엇이 다른가요?",
    "A prompt firewall sees text in and text out. AEGIS also sees tool calls, agent identity, model lineage and supply chain, and correlates them. The gateway is one of eight layers, not the whole product.":
      "프롬프트 방화벽은 텍스트 입출력만 봅니다. AEGIS는 도구 호출·에이전트 아이덴티티·모델 계보·공급망까지 보고 이를 상관 분석합니다. 게이트웨이는 여덟 계층 중 하나일 뿐, 제품 전체가 아닙니다.",
    "Does our prompt data leave our environment?": "프롬프트 데이터가 우리 환경을 벗어나나요?",
    "Not by default. The data plane runs in your region or your VPC. You choose what is redacted before anything is stored, and content can stay entirely in your tenant.":
      "기본적으로는 아닙니다. 데이터 플레인은 해당 리전 또는 VPC 내에서 실행됩니다. 저장 전에 무엇을 마스킹할지 직접 정하며, 내용은 테넌트 내에 완전히 머무를 수 있습니다.",
    "Can you see employee AI use across our office suites?": "오피스 제품군 전반의 임직원 AI 사용을 볼 수 있나요?",
    "Yes. AEGIS watches workforce AI across the major productivity suites: their built-in office AI assistants, connected GPTs and browser LLMs. It flags data loss (PII, source code, secrets or regulated data leaving into an AI surface) and harmful use, with the user, the data class and a one-click block. It complements your CASB and DLP rather than replacing them.":
      "네. AEGIS는 주요 오피스 제품군 전반의 임직원 AI 사용을 감시합니다: 내장 오피스 AI 어시스턴트, 연결된 GPT, 브라우저 LLM. 데이터 유출(PII·소스코드·시크릿·규제 데이터가 AI 표면으로 나가는 것)과 유해 사용을 사용자·데이터 분류·원클릭 차단과 함께 표시합니다. CASB와 DLP를 대체하지 않고 보완합니다.",
    "What does onboarding look like?": "온보딩은 어떻게 진행되나요?",
    "Read-only cloud roles plus a collector. First inventory inside the first sweep, correlation and continuous red team typically live within the first week. No app code changes.":
      "읽기 전용 클라우드 역할과 컬렉터 하나. 첫 스캔에서 목록이 나오고, 상관 분석과 상시 레드팀은 보통 첫 주 안에 가동됩니다. 앱 코드 변경은 없습니다.",
    "Which models and frameworks are supported?": "어떤 모델과 프레임워크를 지원하나요?",
    "Every major commercial LLM provider and managed model service, the common agent and orchestration frameworks, open agent protocols, and self-hosted inference servers. Same telemetry, same controls, wherever the AI runs.":
      "주요 상용 LLM 공급자와 매니지드 모델 서비스, 일반적인 에이전트·오케스트레이션 프레임워크, 개방형 에이전트 프로토콜, 자체 호스팅 추론 서버까지. AI가 어디서 동작하든 동일한 텔레메트리, 동일한 통제.",
    "Can it audit us against ISO 42001, the EU AI Act and Singapore's frameworks?": "ISO 42001, EU AI Act, 싱가포르 프레임워크에 대해 감사할 수 있나요?",
    "Yes. AEGIS runs one-click, scored conformity audits for ISO/IEC 42001, the EU AI Act, NIST AI RMF, the Singapore IMDA Model AI Governance Framework (incl. GenAI & AI Verify), MAS FEAT and OWASP. Each control is mapped to live platform evidence, with findings, remediation and an exportable report. Executive board packs and full technical reports are generated from the same live data.":
      "네. AEGIS는 ISO/IEC 42001, EU AI Act, NIST AI RMF, Singapore IMDA Model AI Governance Framework(GenAI·AI Verify 포함), MAS FEAT, OWASP에 대해 원클릭·점수화 적합성 감사를 실행합니다. 각 통제는 플랫폼의 실시간 증거에 매핑되며, 발견·시정·내보내기 가능한 보고서가 제공됩니다. 경영진 이사회 팩과 전체 기술 보고서는 동일한 실시간 데이터에서 생성됩니다.",
    "Is the continuous red team safe to run in production?": "상시 레드팀을 운영 환경에서 돌려도 안전한가요?",
    "Yes. Attacks run with safe-execution scaffolding against production-equivalent targets. Findings open as incidents in the same console; purple-team by design.":
      "안전합니다. 공격은 안전 실행 스캐폴딩 하에 운영 환경과 동등한 대상에 대해 수행됩니다. 발견은 동일 콘솔에서 사고로 열리며, 설계상 퍼플팀입니다.",
    "See the platform in action.": "플랫폼이 실제로 동작하는 모습을 보십시오.",
    "A 30-minute guided run-through of the platform. Tell us a little about your context and we'll focus on what matters to you.":
      "30분간 플랫폼을 안내하며 함께 둘러봅니다. 상황을 간단히 알려주시면 가장 중요한 부분에 집중하겠습니다.",
    "That's the whole platform, not a slide deck.": "이것이 플랫폼의 전부입니다. 슬라이드가 아닙니다.",
    "A 30-minute guided run-through of the whole platform.": "30분, 플랫폼 전체를 안내 투어로.",
    "Name": "이름", "Work email": "회사 이메일", "Company": "회사", "Role": "직책",
    "What would you like to see?": "무엇을 보고 싶으신가요?", "Request a demo": "데모 신청",
    "Enterprises": "기업",
    "Design-partner cohort across financial services, healthcare and regulated sectors. Co-design detections for your jurisdiction.":
      "금융·헬스케어·규제 산업을 아우르는 디자인 파트너 코호트. 귀사의 관할권에 맞는 탐지를 함께 설계합니다.",
    "Investors": "투자자",
    "Market sizing, competitive analysis and risk review available to qualified institutional investors under NDA.":
      "시장 규모·경쟁 분석·리스크 검토를 NDA 하에 적격 기관 투자자에게 제공합니다.",
    "Engineers": "엔지니어 인재",
    "Hiring in Singapore, Tel Aviv, San Francisco and London: offensive AI research, ML platform, detection content.":
      "싱가포르·텔아비브·샌프란시스코·런던에서 채용: 공격형 AI 연구, ML 플랫폼, 탐지 콘텐츠.",
    "Security operations for AI.": "AI를 위한 보안 운영 플랫폼.",
    "Sign in to the console →": "콘솔에 로그인 →",
    "AEGIS·AI is a product of Hesed & Emet Advisory Pte Ltd.": "AEGIS·AI는 Hesed & Emet Advisory Pte Ltd의 제품입니다.",
    "← Back to Hesed & Emet": "← Hesed & Emet로 돌아가기",
    "#42-00, Suntec Tower Three, 8 Temasek Blvd, Singapore 038988":
      "#42-00, Suntec Tower Three, 8 Temasek Blvd, Singapore 038988",
    "+65 6829 2146": "+65 6829 2146",
    "© 2026 Hesed & Emet Advisory Pte Ltd. All rights reserved.":
      "© 2026 Hesed & Emet Advisory Pte Ltd. All rights reserved."
  };

  var LANGS = { "zh-Hant": ZH_HANT, "zh-Hans": ZH_HANS, "ko": KO };
  var LABELS = { "en": "English", "zh-Hant": "繁體中文", "zh-Hans": "简体中文", "ko": "한국어" };
  var ORDER = ["en", "zh-Hant", "zh-Hans", "ko"];
  var HTMLLANG = { "en": "en", "zh-Hant": "zh-Hant", "zh-Hans": "zh-Hans", "ko": "ko" };

  var SEL = [
    ".nav-links a", ".nav-login", ".nav-cta .btn-sm",
    ".kicker", ".hero-title", ".hero-sub", ".hero-cta a", ".hero-trust span",
    ".cm-title", ".cm-cap", ".ui-side i", ".ui-kpi span", ".ui-panel-h",
    ".kc-node b", ".kc-node span", ".kc-note", ".ui-table th", ".ui-table td",
    ".tab", ".sec-label", ".sec-title", ".lede", ".strip-line", ".vs-head span",
    ".cap-cta p", ".cap-cta .btn",
    ".layer-body h3", ".layer-body p", ".layer-no em", ".ld-k",
    ".cap h3", ".cap li", ".step h3", ".step p",
    ".persona-tag", ".persona h3", ".persona p",
    ".cmp .mark", ".cmp p",
    ".stat-desc", ".stat-src", ".band",
    ".eco-col p", ".spec span", ".spec b", ".spec p",
    ".faq summary", ".faq details > p",
    ".cta-wrap h2", ".cta-wrap .lede", ".demo-form label span", ".demo-form button",
    ".footer-brand p", ".footer-login", ".footer-back", ".footer-meta p"
  ].join(",");

  function norm(s) { return s.replace(/ /g, " ").replace(/\s+/g, " ").trim(); }

  function captured() { return document.querySelectorAll(SEL); }

  function apply(lang) {
    var dict = LANGS[lang];
    captured().forEach(function (el) {
      if (el.dataset.i18nEn === undefined) {
        el.dataset.i18nEn = el.innerHTML;
        el.dataset.i18nKey = norm(el.textContent);
      }
      if (lang === "en" || !dict) {
        el.innerHTML = el.dataset.i18nEn;
      } else {
        var v = dict[el.dataset.i18nKey];
        el.innerHTML = (v !== undefined) ? v : el.dataset.i18nEn;
      }
    });
    document.documentElement.lang = HTMLLANG[lang] || "en";
    var btn = document.getElementById("langBtn");
    if (btn) btn.firstChild.textContent = LABELS[lang] + " ";
    var dd = document.getElementById("langDd");
    if (dd) dd.querySelectorAll("[data-lang]").forEach(function (li) {
      li.setAttribute("aria-selected", li.dataset.lang === lang ? "true" : "false");
    });
    try { localStorage.setItem("aegis_lang", lang); } catch (e) {}
  }

  function current() {
    var v;
    try { v = localStorage.getItem("aegis_lang"); } catch (e) { v = null; }
    if (v === "zh") v = "zh-Hant"; // migrate old value
    return (v && (v === "en" || LANGS[v])) ? v : "en";
  }

  function init() {
    var dd = document.getElementById("langDd");
    var btn = document.getElementById("langBtn");
    if (dd && btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = dd.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      dd.querySelectorAll("[data-lang]").forEach(function (li) {
        li.addEventListener("click", function () {
          dd.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
          apply(li.dataset.lang);
        });
      });
      document.addEventListener("click", function (e) {
        if (!dd.contains(e.target)) {
          dd.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
        }
      });
    }
    apply(current());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
